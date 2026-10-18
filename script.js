
document.addEventListener("DOMContentLoaded", function () {
    const $ = (selector, parent = document) => parent.querySelector(selector);
    const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

    const productGrid = $("#productGrid");
    const searchInput = $("#searchInput");
    const sortProducts = $("#sortProducts");
    const shopTitle = $("#shopTitle");
    const resultCount = $("#resultCount");
    const activeCategory = $("#activeCategory");
    const modalBackdrop = $("#modalBackdrop");
    const modalTitle = $("#modalTitle");
    const modalContent = $("#modalContent");
    const sidebar = $("#sidebar");
    const overlay = $("#overlay");
    const toast = $("#toast");

    const products = [
        {
            id: 1, brand: "Roadster", name: "Classic Black T-Shirt",
            category: "tshirt", department: "Men", colour: "black",
            price: 499, original: 999, discount: 50, rating: 4.3,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2, brand: "HRX", name: "Essential White T-Shirt",
            category: "tshirt", department: "Men", colour: "white",
            price: 399, original: 799, discount: 50, rating: 4.2,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3, brand: "Roadster", name: "Blue Casual Shirt",
            category: "shirt", department: "Men", colour: "blue",
            price: 799, original: 1299, discount: 38, rating: 4.1,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4, brand: "StyleHub", name: "Everyday Denim Jeans",
            category: "jeans", department: "Women", colour: "blue",
            price: 999, original: 1999, discount: 50, rating: 4.0,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5, brand: "HRX", name: "Active Sports Shoes",
            category: "shoes", department: "Men", colour: "red",
            price: 1199, original: 2499, discount: 52, rating: 4.4,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6, brand: "Timewear", name: "Classic Everyday Watch",
            category: "watch", department: "Men", colour: "black",
            price: 799, original: 1599, discount: 50, rating: 4.1,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7, brand: "DressBerry", name: "Floral Summer Dress",
            category: "dress", department: "Women", colour: "pink",
            price: 1299, original: 2599, discount: 50, rating: 4.5,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8, brand: "StyleHub", name: "Pink Casual Top",
            category: "tshirt", department: "Women", colour: "pink",
            price: 599, original: 999, discount: 40, rating: 4.0,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9, brand: "HRX", name: "Comfort Running Shoes",
            category: "shoes", department: "Women", colour: "white",
            price: 1499, original: 2999, discount: 50, rating: 4.2,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 10, brand: "Roadster", name: "Kids Everyday T-Shirt",
            category: "tshirt", department: "Kids", colour: "blue",
            price: 349, original: 599, discount: 42, rating: 4.1,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 11, brand: "StyleHub", name: "Kids Casual Shirt",
            category: "shirt", department: "Kids", colour: "white",
            price: 499, original: 899, discount: 44, rating: 4.0,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 12, brand: "StyleHub", name: "Decorative Cushion",
            category: "home", department: "Home & Living", colour: "pink",
            price: 499, original: 799, discount: 38, rating: 4.2,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 13, brand: "StyleHub", name: "Home Decor Accent",
            category: "home", department: "Home & Living", colour: "white",
            price: 899, original: 1499, discount: 40, rating: 4.0,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 14, brand: "StyleHub", name: "Daily Beauty Essentials",
            category: "beauty", department: "Beauty", colour: "pink",
            price: 399, original: 699, discount: 43, rating: 4.1,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 15, brand: "StyleHub", name: "Skincare Essentials",
            category: "beauty", department: "Beauty", colour: "white",
            price: 599, original: 999, discount: 40, rating: 4.3,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 16, brand: "DressBerry", name: "Red Occasion Dress",
            category: "dress", department: "Women", colour: "red",
            price: 1799, original: 2999, discount: 40, rating: 4.4,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 17, brand: "Timewear", name: "Minimal Classic Watch",
            category: "watch", department: "Women", colour: "black",
            price: 1499, original: 2499, discount: 40, rating: 4.2,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 18, brand: "Roadster", name: "Blue Everyday Jeans",
            category: "jeans", department: "Men", colour: "blue",
            price: 1099, original: 1999, discount: 45, rating: 4.3,
            sizes: ["S", "M", "L", "XL"],
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
        }
    ];

    function loadSaved(key) {
        try {
            const data = JSON.parse(localStorage.getItem(key));
            return Array.isArray(data) ? data : [];
        } catch (error) {
            return [];
        }
    }

    let bag = loadSaved("fashionDemoBag");
    let wishlist = loadSaved("fashionDemoWishlist");
    let currentDepartment = "";
    let currentCategory = "";
    let selectedProduct = null;
    let selectedSize = "";
    let toastTimer;

    function saveData() {
        localStorage.setItem("fashionDemoBag", JSON.stringify(bag));
        localStorage.setItem("fashionDemoWishlist", JSON.stringify(wishlist));
    }

    function money(value) {
        return "₹" + Number(value).toLocaleString("en-IN");
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    function notify(message) {
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove("show");
        }, 2500);
    }

    function updateCounts() {
        const totalItems = bag.reduce((sum, item) => sum + item.quantity, 0);
        $("#bagCount").textContent = totalItems ? "(" + totalItems + ")" : "";
        $("#wishlistCount").textContent = wishlist.length ? "(" + wishlist.length + ")" : "";
    }

    function isWishlisted(id) {
        return wishlist.some(item => item.id === id);
    }

    function renderProducts() {
        const query = searchInput.value.trim().toLowerCase();

        const selected = name => $$('.filters input[name="' + name + '"]:checked')
            .map(input => input.value);

        const categories = selected("category");
        const brands = selected("brand");
        const prices = selected("price");
        const colours = selected("colour");
        const sizes = selected("size");
        const discounts = selected("discount");

        let visible = products.filter(product => {
            const text = (
                product.name + " " + product.brand + " " +
                product.category + " " + product.department
            ).toLowerCase();

            const matchSearch = text.includes(query);
            const matchDepartment = !currentDepartment ||
                product.department === currentDepartment;
            const matchCategory = (
                (!currentCategory || product.category === currentCategory) &&
                (categories.length === 0 || categories.includes(product.category))
            );
            const matchBrand = brands.length === 0 ||
                brands.includes(product.brand.toLowerCase());
            const matchColour = colours.length === 0 ||
                colours.includes(product.colour);
            const matchPrice = prices.length === 0 || prices.some(range => {
                const [min, max] = range.split("-").map(Number);
                return product.price >= min && product.price <= max;
            });
            const matchDiscount = discounts.length === 0 ||
                discounts.some(value => product.discount >= Number(value));
            const matchSize = sizes.length === 0 ||
                sizes.some(size => product.sizes.includes(size));

            return matchSearch && matchDepartment && matchCategory &&
                matchBrand && matchColour && matchPrice &&
                matchDiscount && matchSize;
        });

        const sort = sortProducts.value;

        if (sort === "price-low") {
            visible.sort((a, b) => a.price - b.price);
        } else if (sort === "price-high") {
            visible.sort((a, b) => b.price - a.price);
        } else if (sort === "discount") {
            visible.sort((a, b) => b.discount - a.discount);
        } else if (sort === "name") {
            visible.sort((a, b) => a.name.localeCompare(b.name));
        }

        shopTitle.textContent = currentDepartment
            ? currentDepartment.toUpperCase() + " COLLECTION"
            : currentCategory
                ? currentCategory.toUpperCase() + " COLLECTION"
                : "ALL PRODUCTS";

        activeCategory.textContent = currentDepartment ||
            (currentCategory ? currentCategory.toUpperCase() : "All categories");

        resultCount.textContent = visible.length + " products found";

        if (visible.length === 0) {
            productGrid.innerHTML = `
                <div class="no-products">
                    <h3>No products found</h3>
                    <p>Try another search or clear some filters.</p>
                </div>`;
            return;
        }

        productGrid.innerHTML = visible.map(product => `
            <article class="product-card">
                <div class="product-image-wrap" data-open-product="${product.id}">
                    <img class="product-image"
                         src="${product.image}"
                         alt="${escapeHTML(product.name)}"
                         loading="lazy">
                    <span class="product-discount">${product.discount}% OFF</span>
                    <button class="wishlist-heart ${isWishlisted(product.id) ? "active" : ""}"
                            data-wishlist="${product.id}"
                            aria-label="Toggle wishlist"
                            title="Add to wishlist">${isWishlisted(product.id) ? "♥" : "♡"}</button>
                </div>
                <div class="product-info" data-open-product="${product.id}">
                    <h3>${escapeHTML(product.brand)}</h3>
                    <p>${escapeHTML(product.name)}</p>
                    <div class="product-price">
                        <strong>${money(product.price)}</strong>
                        <del>${money(product.original)}</del>
                        <span>${product.discount}% off</span>
                    </div>
                    <span class="product-rating">★ ${product.rating} | Popular pick</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-bag" data-add-bag="${product.id}">ADD TO BAG</button>
                    <button data-open-product="${product.id}">DETAILS</button>
                </div>
            </article>
        `).join("");
    }

    function clearFilterInputs() {
        $$(".filters input[type='checkbox']").forEach(input => {
            input.checked = false;
        });
        searchInput.value = "";
        sortProducts.value = "recommended";
    }

    function resetAllFilters() {
        currentDepartment = "";
        currentCategory = "";
        clearFilterInputs();
        renderProducts();
    }

    function chooseDepartment(department) {
        currentDepartment = department;
        currentCategory = "";
        clearFilterInputs();
        renderProducts();
        $("#shop").scrollIntoView({ behavior: "smooth" });
    }

    function chooseCategory(category) {
        currentDepartment = "";
        currentCategory = category;
        clearFilterInputs();
        renderProducts();
        $("#shop").scrollIntoView({ behavior: "smooth" });
    }

    $$(".filters input").forEach(input => {
        input.addEventListener("change", renderProducts);
    });

    searchInput.addEventListener("input", function () {
        currentDepartment = "";
        currentCategory = "";
        renderProducts();
    });

    sortProducts.addEventListener("change", renderProducts);

    $("#resetFilters").addEventListener("click", resetAllFilters);

    $("#clearSearch").addEventListener("click", function () {
        searchInput.value = "";
        currentDepartment = "";
        currentCategory = "";
        renderProducts();
        searchInput.focus();
    });

    $("#exploreButton").addEventListener("click", function () {
        resetAllFilters();
    });

    $("#studioButton").addEventListener("click", function () {
        resetAllFilters();
    });

    // Category navigation and category cards.
    $$("[data-department]").forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            const department = element.dataset.department;
            chooseDepartment(department);

            if (element.closest(".sidebar")) closeSidebar();
        });
    });

    $$("[data-category]").forEach(element => {
        element.addEventListener("click", function () {
            chooseCategory(element.dataset.category);
        });
    });

    // Product card actions.
    productGrid.addEventListener("click", function (event) {
        const wishlistButton = event.target.closest("[data-wishlist]");
        if (wishlistButton) {
            event.stopPropagation();
            toggleWishlist(Number(wishlistButton.dataset.wishlist));
            return;
        }

        const bagButton = event.target.closest("[data-add-bag]");
        if (bagButton) {
            addToBag(Number(bagButton.dataset.addBag));
            return;
        }

        const detailElement = event.target.closest("[data-open-product]");
        if (detailElement) {
            openProduct(Number(detailElement.dataset.openProduct));
        }
    });

    function toggleWishlist(id) {
        const product = products.find(item => item.id === id);
        if (!product) return;

        if (isWishlisted(id)) {
            wishlist = wishlist.filter(item => item.id !== id);
            notify("Removed from wishlist.");
        } else {
            wishlist.push({ id: product.id });
            notify(product.name + " added to wishlist!");
        }

        saveData();
        updateCounts();
        renderProducts();
    }

    function addToBag(id, size) {
        const product = products.find(item => item.id === id);
        if (!product) return;

        const chosenSize = size || product.sizes[0];
        const existing = bag.find(item =>
            item.id === id && item.size === chosenSize
        );

        if (existing) {
            existing.quantity += 1;
        } else {
            bag.push({ id: id, size: chosenSize, quantity: 1 });
        }

        saveData();
        updateCounts();
        notify(product.name + " added to bag!");
    }

    function openModal(title, html) {
        modalTitle.textContent = title;
        modalContent.innerHTML = html;
        modalBackdrop.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modalBackdrop.classList.remove("show");
        document.body.style.overflow = "";
        selectedProduct = null;
        selectedSize = "";
    }

    $("#closeModal").addEventListener("click", closeModal);

    modalBackdrop.addEventListener("click", function (event) {
        if (event.target === modalBackdrop) closeModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
            closeSidebar();
        }
    });

    function openProduct(id) {
        const product = products.find(item => item.id === id);
        if (!product) return;

        selectedProduct = product;
        selectedSize = product.sizes[0];

        openModal(product.name, `
            <img class="modal-product-image"
                 src="${product.image}" alt="${escapeHTML(product.name)}">
            <h3>${escapeHTML(product.brand)}</h3>
            <p class="modal-muted">${escapeHTML(product.name)}</p>
            <div class="modal-price">
                ${money(product.price)}
                <del style="font-size:13px;color:#888;margin-left:7px">${money(product.original)}</del>
                <span style="font-size:13px;color:#ff905a">${product.discount}% off</span>
            </div>
            <p class="modal-muted">★ ${product.rating} customer rating (demo)</p>
            <p><strong>Colour:</strong> ${escapeHTML(product.colour)}</p>
            <p style="margin-top:15px"><strong>Select Size</strong></p>
            <div class="size-options">
                ${product.sizes.map((size, index) => `
                    <button class="${index === 0 ? "selected" : ""}"
                            data-select-size="${size}">${size}</button>
                `).join("")}
            </div>
            <button class="modal-action" id="modalAddBag">ADD TO BAG</button>
            <button class="modal-action secondary" id="modalWishlist">ADD TO WISHLIST</button>
        `);

        $$(".size-options button", modalContent).forEach(button => {
            button.addEventListener("click", function () {
                selectedSize = button.dataset.selectSize;
                $$(".size-options button", modalContent).forEach(item => {
                    item.classList.toggle("selected", item === button);
                });
            });
        });

        $("#modalAddBag").addEventListener("click", function () {
            addToBag(product.id, selectedSize);
            closeModal();
        });

        $("#modalWishlist").addEventListener("click", function () {
            toggleWishlist(product.id);
            closeModal();
        });
    }

    // Shopping bag
    function showBag() {
        if (bag.length === 0) {
            openModal("My Shopping Bag", `
                <div class="empty-state">
                    <h3>Your bag is empty</h3>
                    <p>Add products to see them here.</p>
                </div>
                <button class="modal-action" id="continueShopping">CONTINUE SHOPPING</button>
            `);
            $("#continueShopping").addEventListener("click", closeModal);
            return;
        }

        const rows = bag.map((item, index) => {
            const product = products.find(p => p.id === item.id);
            if (!product) return "";

            return `
                <div class="bag-row">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}">
                    <div>
                        <h4>${escapeHTML(product.brand)}</h4>
                        <p>${escapeHTML(product.name)}</p>
                        <p>Size: ${escapeHTML(item.size)}</p>
                        <p><strong>${money(product.price)}</strong></p>
                        <div class="row-buttons">
                            <button data-quantity="-1" data-index="${index}">−</button>
                            <span>Qty: ${item.quantity}</span>
                            <button data-quantity="1" data-index="${index}">+</button>
                            <button data-remove-bag="${index}">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        const total = bag.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product ? product.price * item.quantity : 0);
        }, 0);

        openModal("My Shopping Bag", `
            ${rows}
            <h3 class="bag-total">Total: ${money(total)}</h3>
            <p class="modal-muted">Frontend demo only. No real payment or order will be processed.</p>
            <button class="modal-action" id="demoCheckout">PROCEED TO CHECKOUT</button>
        `);

        $("#demoCheckout").addEventListener("click", function () {
            openModal("Demo Checkout", `
                <div class="empty-state">
                    <h3>Demo Checkout</h3>
                    <p>This website is frontend-only. Real orders and payments are not connected.</p>
                </div>
                <button class="modal-action" id="backToBag">BACK TO BAG</button>
            `);
            $("#backToBag").addEventListener("click", showBag);
        });
    }

    modalContent.addEventListener("click", function (event) {
        const quantityButton = event.target.closest("[data-quantity]");
        if (quantityButton) {
            const index = Number(quantityButton.dataset.index);
            const change = Number(quantityButton.dataset.quantity);

            if (!bag[index]) return;
            bag[index].quantity += change;

            if (bag[index].quantity <= 0) {
                bag.splice(index, 1);
            }

            saveData();
            updateCounts();
            showBag();
            return;
        }

        const removeButton = event.target.closest("[data-remove-bag]");
        if (removeButton) {
            bag.splice(Number(removeButton.dataset.removeBag), 1);
            saveData();
            updateCounts();
            showBag();
            notify("Item removed from bag.");
            return;
        }

        const removeWishlistButton = event.target.closest("[data-remove-wishlist]");
        if (removeWishlistButton) {
            wishlist.splice(Number(removeWishlistButton.dataset.removeWishlist), 1);
            saveData();
            updateCounts();
            showWishlist();
            notify("Removed from wishlist.");
        }
    });

    // Wishlist
    function showWishlist() {
        if (wishlist.length === 0) {
            openModal("My Wishlist", `
                <div class="empty-state">
                    <h3>Your wishlist is empty</h3>
                    <p>Tap the heart on a product to save it here.</p>
                </div>
            `);
            return;
        }

        const rows = wishlist.map((item, index) => {
            const product = products.find(p => p.id === item.id);
            if (!product) return "";

            return `
                <div class="wishlist-row">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}">
                    <div>
                        <h4>${escapeHTML(product.brand)}</h4>
                        <p>${escapeHTML(product.name)}</p>
                        <p><strong>${money(product.price)}</strong></p>
                        <div class="row-buttons">
                            <button data-wishlist-add="${product.id}">Add to Bag</button>
                            <button data-remove-wishlist="${index}">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        openModal("My Wishlist", rows);
    }

    modalContent.addEventListener("click", function (event) {
        const addButton = event.target.closest("[data-wishlist-add]");
        if (addButton) {
            addToBag(Number(addButton.dataset.wishlistAdd));
            closeModal();
            return;
        }
    });

    // Demo profile
    function showProfile() {
        openModal("My Profile", `
            <p class="modal-muted">This profile is stored only for this demo session.</p>
            <label for="profileName"><strong>Your Name</strong></label>
            <input class="form-field" id="profileName" type="text"
                   placeholder="Enter your name">
            <label for="profileEmail"><strong>Email (optional)</strong></label>
            <input class="form-field" id="profileEmail" type="email"
                   placeholder="Enter your email">
            <button class="modal-action" id="saveProfile">SAVE PROFILE</button>
            <p id="profileMessage" class="modal-muted"></p>
        `);

        $("#profileName").value = localStorage.getItem("fashionDemoName") || "";
        $("#profileEmail").value = localStorage.getItem("fashionDemoEmail") || "";

        $("#saveProfile").addEventListener("click", function () {
            const name = $("#profileName").value.trim();
            const email = $("#profileEmail").value.trim();

            if (!name) {
                $("#profileMessage").textContent = "Please enter your name.";
                return;
            }

            localStorage.setItem("fashionDemoName", name);
            localStorage.setItem("fashionDemoEmail", email);
            $("#profileMessage").textContent = "Profile saved in this browser!";
            notify("Demo profile saved.");
        });
    }

    // Menu controls
    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    }

    $("#menuButton").addEventListener("click", openSidebar);
    $("#closeMenu").addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Profile, Wishlist and Bag buttons
    document.addEventListener("click", function (event) {
        const panelButton = event.target.closest("[data-panel]");
        if (!panelButton) return;

        event.preventDefault();
        closeSidebar();

        const panel = panelButton.dataset.panel;
        if (panel === "bag") showBag();
        if (panel === "wishlist") showWishlist();
        if (panel === "profile") showProfile();
    });

    // Close menu when a category link is selected.
    $$(".sidebar a").forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    updateCounts();
    renderProducts();
});

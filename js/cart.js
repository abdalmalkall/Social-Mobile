function addToCart(name, price) {
    const product = { name, price, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();  // تحديث عدد المنتجات في السلة
}

// تحديث عدد العناصر في السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
  
    const cartLink = document.querySelector(".cart-link");
    if (cartLink) {
        cartLink.textContent = `Shopping Cart (${count})`;  // عرض عدد العناصر بجانب Shopping Cart
    }
}

// تحديث عدد المنتجات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateCartCount);
// إضافة منتج إلى السلة
function addToCart(name, price) {
    const product = { name, price, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
  
  // تحديث عدد العناصر بجانب رابط السلة
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
  
    const cartLink = document.querySelector(".nav a[href='cart.html']");
    if (cartLink) {
      cartLink.textContent = `Shopping Cart (${count})`;
    }
  }
  
  // عرض محتويات السلة في صفحة cart.html
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");
  
    if (!cartItemsContainer || !totalAmount) return;
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalAmount.textContent = "0";
      return;
    }
  
    let total = 0;
    cartItemsContainer.innerHTML = "";
  
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");
  
      productDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
  
      cartItemsContainer.appendChild(productDiv);
    });
  
    totalAmount.textContent = total.toFixed(2);
  }
  
  // إزالة عنصر من السلة
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
  }
  
  // تفريغ السلة بالكامل
  function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    updateCartCount();
  }
  
  // البحث عن المنتجات
  function searchProduct() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");
  
    products.forEach(product => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(query) ? "block" : "none";
    });
  }
  
  // تنفيذ عند تحميل الصفحة
  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    displayCart?.();
  });const cartItemsContainer = document.getElementById('cartItems');

  // مثلاً عندك مصفوفة cartItems أو cartData
  cartData.forEach(item => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
  
    productDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button class="remove-btn">Remove</button>
    `;
  
    cartItemsContainer.appendChild(productDiv);
  });
  
// عرض محتويات السلة في صفحة cart.html
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");

  if (!cartItemsContainer || !totalAmount) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalAmount.textContent = "0";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const productDiv = document.createElement("div");
    productDiv.classList.add("cart-item");

    productDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button class="remove-btn" data-index="${index}">
        <i class="fas fa-trash-alt"></i> Remove
      </button>
    `;

    cartItemsContainer.appendChild(productDiv);
  });

  // إضافة الحدث لكل زر إزالة
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      const productDiv = btn.closest(".cart-item");

      // تأثير تلاشي قبل الإزالة
      productDiv.style.transition = "opacity 0.4s ease";
      productDiv.style.opacity = "0";
      setTimeout(() => {
        removeFromCart(index);
      }, 400);
    });
  });

  totalAmount.textContent = total.toFixed(2);
}
// تفعيل زر "Buy Now"
document.querySelectorAll(".buy-now-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = btn.getAttribute("data-index");
    alert("Thank you for your purchase!");
    removeFromCart(index); 
  });
});
document.querySelectorAll(".buy-now-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = btn.getAttribute("data-index");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const selectedItem = cart[index];

    localStorage.setItem("selectedItem", JSON.stringify(selectedItem));

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    displayCart();

    window.location.href = "pay.html";
  });
});

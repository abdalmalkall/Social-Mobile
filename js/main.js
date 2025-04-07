// زر فتح / إغلاق السلة
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("visible");
});

// بيانات السلة
let cartItems = [];
const cartItemsList = document.getElementById("cart-items");

// إضافة منتج إلى السلة
function addToCart(product) {
  cartItems.push(product);
  updateCartUI();
}

// تحديث واجهة المستخدم الخاصة بالسلة
function updateCartUI() {
  cartItemsList.innerHTML = "";
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}

// عملية الدفع
function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Proceeding to checkout with:\n" + cartItems.join("\n"));
  cartItems = [];
  updateCartUI();
  cart.classList.remove("visible");
}

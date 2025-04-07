// تخزين العناصر في السلة
let cart = [];

// إضافة عنصر إلى السلة
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

// تحديث عرض السلة
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  // مسح العناصر القديمة من السلة
  cartItemsElement.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("div");
    li.classList.add("cart-item");

    li.innerHTML = `
      <span>${item.item}</span>
      <span>$${item.price}</span>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsElement.appendChild(li);

    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}

// إزالة عنصر من السلة
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// مسح السلة
function clearCart() {
  cart = [];
  updateCart();
}

// إتمام عملية الدفع
function checkout() {
  alert("Checkout complete!");
  cart = [];
  updateCart();
}

// إظهار سلة التسوق عند تحميل الصفحة
window.onload = function() {
  updateCart();
}
 
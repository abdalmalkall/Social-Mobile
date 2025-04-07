// Cart toggle functionality
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("visible");
});

// Cart data
let cartItems = [];
const cartItemsList = document.getElementById("cart-items");

function addToCart(product) {
  cartItems.push(product);
  updateCartUI();
}

function updateCartUI() {
  cartItemsList.innerHTML = "";
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    cartItemsList.appendChild(li);
  });
}

function checkout() {
  alert("Proceeding to checkout with: " + cartItems.join(", "));
  cartItems = [];
  updateCartUI();
  cart.classList.remove("visible");
}

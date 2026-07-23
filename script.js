

let cart = [];


function loadCart() {
  let storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  updateCartCount();
}


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}


function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  saveCart();
  updateCartCount();
  displayCart();
  alert(`${itemName} has been added to your cart!`);
}


function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return; // Prevent errors if elements missing

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = `${item.name} - MK${item.price}`;
    li.appendChild(span);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function () {
      removeFromCart(index);
    };
    li.appendChild(removeBtn);

    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}


function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  displayCart();
}


function clearCart() {
  cart = [];
  saveCart();
  updateCartCount();
  displayCart();
}

const checkoutBtn = document.getElementById("checkout");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Thank you for shopping with Bean Boutique!");
    clearCart();
  });
}


const clearCartBtn = document.getElementById("clear-cart");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is already empty!");
      return;
    }
    if (confirm("Are you sure you want to clear the cart?")) {
      clearCart();
      alert("Cart cleared!");
    }
  });
}


window.onload = function () {
  loadCart();
  displayCart();
};

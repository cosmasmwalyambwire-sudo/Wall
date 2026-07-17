
let cart = [];

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  updateCartCount();
  saveCart();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartCount();
  }
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - MK${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  document.getElementById("cart-total").textContent = total;
}


window.onload = function() {
  loadCart();
  if (document.getElementById("cart-items")) {
    displayCart();
  }
};

 
 

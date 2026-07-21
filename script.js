  function addToCart(productName, productPrice) {

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({

        name: productName,

        price: productPrice

      });

      localStorage.setItem("cart", JSON.stringify(cart));

      document.getElementById("cart-count").textContent = cart.length;

      alert(productName + " added to cart!");

    }

    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cart-count").textContent = storedCart.length;

    let slideIndex = 0;

    showSlides();

    function showSlides() {

      let slides = document.querySelectorAll(".slideshow img");

      slides.forEach(slide => slide.classList.remove("active"));

      slideIndex++;

      if (slideIndex > slides.length) {

        slideIndex = 1;

      }

      slides[slideIndex - 1].classList.add("active");

      setTimeout(showSlides, 3000);

    }

    window.onload = function () {

      document.getElementById("discountModal").style.display = "block";

    }

    document.querySelector(".close").onclick = function () {

      document.getElementById("discountModal").style.display = "none";

    }

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

 document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping with Bean Boutique!");

    
    cart = [];
    saveCart();
    displayCart();
    updateCartCount();
});
 

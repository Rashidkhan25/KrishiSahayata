const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".range__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".location__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".location__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".location__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".location__content .location__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");



/*header*/
document.addEventListener('DOMContentLoaded', () => {
  // Handle language selection
  const languageSelect = document.getElementById('languageSelect');
  languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value;
      alert('Language switched to: ' + selectedLanguage); // Example action
      // You can add logic here to switch languages dynamically if translations are available
  });

  // Handle cart actions
  const cart = document.getElementById('cart');
  let cartCount = 0;
  
  // Simulate adding an item to the cart
  cart.addEventListener('click', () => {
      cartCount++;
      cart.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart(${cartCount})`;
  });

  // Handle track order action
  const trackOrder = document.getElementById('trackOrder');
  trackOrder.addEventListener('click', () => {
      alert('Tracking order...');
      // Here you can add logic to track orders (e.g., redirect to order tracking page)
  });
});


/*equipment*/
function checkNearby() {
  const buyerLocation = document.getElementById('buyerLocation').value;
  // Use the free location API to check proximity
  navigator.geolocation.getCurrentPosition(function(position) {
      const buyerLat = position.coords.latitude;
      const buyerLng = position.coords.longitude;

      console.log(`Buyer Latitude: ${buyerLat}, Longitude: ${buyerLng}`);

      // Filter equipment based on the buyer's location (for demo purposes)
      const nearbyEquipment = equipmentList.filter(item => {
          // Assume location checking based on cities for simplicity
          return item.location.includes("Los Angeles") || item.location.includes("San Francisco");
      });

      displayEquipment(nearbyEquipment);
  });
}

function displayEquipment(equipmentArray) {
  const equipmentListDiv = document.getElementById('equipmentList');
  equipmentListDiv.innerHTML = '';

  equipmentArray.forEach(item => {
      equipmentListDiv.innerHTML += `
          <div class="equipment-card">
              <img src="${item.img}" alt="${item.name}">
              <div class="equipment-info">
                  <h3>${item.name}</h3>
                  <p><span>Price:</span> ${item.price}</p>
                  <p><span>Description:</span> ${item.description}</p>
                  <p><span>Location:</span> ${item.location}</p>
              </div>
          </div>
      `;
  });
}




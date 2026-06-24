document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-items');
    const menuLinks = document.querySelectorAll('.mobile-menu-items a');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});

// 
document.addEventListener("DOMContentLoaded", function () {

    const cartBtn = document.querySelector(".cart-toggle");
    const sidebar = document.querySelector(".section-cart-sidebar");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".close-cart");

    function openCart(){
        sidebar.classList.add("active");
        overlay.classList.add("active");
    }

    function closeCart(){
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }

    cartBtn.addEventListener("click", openCart);
    closeBtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);

});


//radio button checkout page
 function toggleRadio(radio) {
    if (radio.dataset.checked === "true") {
      radio.checked = false;
      radio.dataset.checked = "false";
    } else {
      
      const group = document.querySelectorAll(`input[name="${radio.name}"]`);
      group.forEach(el => el.dataset.checked = "false");
      
      radio.dataset.checked = "true";
    }
  }
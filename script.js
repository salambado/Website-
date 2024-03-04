var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  const hamburger = document.querySelector( ".hamburger" );
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



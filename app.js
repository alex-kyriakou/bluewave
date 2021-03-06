const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerElement = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-mobile .list-link");

// Toggle Navigation
const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// add/remove border-bottom when scroll
const headerBorderScroll = () => {
  if (this.scrollY > 30) {
    headerElement.classList.add("active-scroll");
  } else {
    headerElement.classList.remove("active-scroll");
  }
};

window.addEventListener("scroll", headerBorderScroll);

// Add selected link styles to the clicked link and close nav when links clicked

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMobile.classList.remove("active");
    headerElement.classList.remove("active");

    let current = document.getElementsByClassName("current");

    current[0].className = current[0].className.replace("current", "");
    link.className += " current";
  })
);

// Animation Using ScrollReavel JS library
const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
});

sr.reveal(`.image-left, .popular-destinations-data, .plan-trip-data`, {
  origin: "left",
});

sr.reveal(".image-center", {
  origin: "bottom",
});

sr.reveal(`.image-right, .showcase-data`, {
  origin: "right",
});

sr.reveal(".beach-data-wrapper", {
  origin: "bottom",
  interval: 450,
});

sr.reveal(".newsletter-container", {
  origin: "top",
});

sr.reveal(`.footer-container-inner > div `, {
  origin: "bottom",
  interval: 250,
});

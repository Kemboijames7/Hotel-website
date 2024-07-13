const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
 menuBtnIcon.setAttribute("class", "ri-menu-line");

})

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
//header container
ScrollReveal().reveal(".header__container .section__subheader",{
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1",{
  ...scrollRevealOption,
  delay:500
});
ScrollReveal().reveal(".header__container .btn",{
  ...scrollRevealOption,
  delay:1000,
});
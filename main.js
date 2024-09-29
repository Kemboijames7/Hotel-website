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
// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

 
const lazyImages = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(image => observer.observe(image));


document.addEventListener('keydown', function(e) {
  
  if (e.key === 'Tab') {
      const focusedElement = document.activeElement;
      const focusableElements = document.querySelectorAll('input, textarea, button');
      const index = Array.prototype.indexOf.call(focusableElements, focusedElement);

      if (index > -1) {
          const nextElement = focusableElements[index + 1] || focusableElements[0];  
          nextElement.focus();
          e.preventDefault(); 
      }
  }

  else if (e.key === 'Enter') {
      const focusedElement = document.activeElement;

     
      if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
          const form = focusedElement.closest('form');
          if (form) {
              form.submit();
          }
      }
      
      else if (focusedElement.tagName === 'BUTTON') {
          focusedElement.click();
      }
  }
});

const scrollTopButton = document.querySelector('.scroll_top');

window.addEventListener('scroll', () => {
  // Get the total height of the document and the height of the viewport
  const totalHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  const showButtonAt = totalHeight * 0.25;

  if (window.scrollY > showButtonAt) {
      scrollTopButton.style.display = 'block';  
  } else {
      scrollTopButton.style.display = 'none';   
  }
});


scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
      
  });
});
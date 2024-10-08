 // JavaScript for theme toggle 
 const dropdownContainer = document.querySelector('.dropdown-container');
 const dropdownButton = document.querySelector('.dropdown-button');
 const lightModeLink = document.getElementById('lightMode');
 const darkModeLink = document.getElementById('darkMode');
 const body = document.body;
 
 // Toggle dropdown visibility
 dropdownButton.addEventListener('click', () => {
     dropdownContainer.classList.toggle('active');
    
 });
 
 // Change theme to light mode
 lightModeLink.addEventListener('click', (event) => {
     event.preventDefault(); 
     body.classList.remove('dark-mode'); 
     localStorage.setItem('theme', 'light'); 
 
 });
 
 // Change theme to dark mode
 darkModeLink.addEventListener('click', (event) => {
     event.preventDefault(); 
     body.classList.add('dark-mode'); 
     localStorage.setItem('theme', 'dark'); 
     console.log('Theme changed to Dark Mode');
 });
 
 // Apply saved theme on page load
 if (localStorage.getItem('theme') === 'dark') {
     body.classList.add('dark-mode');
 } else {
     body.classList.remove('dark-mode'); 
 }


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


//Scroll Spy
const sections = document.querySelectorAll('h4');  
const navLinksb = document.querySelectorAll('.nav_links li');  

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the top position relative to the viewport
    const sectionHeight = section.clientHeight;

    // Check if the section is currently in view
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinksb.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


var typed = new Typed('.input__group', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});



  const commentForm = document.getElementById('commentForm');
  const commentsSection = document.getElementById('commentsSection');
  const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

  // Load saved comments from localStorage
  function loadComments() {
    commentsSection.innerHTML = '<h3>Comments:</h3>';
    savedComments.forEach(comment => {
      const commentElement = document.createElement('p');
      commentElement.innerText = comment;
      commentsSection.appendChild(commentElement);
    });
  }

  // Save comments to localStorage
  function saveComments() {
    localStorage.setItem('comments', JSON.stringify(savedComments));
  }

  // Handle form submission
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentText = document.getElementById('commentText').value;
    
    if (commentText.trim()) {
      // Add the comment to the saved comments array
      savedComments.push(commentText);
      saveComments();

      // Add the new comment to the UI
      const newComment = document.createElement('p');
      newComment.innerText = commentText;
      commentsSection.appendChild(newComment);
      
      // Clear the form
      commentForm.reset();
    }
  });

  // Initialize
  loadComments();


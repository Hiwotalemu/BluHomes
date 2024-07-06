
  function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.style.display = (menuLinks.style.display === 'block') ? 'none' : 'block';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', function () {
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropbtn')) {
        dropdownContent.style.display = 'none';
      }
    });
  });

  function scrollToTop2() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  let currentSlide = 0;

  function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
  });
  
  function scrollToTop2() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }
//   document.addEventListener("DOMContentLoaded", function () {
//     var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
//     window.addEventListener("scroll", function () {
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollToTopBtn.style.display = "block";
//       } else {
//         scrollToTopBtn.style.display = "none";
//       }
//     });
  
//     function scrollToTop() {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//     }
//   });
  
  
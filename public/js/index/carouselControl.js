document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselLeftButton = document.getElementById('carouselLeftButton');
    const carouselRightButton = document.getElementById('carouselRightButton');
    const productCarousel = document.getElementById('productCarousel');
  
    carouselLeftButton.addEventListener('click', function() {
      productCarousel.scrollBy({
        left: -600,
        behavior: 'smooth' 
      });
    });
  
    carouselRightButton.addEventListener('click', function() {
      productCarousel.scrollBy({
        left: 600,
        behavior: 'smooth'
      });
    });
  });
  
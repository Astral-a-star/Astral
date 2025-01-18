// Image Carousel Scroll Functionality
document.querySelectorAll('.image-carousel').forEach((carousel) => {
  const imageWrapper = carousel.querySelector('.image-wrapper');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');

  prevBtn.addEventListener('click', () => {
    imageWrapper.scrollBy({ left: -200, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    imageWrapper.scrollBy({ left: 200, behavior: 'smooth' });
  });
});

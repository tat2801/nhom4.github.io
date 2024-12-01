document.querySelector('.product-gallery').addEventListener('wheel', (e) => {
  e.preventDefault();
  e.currentTarget.scrollBy({
    left: e.deltaY > 0 ? 100 : -100,
    behavior: 'smooth',
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid");
  const images = Array.from(grid.children);

  // Shuffle function using Fisher-Yates algorithm
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  shuffleArray(images);

  // Append images in new order and apply fade-in effect with delay
  images.forEach((img, index) => {
      grid.appendChild(img);
      img.style.animationDelay = `${index * 0.1}s`; // Slight delay for staggered effect
  });
});

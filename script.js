
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

    // Append images in new order
    images.forEach(img => grid.appendChild(img));
  });
  document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid a");

    gridItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            // Create the overlay
            const overlay = document.createElement("div");
            overlay.classList.add("hover-sticker");
            overlay.textContent = item.querySelector("p").textContent;

            // Append overlay
            item.appendChild(overlay);

            // Get the image position and size
            const img = item.querySelector("img");
            const imgRect = img.getBoundingClientRect();

            // Position the overlay in the center of the image
            overlay.style.width = `${imgRect.width}px`; // Match image width
            overlay.style.height = `${imgRect.height}px`; // Match image height
            overlay.style.top = `${img.offsetTop}px`; // Align with image
            overlay.style.left = `${img.offsetLeft}px`; // Align with image
        });

        item.addEventListener("mouseleave", function () {
            // Remove overlay when mouse leaves
            const overlay = item.querySelector(".hover-sticker");
            if (overlay) {
                overlay.remove();
            }
        });
    });
});

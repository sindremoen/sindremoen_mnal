document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid");
  const images = Array.from(grid.children);

  // Shuffle function
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
document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project-list a");
    const hoverImage = document.createElement("img");

    hoverImage.id = "hover-image";
    hoverImage.style.position = "absolute";
    hoverImage.style.pointerEvents = "none";
    hoverImage.style.display = "none";
    hoverImage.style.maxHeight = "900px"; // Limit max height if needed
    document.body.appendChild(hoverImage);

    projectLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            const imgSrc = this.dataset.img;
            if (imgSrc) {
                hoverImage.src = imgSrc;
                hoverImage.style.display = "block";
            }
        });

        link.addEventListener("mousemove", function (e) {
            const offsetX = 15;
            const offsetY = 15;

            const imageHeight = hoverImage.offsetHeight || 200; // fallback height
            const pageHeight = window.innerHeight;

            let top = e.pageY + offsetY;

            // Adjust if image would overflow the bottom of the viewport
            if (top + imageHeight > window.scrollY + pageHeight) {
                top = window.scrollY + pageHeight - imageHeight - 10; // 10px margin from bottom
            }

            hoverImage.style.left = e.pageX + offsetX + "px";
            hoverImage.style.top = top + "px";
        });

        link.addEventListener("mouseleave", function () {
            hoverImage.style.display = "none";
        });
    });
});

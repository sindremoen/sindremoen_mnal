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

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project-list a");
    const hoverImage = document.createElement("img");

    hoverImage.id = "hover-image";
    document.body.appendChild(hoverImage);

    projectLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            const imgSrc = this.dataset.img; // More conventional way
            if (imgSrc) {
                hoverImage.src = imgSrc;
                hoverImage.style.display = "block";
            }
        });

        link.addEventListener("mousemove", function (e) {
            hoverImage.style.left = e.pageX + 15 + "px";
            hoverImage.style.top = e.pageY + 15 + "px";
        });

        link.addEventListener("mouseleave", function () {
            hoverImage.style.display = "none";
        });
    });
});
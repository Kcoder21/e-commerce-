const sidebar = document.getElementById("navbar");
const toggleBtn = document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const starGroup = document.querySelectorAll(".stars");

starGroup.forEach((group) => {
  const stars = group.querySelectorAll(".star");

  let rating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      highlightStar(stars, index);
    });

    star.addEventListener("click", () => {
      rating = index;
      highlightStar(stars, rating);
    });

    group.addEventListener("mouseleave", () => {
      highlightStar(stars, rating);
    });
  });
});

function highlightStar(stars, index) {
  stars.forEach((s, i) => {
    if (i <= index) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });
}

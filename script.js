const ratings = document.querySelectorAll(".rating");

let activeRating = localStorage.getItem("rating") || 1;

[...ratings].forEach((rating) => {
    rating.addEventListener("click", (e) => {
        const targetEl = e.target;
        [...ratings].forEach((rating) => rating.classList.remove("active"));

        targetEl.classList.add("active");
        localStorage.setItem("rating", targetEl.textContent);
    });
});

window.onload = () => {
    if (window.location.pathname === "/success.html") {
        const ratingContainer = document.querySelector(".given-rating");
        ratingContainer.textContent = activeRating;
    }
};

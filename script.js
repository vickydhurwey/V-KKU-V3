document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector("h1");

    title.style.opacity = "0";
    title.style.transform = "scale(0.7)";

    setTimeout(() => {
        title.style.transition = "all 1.5s ease";
        title.style.opacity = "1";
        title.style.transform = "scale(1)";
    }, 300);

});

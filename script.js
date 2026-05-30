function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const btn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


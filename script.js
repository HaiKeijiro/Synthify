let nav_fixed = document.getElementById("nav_fixed");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

// Navbar button
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Function to toggle between open and close buttons
function toggleButtons() {
    openBtn.style.display = openBtn.style.display === "none" ? "block" : "none";
    closeBtn.style.display = closeBtn.style.display === "none" ? "block" : "none";
}

// Event listener to toggle buttons when clicked
openBtn.addEventListener("click", toggleButtons);
closeBtn.addEventListener("click", toggleButtons);

// Toggle mobile menu visibility - burger button
document.getElementById('burger-btn').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

window.addEventListener("scroll", () => {
  // Underline
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("underline");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("underline");
      });
    }
  });
});

// Phone menu bar
let menu = document.getElementById("menu");
let close_menu = document.getElementById("close");
let navbar = document.getElementById("navbar");
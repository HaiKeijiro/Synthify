let nav_fixed = document.getElementById("nav_fixed");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

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

  // Navbar fixed
  if (window.scrollY > 200) {
    nav_fixed.classList.add("fixed", "w-full", "lg:w-[inherit]");
  } else {
    nav_fixed.classList.remove("fixed", "w-full", "lg:w-[inherit]");
  }
});

// Phone menu bar
let menu = document.getElementById("menu");
let close_menu = document.getElementById("close");
let navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  close_menu.classList.remove("hidden");
  navbar.classList.add("translate-y-[25%]");
});

close_menu.addEventListener("click", () => {
  menu.classList.remove("hidden");
  close_menu.classList.add("hidden");
  navbar.classList.remove("translate-y-[25%]");
});

// Better Experience Purposes
navLinks.forEach((nav) => {
  nav.addEventListener("click", () => {
    menu.classList.remove("hidden");
    close_menu.classList.add("hidden");
    navbar.classList.remove("translate-y-[25%]");
  });
});

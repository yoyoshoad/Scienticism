const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
console.log(hamburger);

const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    // header.style.backdropFilter = "blur(32px)";
    header.style.backgroundColor = "rgb(41, 41, 41)";
    header.style.boxShadow = " 0px 2.4rem 3.2rem rgba(0, 0, 0, 0.3)";
  } else {
    header.style.backgroundColor = "transparent";
    // header.style.backdropFilter = "blur(0px)";
    header.style.boxShadow = " 0 0 0 rgba(0, 0, 0, 0.3)";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

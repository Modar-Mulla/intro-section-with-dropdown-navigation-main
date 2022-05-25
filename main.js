const burgerIcon = document.querySelector(".burger-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenuIcon = document.querySelector(".close-menu-logo");
const featuresLink = document.querySelector(".mobile-nav .features");
const companyLink = document.querySelector(".mobile-nav .company");
const blackCover = document.querySelector(".black-cover");
burgerIcon.addEventListener("click", function (event) {
  mobileNav.classList.add("show-from-right");
  blackCover.style.display = "block";
});
closeMenuIcon.addEventListener("click", function (event) {
  mobileNav.classList.remove("show-from-right");
  blackCover.style.display = "none";
});
featuresLink.addEventListener("click", function (event) {
  if (featuresLink.nextElementSibling.style.display == "block") {
    featuresLink.nextElementSibling.style.display = "none";
  } else {
    featuresLink.nextElementSibling.style.display = "block";
  }
});
companyLink.addEventListener("click", function (event) {
  if (companyLink.nextElementSibling.style.display == "block") {
    companyLink.nextElementSibling.style.display = "none";
  } else {
    companyLink.nextElementSibling.style.display = "block";
  }
});

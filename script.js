"use strict";

const nav = document.querySelector(".desktop-nav");
const modalMobile = document.querySelector(".modal-mobile");
const mobileNav = document.querySelector(".mobile-nav");
const featuresOptions = document.querySelector(".features-options");
const companyOptions = document.querySelector(".company-options");
const mobileNavItem1 = document.querySelector(".mobile__nav-item-1");
const mobileNavItem2 = document.querySelector(".mobile__nav-item-2");
const desktopNavItem1 = document.querySelector(".desktop__nav-item-1");
const desktopNavItem2 = document.querySelector(".desktop__nav-item-2");
const featuresDesktop = document.querySelector(".features-desktop_options ");
const calendarDesktop = document.querySelector(".calendar-desktop_options");

nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("hamburger-btn")) {
    modalMobile.classList.remove("hidden");
  }
});

mobileNav.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-btn"))
    modalMobile.classList.add("hidden");
});

function dropDownMenu(navItem, modalOption) {
  const dropIcon = navItem.querySelector("img");
  let istoggled = false;

  function toggleMenu() {
    if (istoggled) {
      dropIcon.src = "images/icon-arrow-down.svg";
    } else {
      dropIcon.src = "images/icon-arrow-up.svg";
    }
    istoggled = !istoggled;
    modalOption.classList.toggle("hidden");
  }
  return toggleMenu;
}

const toggledOne = dropDownMenu(mobileNavItem1, featuresOptions);
const toggledTwo = dropDownMenu(mobileNavItem2, companyOptions);
const toggledThree = dropDownMenu(desktopNavItem1, featuresDesktop);
const toggledFour = dropDownMenu(desktopNavItem2, calendarDesktop);

//FOR MOBILE viewport ARROWS
mobileNavItem1.addEventListener("click", toggledOne);
mobileNavItem2.addEventListener("click", toggledTwo);

//FOR DESKTOP viewport ARROWS
desktopNavItem1.addEventListener("click", toggledThree);
desktopNavItem2.addEventListener("click", toggledFour);

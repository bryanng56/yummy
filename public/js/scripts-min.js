"use strict";function scrollHeader(){var e=document.getElementById("header");this.scrollY>=200?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}window.addEventListener("scroll",scrollHeader);var themeButton=document.getElementById("theme-button"),darkTheme="dark-theme",iconTheme="bx-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=function(){return document.body.classList.contains(darkTheme)?"dark":"light"},getCurrentIcon=function(){return themeButton.classList.contains(iconTheme)?"bx-moon":"bx-sun"};selectedTheme&&(document.body.classList["dark"===selectedTheme?"add":"remove"](darkTheme),themeButton.classList["bx-moon"===selectedIcon?"add":"remove"](iconTheme)),themeButton.addEventListener("click",(function(){document.body.classList.toggle(darkTheme),themeButton.classList.toggle(iconTheme),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())}));var navLink=document.querySelectorAll(".main-menu__link"),linkAction=function(){document.getElementById("main-menu").classList.remove("show-menu")};navLink.forEach((function(e){return e.addEventListener("click",linkAction)}));var sections=document.querySelectorAll("section[id]");function scrollActive(){var e=window.pageYOffset;sections.forEach((function(t){var n=t.offsetHeight,o=t.offsetTop-150,c=t.getAttribute("id");e>o&&e<=o+n?document.querySelector(".main-menu a[href*="+c+"]").classList.add("active-link"):document.querySelector(".main-menu a[href*="+c+"]").classList.remove("active-link")}))}window.addEventListener("scroll",scrollActive);var sr=ScrollReveal({origin:"top",distance:"30px",duration:2e3,reset:!0});function scrollTop(){var e=document.getElementById("scroll-top");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}sr.reveal(".home__data, .home__img,\n            .about__data, .about__img,\n            .services__content, .menu__content,\n            .app__data, .app__img,\n            .contact__data, .contact__button,\n            .footer__content",{interval:200}),window.addEventListener("scroll",scrollTop);var showMenu=function(e,t){var n=document.getElementById(e),o=document.getElementById(t);n&&o&&n.addEventListener("click",(function(){o.classList.toggle("show-menu")}))};showMenu("nav-toggle","main-menu");
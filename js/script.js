$(function(){
  // change active
  $(document).on("scroll", onScroll);

  // smooth scroll
  $("a.nav-link").click(function(e){
    e.preventDefault();
    $(document).off("scroll");

    $("a.nav-link").each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass("active");

    var target = this.hash, menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });

    toggleNavbar();
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  
  $("a.nav-link").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $("a.nav-link").removeClass("active");
        currLink.addClass("active");
    }
    else{
        currLink.removeClass("active");
    }
  });
}

const hamburger = document.querySelector(".nav-hamburger");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector("a.nav-logo");
const header = document.querySelector(".header");

function toggleNavbar() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logo.classList.toggle("active");
    header.classList.toggle("active");
}


// const hamburger = document.querySelector(".hamburger");
// const verticalNavbar = document.getElementById("vertical-navbar");

// // hamburger.addEventListener("click", mobileMenu);

// // function mobileMenu() {
// //     hamburger.classList.toggle("active");
// //     navMenu.classList.toggle("active");
// // }


// function toggleNavbar() {
//   hamburger.classList.toggle("active");
//   var displaySetting = window.getComputedStyle(verticalNavbar).display;
//   if (displaySetting == "grid") {
//     verticalNavbar.style.display = "none";
//   } else {
//     verticalNavbar.style.display = "grid";
//   }
// }
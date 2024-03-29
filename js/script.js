/**
 * Screen Size
 */
function isMobileScreen() {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;

    if (screenWidth <= 1000 || screenWidth / screenHeight <= 9/24) return true;
    return false;
}

/**
 * Navigation
 */
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

/**
 * Project Slideshow
 */
let currentSlideOrder = 1;
let projectSlideShowItemId = "project-slideshow-item";
let projectCardId = "project-card";
let projectCardLeftPaneId = "project-card-left-pane";
let projectCardRightPaneId = "project-card-right-pane";

let projectSlidesShowItems = document.getElementsByClassName(projectSlideShowItemId);
let projectCardItems = document.getElementsByClassName(projectCardId);
let projectCardLeftPaneItems = document.getElementsByClassName(projectCardLeftPaneId);
let projectCardRightPaneItems = document.getElementsByClassName(projectCardRightPaneId);

showSlides(currentSlideOrder);

// avoid multiple click
let projectTimeTransition = 500
let isProjectNavigationButtonClicked = false;

function plusSlides(numberOfSlides) {
    if (!isProjectNavigationButtonClicked) {
        // clicked
        isProjectNavigationButtonClicked = true;

        // set the current slide to back
        projectSlidesShowItems[currentSlideOrder - 1].style.zIndex = '0';

        // show the next slide
        let newSlideOrder = showSlides(currentSlideOrder + numberOfSlides);
        projectSlidesShowItems[currentSlideOrder - 1].style.zIndex = '0';

        projectCardRightPaneItems[currentSlideOrder - 1].classList.toggle("active");

        if (isMobileScreen()) {
            projectCardRightPaneItems[currentSlideOrder - 1].style.left = '-100%';
        } else {
            projectCardRightPaneItems[currentSlideOrder - 1].style.top = '-100%';
        }

        // close the current slide
        setTimeout(function () {
            projectSlidesShowItems[currentSlideOrder - 1].style.visibility = 'hidden';

            if (isMobileScreen()) {
                projectCardLeftPaneItems[currentSlideOrder - 1].style.left = '-100%';
                projectCardRightPaneItems[currentSlideOrder - 1].style.left = '100%';
            } else {
                projectCardLeftPaneItems[currentSlideOrder - 1].style.top = '-100%';
                projectCardRightPaneItems[currentSlideOrder - 1].style.top = '100%';
            }

            currentSlideOrder = newSlideOrder;
        }, projectTimeTransition)


        setTimeout(function() {
            isProjectNavigationButtonClicked = false;
        }, projectTimeTransition * 2)
    }
}

function showSlides(slideOrder) {

    if (slideOrder > projectSlidesShowItems.length) slideOrder = 1; // circling to the first slides
    if (slideOrder < 1) slideOrder = projectSlidesShowItems.length; // circling to the last slide

    // activate the current slide
    projectSlidesShowItems[slideOrder - 1].style.zIndex = '1';
    projectSlidesShowItems[slideOrder - 1].style.visibility = 'visible';

    projectCardRightPaneItems[slideOrder - 1].classList.toggle("active");
    if (isMobileScreen()) {
        projectCardLeftPaneItems[slideOrder - 1].style.left = '0';
        projectCardRightPaneItems[slideOrder - 1].style.left = '0';
    } else {
        projectCardLeftPaneItems[slideOrder - 1].style.top = '0';
        projectCardRightPaneItems[slideOrder - 1].style.top = '0';
    }

    return slideOrder;
}

/**
 * Working Experience
 */
function toggleCollapsibleSectionWithAnimation() {
    const collapsibleNode = document.getElementsByClassName("work-collapsible");
    const collapsibleElements = collapsibleNode[0].children;
    const collapsibleArrays = Array.from(collapsibleElements);
    
    collapsibleArrays.forEach((child) => {
        if (child.classList.contains("work-collapsible-card-header")) {
            const content =  child.nextElementSibling;
            if (child.isEqualNode(this)) {
                child.classList.add("active");
                content.classList.add("active");
            }
            else {
                child.classList.remove("active");
                content.classList.remove("active");
            }
        }
    })
}
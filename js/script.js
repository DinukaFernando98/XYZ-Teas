let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
    slideIndex++;
    showSlides();
    timer = _timer; // reset timer
}

function prevSlide() {
    slideIndex--;
    showSlides();
    timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    timer = _timer;
}

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dots");

    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 3; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
    timer--;

    if (timer < 1) {
        nextSlide();
        timer = _timer; // reset timer
    }
}, 1000); // 1sec

Resources

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


const text = document.querySelector(".text");
const image = document.querySelector(".image");

window.addEventListener("scroll", appearOnScroll);


function appearOnScroll() {
    let textPosition = text.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 1.2;
    if (windowHeight > textPosition) {
        text.classList.remove("push-left");
        image.classList.remove("push-right");
    } else {
        text.classList.add("push-left");
        image.classList.add("push-right");
    }

}


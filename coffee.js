document.addEventListener("DOMContentLoaded", () => {

    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");

    if (menuOpenButton) {
        menuOpenButton.addEventListener("click", () => {
            document.body.classList.add("show-mobile-menu");
        });
    }

    if (menuCloseButton) {
        menuCloseButton.addEventListener("click", () => {
            document.body.classList.remove("show-mobile-menu");
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("show-mobile-menu");
        });
    });

    if (typeof Swiper !== "undefined") {
        const slider = document.querySelector(".slider-wrapper");

        if (slider) {
            new Swiper(".slider-wrapper", {
                loop: true,
                grabCursor: true,
                spaceBetween: 25,

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true
                },

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }
            });
        }
    }

});

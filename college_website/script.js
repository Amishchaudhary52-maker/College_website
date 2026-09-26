/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(
                    counter.getAttribute("data-target")
                );

                let current = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.ceil(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);
            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const year = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${year} cosmos College. All Rights Reserved.`;

}
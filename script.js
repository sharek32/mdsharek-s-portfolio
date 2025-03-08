// Intro Screen Animation
document.addEventListener("DOMContentLoaded", function () {
    const viewPortfolioBtn = document.getElementById("view-portfolio");
    const loadingTexts = document.querySelectorAll(".loading-text");
    const introScreen = document.getElementById("intro-screen");
    const portfolioContent = document.getElementById("portfolio-content");
    const loadingBar = document.getElementById("loading-bar");

    // Hide the loading texts initially
    loadingTexts.forEach((text) => (text.style.opacity = "0"));

    // Add click event listener to the "View Portfolio" button
    viewPortfolioBtn.addEventListener("click", function () {
        // Hide the button and show the loading bar
        viewPortfolioBtn.style.display = "none";
        loadingBar.style.display = "block";

        // Animate the loading bar
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                // After loading bar completes, show the loading texts
                document.getElementById("loading-texts").style.display = "block";
                loadingTexts.forEach((text, index) => {
                    setTimeout(() => {
                        text.style.opacity = "1"; // Fade in each paragraph
                    }, index * 1000); // 1-second interval
                });

                // After all animations, hide the intro screen and show the portfolio
                setTimeout(() => {
                    introScreen.style.display = "none";
                    portfolioContent.style.display = "block";
                }, 4000); // Match the animation timing (3 paragraphs × 1 second + a buffer)
            } else {
                width += 10; // Increase the loading bar width
                loadingBar.style.width = `${width}%`;
            }
        }, 50); // Adjust the speed of the loading bar
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    themeToggleBtn.querySelector("i").classList.toggle("fa-sun");
    themeToggleBtn.querySelector("i").classList.toggle("fa-moon");
});

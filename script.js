document.addEventListener("DOMContentLoaded", function () {
    const viewPortfolioBtn = document.getElementById("view-portfolio");
    const loadingTexts = document.querySelectorAll(".loading-text");
    const introScreen = document.getElementById("intro-screen");
    const portfolioContent = document.getElementById("portfolio-content");

    // Hide the loading texts initially
    loadingTexts.forEach((text) => (text.style.opacity = "0"));

    // Add click event listener to the "View Portfolio" button
    viewPortfolioBtn.addEventListener("click", function () {
        viewPortfolioBtn.style.display = "none"; // Hide the button
        document.getElementById("loading-texts").style.display = "block"; // Show the loading texts

        // Animate the loading paragraphs sequentially
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
    });
});

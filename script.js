document.addEventListener("DOMContentLoaded", function() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const totalItems = sliderItems.length;

    // Dupliker billederne for at gøre slideren uendelig
    sliderTrack.innerHTML += sliderTrack.innerHTML;

    // Juster animationens længde baseret på antallet af billeder
    const animationDuration = totalItems * 5; // Juster værdien for at ændre hastigheden
    sliderTrack.style.animationDuration = `${animationDuration}s`;

    // Juster transformeringen, så slideren bevæger sig kontinuerligt
    const totalWidth = 300 * totalItems; // Beregn den totale bredde
    sliderTrack.style.animation = `scrollLeft 30s linear infinite`;

    // Opdater animationen for at sikre korrekt placering
    sliderTrack.style.transform = `translateX(-${totalWidth}px)`;
});
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");
    
    // Når du scroller ned, tilføj 'shrink' class
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
};


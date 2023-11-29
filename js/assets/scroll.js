window.addEventListener("load", function () {
    /**
     ** Scroll To Top
     */
    const scrollBtn = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 1100) {
            scrollBtn.style.bottom = "20px";
        } else {
            scrollBtn.style.bottom = "-70px";
        }
    });
});

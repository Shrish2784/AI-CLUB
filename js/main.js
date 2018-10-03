let header = document.querySelector("header");
document.addEventListener("scroll", (e) => {
    let scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollAmount >= 700) {
        header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    }
})

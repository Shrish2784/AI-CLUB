let header = document.querySelector("header");
header.style.backgroundColor = "rgba(255, 255, 255, 1)";
header.style.position = "static";
let headerHeight = header.offsetHeight;
document.addEventListener("scroll", (evt) => {
    let offset = window.pageYOffset || document.documentElement.scrollTop;
    if (offset >= headerHeight) {
        header.style.position = "fixed";
    } else {
        header.style.position = "static";
    }
})
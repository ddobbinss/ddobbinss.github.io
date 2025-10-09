document.getElementById("arrow-prev").onclick = (event) => {
    event.preventDefault();
    let currentSlide = document.querySelector("#slides img:not(.hidden)");
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = document.querySelector("#slides img:last-child");
    }
    currentSlide.classList.add("hidden");
    prevSlide.classList.remove("hidden");
    currentSlide = prevSlide;
}

document.getElementById("arrow-next").onclick = (event) => {
    event.preventDefault();
    let currentSlide = document.querySelector("#slides img:not(.hidden)");
    let nextSLide = currentSlide.nextElementSibling;

    if (!nextSLide) {
        nextSLide = document.querySelector("#slides img:first-child");
    }
    currentSlide.classList.add("hidden");
    nextSLide.classList.remove("hidden");

    currentSlide = nextSLide;

}
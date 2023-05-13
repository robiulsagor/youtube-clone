const menuBtn = document.querySelector(".menu")
const leftSide = document.querySelector(".main-left")

menuBtn.addEventListener("click", () => {
    leftSide.classList.toggle("show-left")
})
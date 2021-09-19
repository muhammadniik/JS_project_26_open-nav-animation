const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeicon");
const nav1 = document.querySelector(".nav1");
openNav.addEventListener("click", () => {

    nav1.classList.add("active");
})
closeNav.addEventListener("click", () => {
    nav1.classList.remove("active");
})
const menuIcon = document.querySelector(".menu_icon")
const conteiner = document.querySelector(".conteiner")
menuIcon.addEventListener("click",()=>{
    conteiner.classList.toggle("navigate")
})
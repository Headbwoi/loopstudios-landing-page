const open = document.getElementById('open')
const navMenu = document.getElementById('nav_menu')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    navMenu.classList.add("active")
})
close.addEventListener('click', () => {
    navMenu.classList.remove("active")
})
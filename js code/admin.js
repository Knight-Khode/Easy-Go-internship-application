const maindrop =document.querySelector('.trips-btn')
const subNav = document.querySelector('.sub-nav')
const mainNav = document.querySelector('.header-nav')
const menuBtn = document.querySelector('.menu')
const header = document.querySelector('header')
const closebtn = document.querySelector('.close')

mainNav.addEventListener('mouseover',(e)=>{
    subNav.style.display="block"
})

menuBtn.addEventListener('click',(e)=>{
    header.style.display="block"
    menuBtn.style.display ="none"
    closebtn.style.display="block"
})

closebtn.addEventListener('click',(e)=>{
    header.style.display="none"
    menuBtn.style.display="block"
    closebtn.style.display="none"
})

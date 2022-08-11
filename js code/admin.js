const maindrop =document.querySelector('.trips-btn')
const subNav = document.querySelector('.sub-nav')
const mainNav = document.querySelector('.header-nav')
const menuBtn = document.querySelector('.menu')
const header = document.querySelector('header')
const closebtn = document.querySelector('.close')
const body = document .querySelector('body')

mainNav.addEventListener('mouseover',(e)=>{
    subNav.style.display="block"
})

menuBtn.addEventListener('click',(e)=>{
    header.style.display="block"
    menuBtn.style.display ="none"
    closebtn.style.display="block"
})

closebtn.addEventListener('click',(e)=>{
    console.log(typeof(window.innerHeight))
    if(window.innerWidth <= 1300 ){
        header.style.display="none"
        menuBtn.style.display="block"
        closebtn.style.display="none"
    }else{
        menuBtn.style.display="none"
        closebtn.style.display="none"  
    }
})

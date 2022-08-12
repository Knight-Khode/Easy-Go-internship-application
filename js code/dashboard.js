const menuBtn = document.querySelector('.menu')
const bottom = document.querySelector('.bottom-content')
const close = document.querySelector('.close')

menuBtn.addEventListener('click',(e)=>{
    bottom.style.display="block"
    close.style.display="block"
    menuBtn.style.display="none"
})

close.addEventListener('click',(e)=>{
    bottom.style.display="none"
    close.style.display="none"
    menuBtn.style.display="block"
})
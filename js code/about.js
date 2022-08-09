const menu = document.querySelector('.icon')
const btmNav = document.querySelector("#bottom-nav")
const closeBtn = document.querySelector(".close")

menu.addEventListener('click',(e)=>{
    btmNav.classList.remove('hide')
    btmNav.classList.add('show')
    menu.classList.remove('topnav')
    menu.classList.add('hide')
    closeBtn.classList.remove('close')
    closeBtn.classList.add('show')
})

closeBtn.addEventListener('click',(e)=>{
    btmNav.classList.remove('show')
    btmNav.classList.add('hide')
    closeBtn.classList.remove('show')
    closeBtn.classList.add('close')
    menu.classList.remove('hide')
    menu.classList.add('topnav')
})
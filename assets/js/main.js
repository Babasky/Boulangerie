var menu = document.querySelector('.menu')

var icon = document.querySelector('header i')
var mobile = document.querySelector('.menu-mobile')

var ToggleMenu = ()=>{
    icon.classList.toggle('fa-xmark')
    mobile.classList.toggle('none')
    console.log('menu-mobile');
}


menu.onclick = ToggleMenu
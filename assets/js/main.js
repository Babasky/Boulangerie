var menu = document.querySelector('.menu');
var icon = document.querySelector('header i');
var mobile = document.querySelector('.menu-mobile');
var navMobileItem = document.querySelectorAll('.menu-mobile ul li');
var overlay = document.getElementById("overlay");


var ToggleMenu = ()=>{
    icon.classList.toggle('fa-xmark')
    if (!mobile.classList.contains('none')) {
        mobile.classList.toggle('close')
        setTimeout(()=>{
            mobile.classList.toggle('none')
            mobile.classList.toggle('close')
        },1000)
    }else{
        mobile.classList.toggle('none')
    }
    overlay.classList.toggle('none')
}


menu.onclick = ToggleMenu

for (let i = 0; i < navMobileItem.length; i++) {
    const element = navMobileItem[i];
    element.onclick = ToggleMenu
}

overlay.onclick = ToggleMenu




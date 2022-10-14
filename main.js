const menuMobileButton = document.getElementById('menu_mobile')
const menuMobile = document.getElementById('navbar_menu_mobile')

menuMobileButton.addEventListener('click', () => {
    menuMobileButton.classList.toggle('menu_close')
    menuMobile.classList.toggle('navbar_show')
})

anime({
    targets: '.header_title_arrow',
    translateY: [-200, 500],
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
}); 

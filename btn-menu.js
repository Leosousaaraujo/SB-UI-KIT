const $menu = document.querySelector('.menu')
const $btnMenuOpen = document.querySelector('.btn-menu-open')
const $btnMenuClose = document.querySelector('.btn-menu-close')

$btnMenuOpen.addEventListener('click',function(){
   $menu.classList.add('menu-open')
   $btnMenuOpen.classList.add('esconder')
   $btnMenuClose.classList.remove('esconder')
})

$btnMenuClose.addEventListener('click',function(){
      $menu.classList.remove('menu-open')
      $btnMenuOpen.classList.remove('esconder')
      $btnMenuClose.classList.add('esconder')
      
})


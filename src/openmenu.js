function openMenu(){
    let openMenu = document.getElementsByTagName("aside")[0]
    let backdrop = document.getElementsByClassName('backdrop')[0]
    let navigation = document.getElementsByClassName("navigation")

    openMenu.style.right='0'
    backdrop.style.display='block'
    document.body.style.overflow='hidden'
   
}

function closeMenu(){
    let openMenu = document.getElementsByTagName("aside")[0]
    let backdrop = document.getElementsByClassName('backdrop')[0]
    openMenu.style.right=""
    backdrop.style.display=''
    document.body.style.overflow=''
}
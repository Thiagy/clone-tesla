function btnMenu(){
    let menu = document.getElementById("menu")
    menu.style.backdropFilter=blur(10)
    menu.style.backgroundColor='black'

    let heightBody = document.documentElement.scrollTop
    if(heightBody >= 2310){
        content[4].style.opacity='1'
    }
}
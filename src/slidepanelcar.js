function slide2Auto(){

    let display_car = document.getElementsByClassName("display-car")
    let option = document.getElementsByClassName("option")
    let box_text_navigation = document.getElementsByClassName("box-text-navigation")
    let manual_slide = document.getElementsByName("input-navigation-manual")

    let date1 = new Date()
    let now = date1.getSeconds()



    if(manual_slide[0].checked || now<=12){

        display_car[4].style.display='none'
        option[4].style.backgroundColor='#5C5E62'
        box_text_navigation[4].style.display="none"

        display_car[3].style.display='none'
        option[3].style.backgroundColor='#5C5E62'
        box_text_navigation[3].style.display="none"

        display_car[2].style.display='none'
        option[2].style.backgroundColor='#5C5E62'
        box_text_navigation[2].style.display="none"

        display_car[1].style.display='none'
        option[1].style.backgroundColor='#5C5E62'
        box_text_navigation[1].style.display="none"

        display_car[0].style.display='block'
        option[0].style.backgroundColor='white'
        box_text_navigation[0].style.display="block"

    }else if(manual_slide[1].checked || now<=24){


        display_car[4].style.display='none'
        option[4].style.backgroundColor='#5C5E62'
        box_text_navigation[4].style.display="none"

        display_car[3].style.display='none'
        option[3].style.backgroundColor='#5C5E62'
        box_text_navigation[3].style.display="none"

        display_car[2].style.display='none'
        option[2].style.backgroundColor='#5C5E62'
        box_text_navigation[2].style.display="none"

        display_car[0].style.display='none'
        option[0].style.backgroundColor='#5C5E62'
        box_text_navigation[0].style.display="none"

        display_car[1].style.display='block'
        option[1].style.backgroundColor='white'
        box_text_navigation[1].style.display="block"

    }else if(manual_slide[2].checked || now<=36){

        display_car[4].style.display='none'
        option[4].style.backgroundColor='#5C5E62'
        box_text_navigation[4].style.display="none"

        display_car[3].style.display='none'
        option[3].style.backgroundColor='#5C5E62'
        box_text_navigation[3].style.display="none"

        display_car[1].style.display='none'
        option[1].style.backgroundColor='#5C5E62'
        box_text_navigation[1].style.display="none"

        display_car[0].style.display='none'
        option[0].style.backgroundColor='#5C5E62'
        box_text_navigation[0].style.display="none"

        display_car[2].style.display='block'
        option[2].style.backgroundColor='white'
        box_text_navigation[2].style.display="block"

    }else if(manual_slide[3].checked || now<=48){

        display_car[4].style.display='none'
        option[4].style.backgroundColor='#5C5E62'
        box_text_navigation[4].style.display="none"

        display_car[2].style.display='none'
        option[2].style.backgroundColor='#5C5E62'
        box_text_navigation[2].style.display="none"

        display_car[1].style.display='none'
        option[1].style.backgroundColor='#5C5E62'
        box_text_navigation[1].style.display="none"

        display_car[0].style.display='none'
        option[0].style.backgroundColor='#5C5E62'
        box_text_navigation[0].style.display="none"

        display_car[3].style.display='block'
        option[3].style.backgroundColor='white'
        box_text_navigation[3].style.display="block"

    }else if(manual_slide[4].checked || now<=60){

        display_car[3].style.display='none'
        option[3].style.backgroundColor='#5C5E62'
        box_text_navigation[3].style.display="none"

        display_car[2].style.display='none'
        option[2].style.backgroundColor='#5C5E62'
        box_text_navigation[2].style.display="none"

        display_car[1].style.display='none'
        option[1].style.backgroundColor='#5C5E62'
        box_text_navigation[1].style.display="none"

        display_car[0].style.display='none'
        option[0].style.backgroundColor='#5C5E62'
        box_text_navigation[0].style.display="none"

        display_car[4].style.display='block'
        option[4].style.backgroundColor='white'
        box_text_navigation[4].style.display="block"
    }
}


setInterval(slide2Auto, 500)


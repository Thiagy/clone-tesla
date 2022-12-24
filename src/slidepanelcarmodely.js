function slide2Auto(){

    let display_car_1 = document.getElementsByClassName("display-car-1")
    let display_car_2 = document.getElementsByClassName("display-car-2")
    let option = document.getElementsByClassName("option")
    let box_text_navigation = document.getElementsByClassName("box-text-navigation")
    let manual_slide = document.getElementsByName("input-navigation-manual")

    let date1 = new Date()
    let now = date1.getSeconds()


    if(manual_slide[0].checked || now<5){

        display_car_2[0].style.display='none'
        option[1].style.backgroundColor='#D0D1D2'
        box_text_navigation[1].style.display="none"

        display_car_1[0].style.display='block'
        option[0].style.backgroundColor='#171A20'
        box_text_navigation[0].style.display="block"

    }else if(manual_slide[1].checked || now<10){

        display_car_1[0].style.display='none'
        option[0].style.backgroundColor='#D0D1D2'
        box_text_navigation[0].style.display="none"

        display_car_2[0].style.display='block'
        option[1].style.backgroundColor='#171A20'
        box_text_navigation[1].style.display="block"

    }else if(manual_slide[0].checked || now<15){

        display_car_2[0].style.display='none'
        option[1].style.backgroundColor='#D0D1D2'
        box_text_navigation[1].style.display="none"

        display_car_1[0].style.display='block'
        option[0].style.backgroundColor='#171A20'
        box_text_navigation[0].style.display="block"

    }else if(manual_slide[1].checked || now<20){

        display_car_1[0].style.display='none'
        option[0].style.backgroundColor='#D0D1D2'
        box_text_navigation[0].style.display="none"

        display_car_2[0].style.display='block'
        option[1].style.backgroundColor='#171A20'
        box_text_navigation[1].style.display="block"

    }else if(manual_slide[0].checked || now<25){

        display_car_2[0].style.display='none'
        option[1].style.backgroundColor='#D0D1D2'
        box_text_navigation[1].style.display="none"

        display_car_1[0].style.display='block'
        option[0].style.backgroundColor='#171A20'
        box_text_navigation[0].style.display="block"
    }else if(manual_slide[1].checked || now<30){

        display_car_1[0].style.display='none'
        option[0].style.backgroundColor='#D0D1D2'
        box_text_navigation[0].style.display="none"

        display_car_2[0].style.display='block'
        option[1].style.backgroundColor='#171A20'
        box_text_navigation[1].style.display="block"

    }else if(manual_slide[0].checked || now<35){

        display_car_2[0].style.display='none'
        option[1].style.backgroundColor='#D0D1D2'
        box_text_navigation[1].style.display="none"

        display_car_1[0].style.display='block'
        option[0].style.backgroundColor='#171A20'
        box_text_navigation[0].style.display="block"
    }else if(manual_slide[1].checked || now<40){

        display_car_1[0].style.display='none'
        option[0].style.backgroundColor='#D0D1D2'
        box_text_navigation[0].style.display="none"

        display_car_2[0].style.display='block'
        option[1].style.backgroundColor='#171A20'
        box_text_navigation[1].style.display="block"

    }else if(manual_slide[0].checked || now<45){

        display_car_2[0].style.display='none'
        option[1].style.backgroundColor='#D0D1D2'
        box_text_navigation[1].style.display="none"

        display_car_1[0].style.display='block'
        option[0].style.backgroundColor='#171A20'
        box_text_navigation[0].style.display="block"
    }else if(manual_slide[1].checked || now<50){

        display_car_1[0].style.display='none'
        option[0].style.backgroundColor='#D0D1D2'
        box_text_navigation[0].style.display="none"

        display_car_2[0].style.display='block'
        option[1].style.backgroundColor='#171A20'
        box_text_navigation[1].style.display="block"

    }else if(manual_slide[0].checked || now<55){

        display_car_2[0].style.display='none'
        option[1].style.backgroundColor='#D0D1D2'
        box_text_navigation[1].style.display="none"

        display_car_1[0].style.display='block'
        option[0].style.backgroundColor='#171A20'
        box_text_navigation[0].style.display="block"

    }else if(manual_slide[1].checked || now<60){

        display_car_1[0].style.display='none'
        option[0].style.backgroundColor='#D0D1D2'
        box_text_navigation[0].style.display="none"

        display_car_2[0].style.display='block'
        option[1].style.backgroundColor='#171A20'
        box_text_navigation[1].style.display="block"

    }
}

setInterval(slide2Auto, 500)


function slideMotorCar(){
    let interior_motor = document.getElementById("interior-car-image")
    let slide_electric_powertrain = document.getElementsByClassName("slide-electric-powertrain")
    let darkness_line = document.getElementsByClassName("darkness-line")

    let date = new Date()
    let now = date.getSeconds()

    var largura_janela = window.screen.width;

    if(now<=7){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-2.jfif')"

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'

        slide_electric_powertrain[0].style.color='#9C9D9F'
        slide_electric_powertrain[1].style.color='black'
    }else if(now<=14){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-1.jfif')"

        slide_electric_powertrain[1].style.color='#9C9D9F'
        slide_electric_powertrain[0].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
        
    }else if(now<=21){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-2.jfif')"

        slide_electric_powertrain[0].style.color='#9C9D9F'
        slide_electric_powertrain[1].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'

    }else if(now<=28){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-1.jfif')"

        slide_electric_powertrain[1].style.color='#9C9D9F'
        slide_electric_powertrain[0].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
    }else if(now<=35){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-2.jfif')"

        slide_electric_powertrain[0].style.color='#9C9D9F'
        slide_electric_powertrain[1].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'
    }else if(now<=42){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-1.jfif')"

        slide_electric_powertrain[1].style.color='#9C9D9F'
        slide_electric_powertrain[0].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
    }else if(now<=49){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-2.jfif')"

        slide_electric_powertrain[0].style.color='#9C9D9F'
        slide_electric_powertrain[1].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'
    }else if(now<=56){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-1.jfif')"

        slide_electric_powertrain[1].style.color='#9C9D9F'
        slide_electric_powertrain[0].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
    }else if(now<=60){

        interior_motor.style.backgroundImage= "url('images/pg-model-s/interior-motor-2.jfif')"

        slide_electric_powertrain[0].style.color='#9C9D9F'
        slide_electric_powertrain[1].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'
    }
}

setInterval(slideMotorCar, 500)
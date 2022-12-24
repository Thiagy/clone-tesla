function slideMotorCar(){
    let interior_motor = document.getElementsByClassName("interior-motor")
    let car_profile_2 = document.getElementsByClassName("car-profile-2")
    let dual_motor_all_wheel_drive_1 = document.getElementsByClassName("dual-motor-all-wheel-drive-1")
    let darkness_line = document.getElementsByClassName("darkness-line")

    let date = new Date()
    let now = date.getSeconds()

    if(now<=7){

        interior_motor[0].style.display='none'
        interior_motor[1].style.display='block'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'

        dual_motor_all_wheel_drive_1[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[1].style.color='black'

        car_profile_2[0].style.color='#9C9D9F'
        car_profile_2[1].style.color='#9C9D9F'
        car_profile_2[2].style.color='#9C9D9F'

        car_profile_2[3].style.color='black'
        car_profile_2[4].style.color='black'
        car_profile_2[5].style.color='black'
    }else if(now<=14){

        interior_motor[1].style.display='none'
        interior_motor[0].style.display='block'

        dual_motor_all_wheel_drive_1[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[0].style.color='black'

        car_profile_2[3].style.color='#9C9D9F'
        car_profile_2[4].style.color='#9C9D9F'
        car_profile_2[5].style.color='#9C9D9F'

        car_profile_2[0].style.color='black'
        car_profile_2[1].style.color='black'
        car_profile_2[2].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
        
    }else if(now<=21){

        interior_motor[0].style.display='none'
        interior_motor[1].style.display='block'

        dual_motor_all_wheel_drive_1[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[1].style.color='black'

        car_profile_2[0].style.color='#9C9D9F'
        car_profile_2[1].style.color='#9C9D9F'
        car_profile_2[2].style.color='#9C9D9F'

        car_profile_2[3].style.color='black'
        car_profile_2[4].style.color='black'
        car_profile_2[5].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'

    }else if(now<=28){

        interior_motor[1].style.display='none'
        interior_motor[0].style.display='block'

        dual_motor_all_wheel_drive_1[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[0].style.color='black'

        car_profile_2[3].style.color='#9C9D9F'
        car_profile_2[4].style.color='#9C9D9F'
        car_profile_2[5].style.color='#9C9D9F'

        car_profile_2[0].style.color='black'
        car_profile_2[1].style.color='black'
        car_profile_2[2].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
    }else if(now<=35){

        interior_motor[0].style.display='none'
        interior_motor[1].style.display='block'

        dual_motor_all_wheel_drive_1[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[1].style.color='black'

        car_profile_2[0].style.color='#9C9D9F'
        car_profile_2[1].style.color='#9C9D9F'
        car_profile_2[2].style.color='#9C9D9F'

        car_profile_2[3].style.color='black'
        car_profile_2[4].style.color='black'
        car_profile_2[5].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'
    }else if(now<=42){

        interior_motor[1].style.display='none'
        interior_motor[0].style.display='block'

        dual_motor_all_wheel_drive_1[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[0].style.color='black'

        car_profile_2[3].style.color='#9C9D9F'
        car_profile_2[4].style.color='#9C9D9F'
        car_profile_2[5].style.color='#9C9D9F'

        car_profile_2[0].style.color='black'
        car_profile_2[1].style.color='black'
        car_profile_2[2].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
    }else if(now<=49){

        interior_motor[0].style.display='none'
        interior_motor[1].style.display='block'

        dual_motor_all_wheel_drive_1[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[1].style.color='black'

        car_profile_2[0].style.color='#9C9D9F'
        car_profile_2[1].style.color='#9C9D9F'
        car_profile_2[2].style.color='#9C9D9F'

        car_profile_2[3].style.color='black'
        car_profile_2[4].style.color='black'
        car_profile_2[5].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'
    }else if(now<=56){

        interior_motor[1].style.display='none'
        interior_motor[0].style.display='block'

        dual_motor_all_wheel_drive_1[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[0].style.color='black'

        car_profile_2[3].style.color='#9C9D9F'
        car_profile_2[4].style.color='#9C9D9F'
        car_profile_2[5].style.color='#9C9D9F'

        car_profile_2[0].style.color='black'
        car_profile_2[1].style.color='black'
        car_profile_2[2].style.color='black'

        darkness_line[1].style.backgroundColor='#9C9D9F'
        darkness_line[0].style.backgroundColor='black'

        darkness_line[1].style.height='4px'
        darkness_line[0].style.height='5px'
    }else if(now<=60){

        interior_motor[0].style.display='none'
        interior_motor[1].style.display='block'

        dual_motor_all_wheel_drive_1[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_1[1].style.color='black'

        car_profile_2[0].style.color='#9C9D9F'
        car_profile_2[1].style.color='#9C9D9F'
        car_profile_2[2].style.color='#9C9D9F'

        car_profile_2[3].style.color='black'
        car_profile_2[4].style.color='black'
        car_profile_2[5].style.color='black'

        darkness_line[0].style.backgroundColor='#9C9D9F'
        darkness_line[1].style.backgroundColor='black'

        darkness_line[0].style.height='4px'
        darkness_line[1].style.height='5px'
    }
}

setInterval(slideMotorCar, 500)
function slideVideoDemo(){
    let dual_motor_all_wheel_drive_demo = document.getElementsByClassName("dual-motor-all-wheel-drive-demo")
    let darkness_line_video = document.getElementsByClassName("darkness-line-video")
    
    let demo_video = document.getElementsByClassName("demo-video")

    let date = new Date()
    let now = date.getSeconds()

    if(now<=15){
        demo_video[3].style.display='none'
        demo_video[0].style.display='block'

        dual_motor_all_wheel_drive_demo[3].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[0].style.color='black'

        darkness_line_video[3].style.backgroundColor='#9C9D9F'
        darkness_line_video[0].style.backgroundColor='black'

        darkness_line_video[3].style.height='4px'
        darkness_line_video[0].style.height='5px'

    }else if(now<=30){
       
        demo_video[0].style.display='none'
        demo_video[1].style.display='block'

        dual_motor_all_wheel_drive_demo[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[1].style.color='black'

        darkness_line_video[0].style.backgroundColor='#9C9D9F'
        darkness_line_video[1].style.backgroundColor='black'

        darkness_line_video[0].style.height='4px'
        darkness_line_video[1].style.height='5px'

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
        
    }else if(now<=45){

        demo_video[1].style.display='none'
        demo_video[2].style.display='block'


        dual_motor_all_wheel_drive_demo[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[2].style.color='black'

        darkness_line_video[1].style.backgroundColor='#9C9D9F'
        darkness_line_video[2].style.backgroundColor='black'

        darkness_line_video[1].style.height='4px'
        darkness_line_video[2].style.height='5px'

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

    }else if(now<=60){

        demo_video[2].style.display='none'
        demo_video[3].style.display='block'

        dual_motor_all_wheel_drive_demo[2].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[3].style.color='black'

        darkness_line_video[2].style.backgroundColor='#9C9D9F'
        darkness_line_video[3].style.backgroundColor='black'

        darkness_line_video[2].style.height='4px'
        darkness_line_video[3].style.height='5px'

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
    }

   
}

setInterval(slideVideoDemo, 500)

function rolar() {
    let down_arrow =document.getElementsByClassName("down-arrow")
    let altura = document.documentElement.scrollTop/*Pega a medida de uma tag que se distancia da tag body*/ 
    let content = document.getElementsByClassName("content")/*Tag que se pretende alterar a medida que se move a barra de rolagem*/
    let alturaContent = content[0].scrollHeight
    console.log(`Altura: ${altura}`)
    console.log(`Altura do content: ${alturaContent}`)
    console.log()
    if(altura >= 0){
        down_arrow[0].style.opacity=1
        content[0].style.opacity='1'/*Com a altura maior ou igual à 0, o "Model 3" se mantém visível*/
    }
    if(altura >= 115){
        down_arrow[0].style.opacity=0
        content[0].style.opacity='0'/*Com a altura maior ou igual à 115, o "Model 3" se torna invisível*/
    }
    if(altura >= 440){
        content[1].style.opacity='1'/*Com a altura maior ou igual à 440, o "Model Y" se torna visível*/
    }
    if(altura < 440 || altura > 740){
        content[1].style.opacity='0'/*Com a altura menor que 440 ou maior que 740, o "Model Y" se torna invisível*/
    }
    if(altura >= 1070){
        content[2].style.opacity='1'/*Com a altura maior ou igual à 1070, o "Model S" se torna visível*/
    }
    if(altura < 1070 || altura > 1370){
        content[2].style.opacity='0'/*Com a altura menor que 1070 ou maior que 1370, o "Model S" se torna invisível*/
    }
    if(altura >= 1690){
        content[3].style.opacity='1'/*Com a altura maior ou igual à 1690, o "Model X" se torna visível*/
    }
    if(altura < 1690 || altura > 1990){
        content[3].style.opacity='0'/*Com a altura menor que 1690 ou maior que 1990, o "Model X" se torna invisível*/
    }
    if(altura >= 2310){
        content[4].style.opacity='1'/*Com a altura maior ou igual à 2310, o "Solar Panels" se torna visível*/
    }
    if(altura < 2310 || altura > 2610){
        content[4].style.opacity='0'/*Com a altura menor que 2310 ou maior que 2610, o "Solar Panels" se torna invisível*/
    }
    if(altura >= 2930){
        content[5].style.opacity='1'/*Com a altura maior ou igual à 2930, o "Panels Roofs" se torna visível*/
    }
    if(altura < 2930 || altura > 3240){
        content[5].style.opacity='0'/*Com a altura menor que 2930 ou maior que 3240, o "Panels Roofs" se torna invisível*/
    }
    if(altura >= 3580){
        content[6].style.opacity='1'/*Com a altura maior ou igual à 3580, o "Accessories" se torna visível*/
    }
    if(altura < 3580 || altura > 3850){
        content[6].style.opacity='0'/*Com a altura menor que 3580 ou maior que 3850, o "Accessories" se torna invisível*/
    }
    
  }

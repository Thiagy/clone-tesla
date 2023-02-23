function rolar(){
    
    let content_homepage = document.getElementById("content-homepage")/*Tag que se pretende alterar a medida que se move a barra de rolagem*/

    let text_h1 = document.getElementById("title-h1")
    let text_a = document.getElementById("title-a")

    let btn_custom_order = document.getElementsByClassName("btn-custom-order")[0]
    let btn_existing_inventory = document.getElementsByClassName("btn-existing-inventory")[0]

    let link_btn_custom_order = document.getElementById("link_btn_custom_order")/*link button custom order*/
    let link_btn_existing_inventory = document.getElementById("link_btn_existing_inventory")/*link button existing inventory*/

    let down_arrow =document.getElementsByClassName("down-arrow")/*down arraw*/

    let altura = document.documentElement.scrollTop

    console.log(`Distancia do top: ${altura}`)

    if(altura >= 0){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/null_BR/model3/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Custom Order'
        btn_existing_inventory.innerHTML='Demo Drive'
    
    }
    if(altura > 150){
        content_homepage.style.opacity=0
        down_arrow[0].style.opacity=0

    }
    if(altura > 450){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model Y"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/modely/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
    }
    if(altura > 773){
        content_homepage.style.opacity=0
    }
    if(altura > 1075){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model S"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/models/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='View Inventory'
    }
    if(altura > 1400){
        content_homepage.style.opacity=0
    }
    if(altura > 1700){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model X"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/modelx/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='View Inventory'
    }
    if(altura > 2020){
        content_homepage.style.opacity=0
    }
    if(altura > 2320){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Solar Roof"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'
    }
    if(altura > 2650){
        content_homepage.style.opacity=0
    }
    if(altura > 2950){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarroof'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'
    }
    if(altura > 3270){
        content_homepage.style.opacity=0
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model S"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        btn_existing_inventory.style.display='block'
    }
    if(altura > 3570){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Accessories"
        text_a.innerHTML=''
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'

        btn_custom_order.innerHTML='Shop Now'
        btn_existing_inventory.style.display='none'
    }
  }
  setInterval(rolar, 2000)

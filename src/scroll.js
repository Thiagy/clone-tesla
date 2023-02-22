function rolar(){

    let section_top = document.getElementsByTagName("section").style.top

    let content_homepage = document.getElementById("content-homepage")/*Tag que se pretende alterar a medida que se move a barra de rolagem*/

    let text_h1 = document.getElementById("title-h1")
    let text_a = document.getElementById("title-a")

    let btn_custom_order = document.getElementsByClassName("btn-custom-order")[0]
    let btn_existing_inventory = document.getElementsByClassName("btn-existing-inventory")[0]

    let link_btn_custom_order = document.getElementById("link_btn_custom_order")/*link button custom order*/
    let link_btn_existing_inventory = document.getElementById("link_btn_existing_inventory")/*link button existing inventory*/

    let down_arrow =document.getElementsByClassName("down-arrow")/*down arraw*/

    /*let altura = document.documentElement.scrollTop*/
    var topo = document.getElementById("divId").style.top;

    console.log(`Distancia do top: ${ section_top}`)

    if(altura >= 0){
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
    
    }
    

  }
  setInterval(rolar, 2000)

function rolar(){

    let link_btn_custom_order = document.getElementById("link_btn_custom_order")
    let link_btn_existing_inventory = document.getElementById("link_btn_existing_inventory")

    let text_h1 = document.getElementById("text-h1")
    let text_a = document.getElementById("text-a")

    let btn_custom_order = document.getElementsByClassName("custom-order")[0]
    let btn_existing_inventory = document.getElementsByClassName("existing-inventory")[0]

    let down_arrow =document.getElementsByClassName("down-arrow")
    
    let content = document.getElementsByClassName("content")/*Tag que se pretende alterar a medida que se move a barra de rolagem*/

    let altura = document.documentElement.scrollTop/*Pega a medida de uma tag que se distancia da tag body*/
    var altura_janela = window.screen.height;
    var largura_janela = window.screen.width;

    console.log(`Altura da janela: ${altura_janela}`);
    console.log(`Largura da janela: ${largura_janela}`);
    console.log(`Distancia do top: ${altura}`)
    

    var sumir = (altura_janela + largura_janela) * 8.3/100 /*proseguir testes*/
    console.log(`Resultado: ${sumir}`)
    /**/
   
        if(altura >= 0){/*"Model 3" começa a se tornar invisível*/
        content[0].style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        
        }
        if(altura > 12){
        down_arrow[0].style.opacity=0.8
        content[0].style.opacity=0.8
        }
        if(altura > 23){
        down_arrow[0].style.opacity=0.7
        content[0].style.opacity=0.7
        }
        if(altura > 45){
        down_arrow[0].style.opacity=0.6
        content[0].style.opacity=0.6
        }
        if(altura > 56){
        down_arrow[0].style.opacity=0.5
        content[0].style.opacity=0.5
        }
        if(altura > 67){
        down_arrow[0].style.opacity=0.4
        content[0].style.opacity=0.4
        }
        if(altura > 78){
        down_arrow[0].style.opacity=0.3
        content[0].style.opacity=0.3
        }
        if(altura > 89){
        down_arrow[0].style.opacity=0.2
        content[0].style.opacity=0.2
        }
        if(altura > 110){
        down_arrow[0].style.opacity=0.1
        content[0].style.opacity=0.1
        }
        if(altura > sumir){/*111 */
        down_arrow[0].style.opacity=0
        content[0].style.opacity=0
        }

        if(altura > 406){/*"Model Y" começa a se tornar visível*/

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model Y"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/my?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modely/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 411){
            content[0].style.opacity=0.2

        }
        if(altura > 427){
            content[0].style.opacity=0.3

        }
        if(altura > 443){
            content[0].style.opacity=0.4

        }
        if(altura > 459){
            content[0].style.opacity=0.5

        }
        if(altura > 475){
            content[0].style.opacity=0.6

        }
        if(altura > 491){
            content[0].style.opacity=0.7

        }
        if(altura > 507){
            content[0].style.opacity=0.8

        }
        if(altura > 523){
            content[0].style.opacity=0.9

        }
        if(altura > 537){
            content[0].style.opacity=1

        }
        if(altura > 550){/*Model Y começa a se tornar invisível*/
            content[0].style.opacity=0.9

        }
        if(altura > 563){
            content[0].style.opacity=0.8
        }
        if(altura > 576){
            content[0].style.opacity=0.7
        }
        if(altura > 589){

            content[0].style.opacity=0.6
        }
        if(altura > 602){

            content[0].style.opacity=0.5
        }
        if(altura > 615){
            content[0].style.opacity=0.4
        }
        if(altura > 628){
            content[0].style.opacity=0.3
        }
        if(altura > 641){
            content[0].style.opacity=0.2
        }
        if(altura > 654){
            content[0].style.opacity=0.1
        }
        if(altura > 648){
            content[0].style.opacity=0 
        }

        if(altura > 944){/*Model S começa a se tornar visível*/

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model S"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 950){
            content[0].style.opacity=0.2 
        }
        if(altura > 966){
            content[0].style.opacity=0.3 
        }
        if(altura > 982){
            content[0].style.opacity=0.4 
        }
        if(altura > 998){
            content[0].style.opacity=0.5 
        }
        if(altura > 1014){
            content[0].style.opacity=0.6 
        }
        if(altura > 1030){
            content[0].style.opacity=0.7 
        }
        if(altura > 1046){
            content[0].style.opacity=0.8 
        }
        if(altura > 1062){
            content[0].style.opacity=0.9
        }
        if(altura > 1075){
            content[0].style.opacity=1
        }
        if(altura > 1087){/*"Model S" começa a se tornar invisível*/
            content[0].style.opacity=0.9 
        }
        if(altura > 1098){
            content[0].style.opacity=0.8
        }
        if(altura > 1109){
            content[0].style.opacity=0.7
        }
        if(altura > 1120){
            content[0].style.opacity=0.6 
        }
        if(altura > 1131){
            content[0].style.opacity=0.5 
        }
        if(altura > 1142){
            content[0].style.opacity=0.4 
        }
        if(altura > 1153){
            content[0].style.opacity=0.3 
        }
        if(altura > 1164){
            content[0].style.opacity=0.2 
        }
        if(altura > 1175){
            content[0].style.opacity=0.1 
        }
        if(altura > 1186){
            content[0].style.opacity=0 
        }

        if(altura > 1482){/*O "Model X" começa a se tornar visível*/

        content[0].style.opacity=0.1 

        text_h1.innerHTML="Model X"
        text_a.innerHTML="Schedule a Test Drive"

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modelx/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'

    }
        if(altura > 1485){
            content[0].style.opacity=0.2 
        }
        if(altura > 1499){
            content[0].style.opacity=0.3 
        }
        if(altura > 1513){
            content[0].style.opacity=0.4 
        }
        if(altura > 1527){
            content[0].style.opacity=0.5 
        }
        if(altura > 1541){
            content[0].style.opacity=0.6 
        }
        if(altura > 1555){
            content[0].style.opacity=0.7 
        }
        if(altura > 1569){
            content[0].style.opacity=0.8 
        }
        if(altura > 1583){
            content[0].style.opacity=0.9 
        }
        if(altura > 1613){
            content[0].style.opacity=1 
        }
        if(altura > 1623){/*O "Model X" começa a se tornar invisível*/
            content[0].style.opacity=0.9  
        }
        if(altura > 1634){
            content[0].style.opacity=0.8  
        }
        if(altura > 1645){
            content[0].style.opacity=0.7  
        }
        if(altura > 1656){
            content[0].style.opacity=0.6  
        }
        if(altura > 1668){
            content[0].style.opacity=0.5  
        }
        if(altura > 1679){
            content[0].style.opacity=0.4  
        }
        if(altura > 1690){
            content[0].style.opacity=0.3  
        }
        if(altura > 1701){
            content[0].style.opacity=0.2  
        }
        if(altura > 1712){
            content[0].style.opacity=0.1  
        }
        if(altura > 1724){
            content[0].style.opacity=0  
        }

        if(altura > 2020){/*O "Solar Panels" começa a se tornar visível*/
        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML="Lowest Cost Solar Panels in America"

        content[0].style.opacity=0.1 

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'

    }
        if(altura > 2023){
            content[0].style.opacity=0.2  
        }
        if(altura > 2039){
            content[0].style.opacity=0.3  
        }
        if(altura > 2055){
            content[0].style.opacity=0.4  
        }
        if(altura > 2071){
            content[0].style.opacity=0.5  
        }
        if(altura > 2087){
            content[0].style.opacity=0.6  
        }
        if(altura > 2103){
            content[0].style.opacity=0.7  
        }
        if(altura > 2119){
            content[0].style.opacity=0.8  
        }
        if(altura > 2135){
            content[0].style.opacity=0.9  
        }
        if(altura > 2151){
            content[0].style.opacity=1  
        }
        if(altura > 2163){/*O "Solar Panels" começa a se tornar invisível*/
            content[0].style.opacity=0.9  
        }
        if(altura > 2174){
            content[0].style.opacity=0.8
        }
        if(altura > 2185){
            content[0].style.opacity=0.7  
        }
        if(altura > 2196){
            content[0].style.opacity=0.6  
        }
        if(altura > 2207){
            content[0].style.opacity=0.5  
        }
        if(altura > 2218){
            content[0].style.opacity=0.4
        }
        if(altura > 2229){
            content[0].style.opacity=0.3 
        }
        if(altura > 2240){
            content[0].style.opacity=0.2
        }
        if(altura > 2251){
            content[0].style.opacity=0.1
        }
        if(altura > 2262){
            content[0].style.opacity=0 
        }

        if(altura > 2558){/*O "Solar Roof" começa a se tornar visível*/
    
            text_h1.innerHTML="Solar Roofs"
            text_a.innerHTML="Produce Clean Energy From Your Roof"
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://www.tesla.com/energy/design'
            link_btn_existing_inventory.href='https://www.tesla.com/solarroof'
          
            btn_custom_order.innerHTML='Order Now'
            btn_existing_inventory.innerHTML='Learn More'
          
          }
          if(altura > 2561){
            content[0].style.opacity=0.2
          }
          if(altura > 2577){
            content[0].style.opacity=0.3
          }
          if(altura > 2593){
            content[0].style.opacity=0.4
          }
          if(altura > 2609){
            content[0].style.opacity=0.5
          }
          if(altura > 2625){
            content[0].style.opacity=0.6
          }
          if(altura > 2641){
            content[0].style.opacity=0.7
          }
          if(altura > 2657){
            content[0].style.opacity=0.8
          }
          if(altura > 2673){
            content[0].style.opacity=0.9
          }
          if(altura > 2689){
            content[0].style.opacity=1
          }
          if(altura > 2700){/*O "Solar Roof" começa a se tornar invisível*/
            content[0].style.opacity=0.9
          }
          if(altura > 2712){
            content[0].style.opacity=0.8
          }
          if(altura > 2723){
            content[0].style.opacity=0.7
          }
          if(altura > 2734){
            content[0].style.opacity=0.6
          }
          if(altura > 2745){
            content[0].style.opacity=0.5
          }
          if(altura > 2756){
            content[0].style.opacity=0.4
          }
          if(altura > 2767){
            content[0].style.opacity=0.3
          }
          if(altura > 2778){
            content[0].style.opacity=0.2
          }
          if(altura > 2789){
            content[0].style.opacity=0.1
          }
          if(altura > 2800){
            content[0].style.opacity=0
            
            link_btn_existing_inventory.style.display='none'
          }
          if(altura < 2800){
            link_btn_existing_inventory.style.display=''
          }
          if(altura > 3115){
            text_h1.innerHTML="Accessories"
            text_a.innerHTML=""
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'
          
            btn_custom_order.innerHTML='Shop Now'
            
          }
          if(altura > 3126){
            content[0].style.opacity=0.2
          
          }
          if(altura > 3137){
            content[0].style.opacity=0.3
          
          }
          if(altura > 3148){
            content[0].style.opacity=0.4
          
          }
          if(altura > 3159){
            content[0].style.opacity=0.5
          
          }
          if(altura > 3170){
            content[0].style.opacity=0.6
          
          }
          if(altura > 3181){
            content[0].style.opacity=0.7
          
          }
          if(altura > 3192){
            content[0].style.opacity=0.8
          
          }
          if(altura > 3203){
            content[0].style.opacity=0.9
          
          }
          if(altura > 3224){
            content[0].style.opacity=1
            btn_custom_order.style.backgroundColor='#171A20'
          
          }

  }
  setInterval(rolar, 1000)


  /*
   if(largura_janela>=2560 && altura_janela>=1345 ){
        if(altura >= 0){
        content[0].style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        
        }
        if(altura > 34){
        down_arrow[0].style.opacity=0.9
        content[0].style.opacity=0.9
        }
        if(altura > 68){
        down_arrow[0].style.opacity=0.8
        content[0].style.opacity=0.8
        }
        if(altura > 102){
        down_arrow[0].style.opacity=0.7
        content[0].style.opacity=0.7
        }
        if(altura > 136){
        down_arrow[0].style.opacity=0.6
        content[0].style.opacity=0.6
        }
        if(altura > 170){
        down_arrow[0].style.opacity=0.5
        content[0].style.opacity=0.5
        }
        if(altura > 204){
        down_arrow[0].style.opacity=0.4
        content[0].style.opacity=0.4
        }
        if(altura > 238){
        down_arrow[0].style.opacity=0.3
        content[0].style.opacity=0.3
        }
        if(altura > 272){
        down_arrow[0].style.opacity=0.2
        content[0].style.opacity=0.2
        }
        if(altura > 306){
        down_arrow[0].style.opacity=0.1
        content[0].style.opacity=0.1
        }
        if(altura > 340){
        down_arrow[0].style.opacity=0
        content[0].style.opacity=0
        }

        if(altura > 994){/*"Model Y" começa a se tornar visível

            content[0].style.opacity=0.1

            text_h1.innerHTML="Model Y"
            text_a.innerHTML="Schedule a Test Drive"
            text_a.href='https://www.tesla.com/drive'

            link_btn_custom_order.href='https://www.tesla.com/inventory/new/my?arrangeby=relevance&zip=95113&range=200'
            link_btn_existing_inventory.href='https://www.tesla.com/modely/design#overview'

            btn_custom_order.innerHTML='Buy Now'
            btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 1033){
            content[0].style.opacity=0.2

        }
        if(altura > 1072){
            content[0].style.opacity=0.3

        }
        if(altura > 1111){
            content[0].style.opacity=0.4

        }
        if(altura > 1150){
            content[0].style.opacity=0.5

        }
        if(altura > 1189){
            content[0].style.opacity=0.6

        }
        if(altura > 1228){
            content[0].style.opacity=0.7

        }
        if(altura > 1267){
            content[0].style.opacity=0.8

        }
        if(altura > 1306){
            content[0].style.opacity=0.9

        }
        if(altura > 1344){
            content[0].style.opacity=1

        }
        if(altura > 1377){/*Model Y começa a se tornar invisível
            content[0].style.opacity=0.9

        }
        if(altura > 1411){
            content[0].style.opacity=0.8
        }
        if(altura > 1445){
            content[0].style.opacity=0.7
        }
        if(altura > 1479){

            content[0].style.opacity=0.6
        }
        if(altura > 1513){

            content[0].style.opacity=0.5
        }
        if(altura > 1547){
            content[0].style.opacity=0.4
        }
        if(altura > 1581){
            content[0].style.opacity=0.3
        }
        if(altura > 1615){
            content[0].style.opacity=0.2
        }
        if(altura > 1649){
            content[0].style.opacity=0.1
        }
        if(altura > 1685){
            content[0].style.opacity=0 
        }

        if(altura > 2339){/*Model S começa a se tornar visível

            content[0].style.opacity=0.1

            text_h1.innerHTML="Model S"
            text_a.innerHTML="Schedule a Test Drive"
            text_a.href='https://www.tesla.com/drive'

            link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
            link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

            btn_custom_order.innerHTML='Buy Now'
            btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 2380){
            content[0].style.opacity=0.2 
        }
        if(altura > 2419){
            content[0].style.opacity=0.3 
        }
        if(altura > 2458){
            content[0].style.opacity=0.4 
        }
        if(altura > 2497){
            content[0].style.opacity=0.5 
        }
        if(altura > 2536){
            content[0].style.opacity=0.6 
        }
        if(altura > 2575){
            content[0].style.opacity=0.7 
        }
        if(altura > 2614){
            content[0].style.opacity=0.8 
        }
        if(altura > 2653){
            content[0].style.opacity=0.9
        }
        if(altura > 2689){
            content[0].style.opacity=1
        }
        if(altura > 2726){/*"Model S" começa a se tornar invisível
            content[0].style.opacity=0.9 
        }
        if(altura > 2760){
            content[0].style.opacity=0.8
        }
        if(altura > 2794){
            content[0].style.opacity=0.7
        }
        if(altura > 2828){
            content[0].style.opacity=0.6 
        }
        if(altura > 2862){
            content[0].style.opacity=0.5 
        }
        if(altura > 2896){
            content[0].style.opacity=0.4 
        }
        if(altura > 2930){
            content[0].style.opacity=0.3 
        }
        if(altura > 2964){
            content[0].style.opacity=0.2 
        }
        if(altura > 2998){
            content[0].style.opacity=0.1 
        }
        if(altura > 3030){
            content[0].style.opacity=0 
        }

        if(altura > 3684){/*O "Model X" começa a se tornar visível

            content[0].style.opacity=0.1 

            text_h1.innerHTML="Model X"
            text_a.innerHTML="Schedule a Test Drive"

            link_btn_custom_order.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'
            link_btn_existing_inventory.href='https://www.tesla.com/modelx/design#overview'

            btn_custom_order.innerHTML='Buy Now'
            btn_existing_inventory.innerHTML='Custom Order'

        }
        if(altura > 3727){
            content[0].style.opacity=0.2 
        }
        if(altura > 3766){
            content[0].style.opacity=0.3 
        }
        if(altura > 3805){
            content[0].style.opacity=0.4 
        }
        if(altura > 3844){
            content[0].style.opacity=0.5 
        }
        if(altura > 3883){
            content[0].style.opacity=0.6 
        }
        if(altura > 3922){
            content[0].style.opacity=0.7 
        }
        if(altura > 3961){
            content[0].style.opacity=0.8 
        }
        if(altura > 4000){
            content[0].style.opacity=0.9 
        }
        if(altura > 4034){
            content[0].style.opacity=1 
        }
        if(altura > 4073){/*O "Model X" começa a se tornar invisível
            content[0].style.opacity=0.9  
        }
        if(altura > 4107){
            content[0].style.opacity=0.8  
        }
        if(altura > 4141){
            content[0].style.opacity=0.7  
        }
        if(altura > 4175){
            content[0].style.opacity=0.6  
        }
        if(altura > 4209){
            content[0].style.opacity=0.5  
        }
        if(altura > 4243){
            content[0].style.opacity=0.4  
        }
        if(altura > 4277){
            content[0].style.opacity=0.3  
        }
        if(altura > 4311){
            content[0].style.opacity=0.2  
        }
        if(altura > 4345){
            content[0].style.opacity=0.1  
        }
        if(altura > 4375){
            content[0].style.opacity=0  
        }

        if(altura > 5029){/*O "Solar Panels" começa a se tornar visível
        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML="Lowest Cost Solar Panels in America"

        content[0].style.opacity=0.1 

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'

        }
        if(altura > 5050){
            content[0].style.opacity=0.2  
        }
        if(altura > 5068){
            content[0].style.opacity=0.3  
        }
        if(altura > 5146){
            content[0].style.opacity=0.4  
        }
        if(altura > 5185){
            content[0].style.opacity=0.5  
        }
        if(altura > 5224){
            content[0].style.opacity=0.6  
        }
        if(altura > 5263){
            content[0].style.opacity=0.7  
        }
        if(altura > 5302){
            content[0].style.opacity=0.8  
        }
        if(altura > 5341){
            content[0].style.opacity=0.9  
        }
        if(altura > 5379){
            content[0].style.opacity=1  
        }
        if(altura > 5414){
            content[0].style.opacity=0.9  
        }
        if(altura > 5448){
            content[0].style.opacity=0.8
        }
        if(altura > 5482){
            content[0].style.opacity=0.7  
        }
        if(altura > 5516){
            content[0].style.opacity=0.6  
        }
        if(altura > 5550){
            content[0].style.opacity=0.5  
        }
        if(altura > 5584){
            content[0].style.opacity=0.4
        }
        if(altura > 5618){
            content[0].style.opacity=0.3 
        }
        if(altura > 5652){
            content[0].style.opacity=0.2
        }
        if(altura > 5686){
            content[0].style.opacity=0.1
        }
        if(altura > 5720){
            content[0].style.opacity=0 
        }
        
        if(altura > 6374){/*O "Solar Roof" começa a se tornar visível
    
            text_h1.innerHTML="Solar Roofs"
            text_a.innerHTML="Produce Clean Energy From Your Roof"
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://www.tesla.com/energy/design'
            link_btn_existing_inventory.href='https://www.tesla.com/solarroof'
          
            btn_custom_order.innerHTML='Order Now'
            btn_existing_inventory.innerHTML='Learn More'
          
          }
          if(altura > 6410){
            content[0].style.opacity=0.2
          }
          if(altura > 6449){
            content[0].style.opacity=0.3
          }
          if(altura > 6488){
            content[0].style.opacity=0.4
          }
          if(altura > 6527){
            content[0].style.opacity=0.5
          }
          if(altura > 6566){
            content[0].style.opacity=0.6
          }
          if(altura > 6605){
            content[0].style.opacity=0.7
          }
          if(altura > 6644){
            content[0].style.opacity=0.8
          }
          if(altura > 6683){
            content[0].style.opacity=0.9
          }
          if(altura > 6724){
            content[0].style.opacity=1
          }
          if(altura > 6657){/*O "Solar Roof" começa a se tornar invisível
            content[0].style.opacity=0.9
          }
          if(altura > 6691){
            content[0].style.opacity=0.8
          }
          if(altura > 6725){
            content[0].style.opacity=0.7
          }
          if(altura > 6759){
            content[0].style.opacity=0.6
          }
          if(altura > 6893){
            content[0].style.opacity=0.5
          }
          if(altura > 6927){
            content[0].style.opacity=0.4
          }
          if(altura > 6961){
            content[0].style.opacity=0.3
          }
          if(altura > 6995){
            content[0].style.opacity=0.2
          }
          if(altura > 7029){
            content[0].style.opacity=0.1
          }
          if(altura > 7065){
            content[0].style.opacity=0
            btn_existing_inventory.style.display='none'
          }
          if(altura < 7063){
            btn_existing_inventory.style.display=''
          }
          
          if(altura > 7737){/*O "Accessories" começa a se tornar visível
            text_h1.innerHTML="Accessories"
            text_a.innerHTML=""
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'
          
            btn_custom_order.innerHTML='Shop Now'
            
          }
          if(altura > 7769){
            content[0].style.opacity=0.2
          
          }
          if(altura > 7808){
            content[0].style.opacity=0.3
          
          }
          if(altura > 7847){
            content[0].style.opacity=0.4
          
          }
          if(altura > 7886){
            content[0].style.opacity=0.5
          
          }
          if(altura > 7925){
            content[0].style.opacity=0.6
          
          }
          if(altura > 7964){
            content[0].style.opacity=0.7
          
          }
          if(altura > 8003){
            content[0].style.opacity=0.8
          
          }
          if(altura > 8042){
            content[0].style.opacity=0.9
          
          }
          if(altura > 8069){
            content[0].style.opacity=1
            btn_custom_order.style.backgroundColor='#171A20'
          
          }
    }

    if(altura_janela>=768 && largura_janela>=1440){
        if(altura >= 0){/*"Model 3" começa a se tornar invisível
        content[0].style.opacity=1/*O "Model 3" se torna invisível
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML=`Altura da janela: ${altura_janela}`
        btn_existing_inventory.innerHTML=`Largura da janela: ${largura_janela}`
        
        }
        if(altura > 50){
        down_arrow[0].style.opacity=0.9
        content[0].style.opacity=0.9
        }
        if(altura > 65){
        down_arrow[0].style.opacity=0.8
        content[0].style.opacity=0.8
        }
        if(altura > 80){
        down_arrow[0].style.opacity=0.7
        content[0].style.opacity=0.7
        }
        if(altura > 95){
        down_arrow[0].style.opacity=0.6
        content[0].style.opacity=0.6
        }
        if(altura > 110){
        down_arrow[0].style.opacity=0.5
        content[0].style.opacity=0.5
        }
        if(altura > 125){
        down_arrow[0].style.opacity=0.4
        content[0].style.opacity=0.4
        }
        if(altura > 140){
        down_arrow[0].style.opacity=0.3
        content[0].style.opacity=0.3
        }
        if(altura > 155){
        down_arrow[0].style.opacity=0.2
        content[0].style.opacity=0.2
        }
        if(altura > 170){
        down_arrow[0].style.opacity=0.1
        content[0].style.opacity=0.1
        }
        if(altura > 187){
        down_arrow[0].style.opacity=0
        content[0].style.opacity=0
        }

        if(altura > 562){/*"Model Y" começa a se tornar visível

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model Y"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/my?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modely/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 582){
            content[0].style.opacity=0.2

        }
        if(altura > 603){
            content[0].style.opacity=0.3

        }
        if(altura > 624){
            content[0].style.opacity=0.4

        }
        if(altura > 645){
            content[0].style.opacity=0.5

        }
        if(altura > 666){
            content[0].style.opacity=0.6

        }
        if(altura > 687){
            content[0].style.opacity=0.7

        }
        if(altura > 708){
            content[0].style.opacity=0.8

        }
        if(altura > 729){
            content[0].style.opacity=0.9

        }
        if(altura > 767){
            content[0].style.opacity=1

        }
        if(altura > 785){/*Model Y começa a se tornar invisível
            content[0].style.opacity=0.9

        }
        if(altura > 804){
            content[0].style.opacity=0.8
        }
        if(altura > 823){
            content[0].style.opacity=0.7
        }
        if(altura > 842){

            content[0].style.opacity=0.6
        }
        if(altura > 861){

            content[0].style.opacity=0.5
        }
        if(altura > 880){
            content[0].style.opacity=0.4
        }
        if(altura > 899){
            content[0].style.opacity=0.3
        }
        if(altura > 918){
            content[0].style.opacity=0.2
        }
        if(altura > 937){
            content[0].style.opacity=0.1
        }
        if(altura > 955){
            content[0].style.opacity=0 
        }

        if(altura > 1330){/*Model S começa a se tornar visível

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model S"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 1415){
            content[0].style.opacity=0.2 
        }
        if(altura > 1430){
            content[0].style.opacity=0.3 
        }
        if(altura > 1445){
            content[0].style.opacity=0.4 
        }
        if(altura > 1460){
            content[0].style.opacity=0.5 
        }
        if(altura > 1475){
            content[0].style.opacity=0.6 
        }
        if(altura > 1490){
            content[0].style.opacity=0.7 
        }
        if(altura > 1505){
            content[0].style.opacity=0.8 
        }
        if(altura > 1520){
            content[0].style.opacity=0.9
        }
        if(altura > 1535){
            content[0].style.opacity=1
        }
        if(altura > 1552){/*"Model S" começa a se tornar invisível
            content[0].style.opacity=0.9 
        }
        if(altura > 1571){
            content[0].style.opacity=0.8
        }
        if(altura > 1590){
            content[0].style.opacity=0.7
        }
        if(altura > 1609){
            content[0].style.opacity=0.6 
        }
        if(altura > 1628){
            content[0].style.opacity=0.5 
        }
        if(altura > 1647){
            content[0].style.opacity=0.4 
        }
        if(altura > 1666){
            content[0].style.opacity=0.3 
        }
        if(altura > 1685){
            content[0].style.opacity=0.2 
        }
        if(altura > 1704){
            content[0].style.opacity=0.1 
        }
        if(altura > 1723){
            content[0].style.opacity=0 
        }

        if(altura > 2098){/*O "Model X" começa a se tornar visível

        content[0].style.opacity=0.1 

        text_h1.innerHTML="Model X"
        text_a.innerHTML="Schedule a Test Drive"

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modelx/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'

    }
        if(altura > 2117){
            content[0].style.opacity=0.2 
        }
        if(altura > 2138){
            content[0].style.opacity=0.3 
        }
        if(altura > 2159){
            content[0].style.opacity=0.4 
        }
        if(altura > 2180){
            content[0].style.opacity=0.5 
        }
        if(altura > 2201){
            content[0].style.opacity=0.6 
        }
        if(altura > 2222){
            content[0].style.opacity=0.7 
        }
        if(altura > 2243){
            content[0].style.opacity=0.8 
        }
        if(altura > 2264){
            content[0].style.opacity=0.9 
        }
        if(altura > 2303){
            content[0].style.opacity=1 
        }
        if(altura > 2305){/*O "Model X" começa a se tornar invisível
            content[0].style.opacity=0.9  
        }
        if(altura > 2325){
            content[0].style.opacity=0.8  
        }
        if(altura > 2345){
            content[0].style.opacity=0.7  
        }
        if(altura > 2365){
            content[0].style.opacity=0.6  
        }
        if(altura > 2385){
            content[0].style.opacity=0.5  
        }
        if(altura > 2405){
            content[0].style.opacity=0.4  
        }
        if(altura > 2425){
            content[0].style.opacity=0.3  
        }
        if(altura > 2465){
            content[0].style.opacity=0.2  
        }
        if(altura > 2485){
            content[0].style.opacity=0.1  
        }
        if(altura > 2491){
            content[0].style.opacity=0  
        }

        if(altura > 2866){/*O "Solar Panels" começa a se tornar visível
        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML="Lowest Cost Solar Panels in America"

        content[0].style.opacity=0.1 

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'

    }
        if(altura > 2886){
            content[0].style.opacity=0.2  
        }
        if(altura > 2907){
            content[0].style.opacity=0.3  
        }
        if(altura > 2928){
            content[0].style.opacity=0.4  
        }
        if(altura > 2949){
            content[0].style.opacity=0.5  
        }
        if(altura > 2970){
            content[0].style.opacity=0.6  
        }
        if(altura > 2991){
            content[0].style.opacity=0.7  
        }
        if(altura > 3012){
            content[0].style.opacity=0.8  
        }
        if(altura > 3033){
            content[0].style.opacity=0.9  
        }
        if(altura > 3071){
            content[0].style.opacity=1  
        }
        if(altura > 3090){
            content[0].style.opacity=0.9  
        }
        if(altura > 3109){
            content[0].style.opacity=0.8
        }
        if(altura > 3128){
            content[0].style.opacity=0.7  
        }
        if(altura > 3147){
            content[0].style.opacity=0.6  
        }
        if(altura > 3166){
            content[0].style.opacity=0.5  
        }
        if(altura > 3185){
            content[0].style.opacity=0.4
        }
        if(altura > 3204){
            content[0].style.opacity=0.3 
        }
        if(altura > 3223){
            content[0].style.opacity=0.2
        }
        if(altura > 3242){
            content[0].style.opacity=0.1
        }
        if(altura > 3259){
            content[0].style.opacity=0 
        }
        
        if(altura > 3634){/*O "Solar Roof" começa a se tornar visível
    
            text_h1.innerHTML="Solar Roofs"
            text_a.innerHTML="Produce Clean Energy From Your Roof"
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://www.tesla.com/energy/design'
            link_btn_existing_inventory.href='https://www.tesla.com/solarroof'
          
            btn_custom_order.innerHTML='Order Now'
            btn_existing_inventory.innerHTML='Learn More'
          
          }
          if(altura > 3655){
            content[0].style.opacity=0.2
          }
          if(altura > 3675){
            content[0].style.opacity=0.3
          }
          if(altura > 3695){
            content[0].style.opacity=0.4
          }
          if(altura > 3715){
            content[0].style.opacity=0.5
          }
          if(altura > 3735){
            content[0].style.opacity=0.6
          }
          if(altura > 3755){
            content[0].style.opacity=0.7
          }
          if(altura > 3775){
            content[0].style.opacity=0.8
          }
          if(altura > 3795){
            content[0].style.opacity=0.9
          }
          if(altura > 3839){
            content[0].style.opacity=1
          }
          if(altura > 3856){
            content[0].style.opacity=0.9
          }
          if(altura > 3875){
            content[0].style.opacity=0.8
          }
          if(altura > 3894){
            content[0].style.opacity=0.7
          }
          if(altura > 3913){
            content[0].style.opacity=0.6
          }
          if(altura > 3932){
            content[0].style.opacity=0.5
          }
          if(altura > 3951){
            content[0].style.opacity=0.4
          }
          if(altura > 3970){
            content[0].style.opacity=0.3
          }
          if(altura > 3989){
            content[0].style.opacity=0.2
          }
          if(altura > 4008){
            content[0].style.opacity=0.1
          }
          if(altura > 4027){
            content[0].style.opacity=0
            btn_existing_inventory.style.display='none'
          }
          if(altura < 4027){
            btn_existing_inventory.style.display=''
          }
          
          if(altura > 4420){
            text_h1.innerHTML="Accessories"
            text_a.innerHTML=""
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'
          
            btn_custom_order.innerHTML='Shop Now'
            
          }
          if(altura > 4455){
            content[0].style.opacity=0.2
          
          }
          if(altura > 4474){
            content[0].style.opacity=0.3
          
          }
          if(altura > 4493){
            content[0].style.opacity=0.4
          
          }
          if(altura > 4512){
            content[0].style.opacity=0.5
          
          }
          if(altura > 4531){
            content[0].style.opacity=0.6
          
          }
          if(altura > 4550){
            content[0].style.opacity=0.7
          
          }
          if(altura > 4569){
            content[0].style.opacity=0.8
          
          }
          if(altura > 4588){
            content[0].style.opacity=0.9
          
          }
          if(altura > 4607){
            content[0].style.opacity=1
            btn_custom_order.style.backgroundColor='#171A20'
          
          }
    }

    if(altura_janela>=538 && largura_janela>=1024){

        if(altura >= 0){/*"Model 3" começa a se tornar invisível
        content[0].style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        
        }
        if(altura > 07){
        down_arrow[0].style.opacity=0.8
        content[0].style.opacity=0.8
        }
        if(altura > 22){
        down_arrow[0].style.opacity=0.7
        content[0].style.opacity=0.7
        }
        if(altura > 37){
        down_arrow[0].style.opacity=0.6
        content[0].style.opacity=0.6
        }
        if(altura > 52){
        down_arrow[0].style.opacity=0.5
        content[0].style.opacity=0.5
        }
        if(altura > 67){
        down_arrow[0].style.opacity=0.4
        content[0].style.opacity=0.4
        }
        if(altura > 82){
        down_arrow[0].style.opacity=0.3
        content[0].style.opacity=0.3
        }
        if(altura > 97){
        down_arrow[0].style.opacity=0.2
        content[0].style.opacity=0.2
        }
        if(altura > 112){
        down_arrow[0].style.opacity=0.1
        content[0].style.opacity=0.1
        }
        if(altura > 128){
        down_arrow[0].style.opacity=0
        content[0].style.opacity=0
        }
        if(altura > 395){/*"Model Y" começa a se tornar visível

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model Y"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/my?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modely/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 411){
            content[0].style.opacity=0.2

        }
        if(altura > 427){
            content[0].style.opacity=0.3

        }
        if(altura > 443){
            content[0].style.opacity=0.4

        }
        if(altura > 459){
            content[0].style.opacity=0.5

        }
        if(altura > 475){
            content[0].style.opacity=0.6

        }
        if(altura > 491){
            content[0].style.opacity=0.7

        }
        if(altura > 507){
            content[0].style.opacity=0.8

        }
        if(altura > 523){
            content[0].style.opacity=0.9

        }
        if(altura > 537){
            content[0].style.opacity=1

        }
        if(altura > 550){/*Model Y começa a se tornar invisível
            content[0].style.opacity=0.9

        }
        if(altura > 563){
            content[0].style.opacity=0.8
        }
        if(altura > 576){
            content[0].style.opacity=0.7
        }
        if(altura > 589){

            content[0].style.opacity=0.6
        }
        if(altura > 602){

            content[0].style.opacity=0.5
        }
        if(altura > 615){
            content[0].style.opacity=0.4
        }
        if(altura > 628){
            content[0].style.opacity=0.3
        }
        if(altura > 641){
            content[0].style.opacity=0.2
        }
        if(altura > 654){
            content[0].style.opacity=0.1
        }
        if(altura > 666){
            content[0].style.opacity=0 
        }
        if(altura > 933){/*Model S começa a se tornar visível

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model S"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 950){
            content[0].style.opacity=0.2 
        }
        if(altura > 966){
            content[0].style.opacity=0.3 
        }
        if(altura > 982){
            content[0].style.opacity=0.4 
        }
        if(altura > 998){
            content[0].style.opacity=0.5 
        }
        if(altura > 1014){
            content[0].style.opacity=0.6 
        }
        if(altura > 1030){
            content[0].style.opacity=0.7 
        }
        if(altura > 1046){
            content[0].style.opacity=0.8 
        }
        if(altura > 1062){
            content[0].style.opacity=0.9
        }
        if(altura > 1075){
            content[0].style.opacity=1
        }
        if(altura > 1088){/*"Model S" começa a se tornar invisível
            content[0].style.opacity=0.9 
        }
        if(altura > 1101){
            content[0].style.opacity=0.8
        }
        if(altura > 1114){
            content[0].style.opacity=0.7
        }
        if(altura > 1127){
            content[0].style.opacity=0.6 
        }
        if(altura > 1140){
            content[0].style.opacity=0.5 
        }
        if(altura > 1153){
            content[0].style.opacity=0.4 
        }
        if(altura > 1166){
            content[0].style.opacity=0.3 
        }
        if(altura > 1179){
            content[0].style.opacity=0.2 
        }
        if(altura > 1192){
            content[0].style.opacity=0.1 
        }
        if(altura > 1204){
            content[0].style.opacity=0 
        }
        if(altura > 1471){/*O "Model X" começa a se tornar visível

        content[0].style.opacity=0.1 

        text_h1.innerHTML="Model X"
        text_a.innerHTML="Schedule a Test Drive"

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modelx/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'

        }
        if(altura > 1485){
            content[0].style.opacity=0.2 
        }
        if(altura > 1499){
            content[0].style.opacity=0.3 
        }
        if(altura > 1513){
            content[0].style.opacity=0.4 
        }
        if(altura > 1527){
            content[0].style.opacity=0.5 
        }
        if(altura > 1541){
            content[0].style.opacity=0.6 
        }
        if(altura > 1555){
            content[0].style.opacity=0.7 
        }
        if(altura > 1569){
            content[0].style.opacity=0.8 
        }
        if(altura > 1583){
            content[0].style.opacity=0.9 
        }
        if(altura > 1613){
            content[0].style.opacity=1 
        }
        if(altura > 1626){/*O "Model X" começa a se tornar invisível
            content[0].style.opacity=0.9  
        }
        if(altura > 1639){
            content[0].style.opacity=0.8  
        }
        if(altura > 1652){
            content[0].style.opacity=0.7  
        }
        if(altura > 1665){
            content[0].style.opacity=0.6  
        }
        if(altura > 1678){
            content[0].style.opacity=0.5  
        }
        if(altura > 1691){
            content[0].style.opacity=0.4  
        }
        if(altura > 1704){
            content[0].style.opacity=0.3  
        }
        if(altura > 1717){
            content[0].style.opacity=0.2  
        }
        if(altura > 1730){
            content[0].style.opacity=0.1  
        }
        if(altura > 1742){
            content[0].style.opacity=0  
        }
        if(altura > 2009){/*O "Solar Panels" começa a se tornar visível
        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML="Lowest Cost Solar Panels in America"

        content[0].style.opacity=0.1 

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'

        }
        if(altura > 2023){
            content[0].style.opacity=0.2  
        }
        if(altura > 2039){
            content[0].style.opacity=0.3  
        }
        if(altura > 2055){
            content[0].style.opacity=0.4  
        }
        if(altura > 2071){
            content[0].style.opacity=0.5  
        }
        if(altura > 2087){
            content[0].style.opacity=0.6  
        }
        if(altura > 2103){
            content[0].style.opacity=0.7  
        }
        if(altura > 2119){
            content[0].style.opacity=0.8  
        }
        if(altura > 2135){
            content[0].style.opacity=0.9  
        }
        if(altura > 2151){
            content[0].style.opacity=1  
        }
        if(altura > 2163){/*O "Solar Panels" começa a se tornar invisível
            content[0].style.opacity=0.9  
        }
        if(altura > 2176){
            content[0].style.opacity=0.8
        }
        if(altura > 2189){
            content[0].style.opacity=0.7  
        }
        if(altura > 2202){
            content[0].style.opacity=0.6  
        }
        if(altura > 2215){
            content[0].style.opacity=0.5  
        }
        if(altura > 2228){
            content[0].style.opacity=0.4
        }
        if(altura > 2241){
            content[0].style.opacity=0.3 
        }
        if(altura > 2254){
            content[0].style.opacity=0.2
        }
        if(altura > 2267){
            content[0].style.opacity=0.1
        }
        if(altura > 2280){
            content[0].style.opacity=0 
        }

        if(altura > 2547){/*O "Solar Roof" começa a se tornar visível
    
            text_h1.innerHTML="Solar Roofs"
            text_a.innerHTML="Produce Clean Energy From Your Roof"
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://www.tesla.com/energy/design'
            link_btn_existing_inventory.href='https://www.tesla.com/solarroof'
          
            btn_custom_order.innerHTML='Order Now'
            btn_existing_inventory.innerHTML='Learn More'
          
          }
          if(altura > 2561){
            content[0].style.opacity=0.2
          }
          if(altura > 2577){
            content[0].style.opacity=0.3
          }
          if(altura > 2593){
            content[0].style.opacity=0.4
          }
          if(altura > 2609){
            content[0].style.opacity=0.5
          }
          if(altura > 2625){
            content[0].style.opacity=0.6
          }
          if(altura > 2641){
            content[0].style.opacity=0.7
          }
          if(altura > 2657){
            content[0].style.opacity=0.8
          }
          if(altura > 2673){
            content[0].style.opacity=0.9
          }
          if(altura > 2689){
            content[0].style.opacity=1
          }
          if(altura > 2700){/*O "Solar Roof" começa a se tornar invisível
            content[0].style.opacity=0.9
          }
          if(altura > 2713){
            content[0].style.opacity=0.8
          }
          if(altura > 2726){
            content[0].style.opacity=0.7
          }
          if(altura > 2739){
            content[0].style.opacity=0.6
          }
          if(altura > 2752){
            content[0].style.opacity=0.5
          }
          if(altura > 2765){
            content[0].style.opacity=0.4
          }
          if(altura > 2778){
            content[0].style.opacity=0.3
          }
          if(altura > 2791){
            content[0].style.opacity=0.2
          }
          if(altura > 2804){
            content[0].style.opacity=0.1
          }
          if(altura > 2818){
            content[0].style.opacity=0
            btn_existing_inventory.style.display='none'
          }
          if(altura < 2817){
            btn_existing_inventory.style.display=''
          }

          if(altura > 3105){
            text_h1.innerHTML="Accessories"
            text_a.innerHTML=""
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'
          
            btn_custom_order.innerHTML='Shop Now'
            
          }
          if(altura > 3115){
            content[0].style.opacity=0.2
          
          }
          if(altura > 3129){
            content[0].style.opacity=0.3
          
          }
          if(altura > 3143){
            content[0].style.opacity=0.4
          
          }
          if(altura > 3157){
            content[0].style.opacity=0.5
          
          }
          if(altura > 3171){
            content[0].style.opacity=0.6
          
          }
          if(altura > 3185){
            content[0].style.opacity=0.7
          
          }
          if(altura > 3199){
            content[0].style.opacity=0.8
          
          }
          if(altura > 3213){
            content[0].style.opacity=0.9
          
          }
          if(altura > 3227){
            content[0].style.opacity=1
            btn_custom_order.style.backgroundColor='#171A20'
          
          }
    }

    if(largura_janela>=768 && altura_janela>=538){
        if(altura >= 0){/*"Model 3" começa a se tornar invisível
        content[0].style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        
        }
        if(altura > 12){
        down_arrow[0].style.opacity=0.8
        content[0].style.opacity=0.8
        }
        if(altura > 23){
        down_arrow[0].style.opacity=0.7
        content[0].style.opacity=0.7
        }
        if(altura > 45){
        down_arrow[0].style.opacity=0.6
        content[0].style.opacity=0.6
        }
        if(altura > 56){
        down_arrow[0].style.opacity=0.5
        content[0].style.opacity=0.5
        }
        if(altura > 67){
        down_arrow[0].style.opacity=0.4
        content[0].style.opacity=0.4
        }
        if(altura > 78){
        down_arrow[0].style.opacity=0.3
        content[0].style.opacity=0.3
        }
        if(altura > 89){
        down_arrow[0].style.opacity=0.2
        content[0].style.opacity=0.2
        }
        if(altura > 110){
        down_arrow[0].style.opacity=0.1
        content[0].style.opacity=0.1
        }
        if(altura > 111){
        down_arrow[0].style.opacity=0
        content[0].style.opacity=0
        }

        if(altura > 406){/*"Model Y" começa a se tornar visível

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model Y"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/my?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modely/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 411){
            content[0].style.opacity=0.2

        }
        if(altura > 427){
            content[0].style.opacity=0.3

        }
        if(altura > 443){
            content[0].style.opacity=0.4

        }
        if(altura > 459){
            content[0].style.opacity=0.5

        }
        if(altura > 475){
            content[0].style.opacity=0.6

        }
        if(altura > 491){
            content[0].style.opacity=0.7

        }
        if(altura > 507){
            content[0].style.opacity=0.8

        }
        if(altura > 523){
            content[0].style.opacity=0.9

        }
        if(altura > 537){
            content[0].style.opacity=1

        }
        if(altura > 550){/*Model Y começa a se tornar invisível
            content[0].style.opacity=0.9

        }
        if(altura > 563){
            content[0].style.opacity=0.8
        }
        if(altura > 576){
            content[0].style.opacity=0.7
        }
        if(altura > 589){

            content[0].style.opacity=0.6
        }
        if(altura > 602){

            content[0].style.opacity=0.5
        }
        if(altura > 615){
            content[0].style.opacity=0.4
        }
        if(altura > 628){
            content[0].style.opacity=0.3
        }
        if(altura > 641){
            content[0].style.opacity=0.2
        }
        if(altura > 654){
            content[0].style.opacity=0.1
        }
        if(altura > 648){
            content[0].style.opacity=0 
        }

        if(altura > 944){/*Model S começa a se tornar visível

        content[0].style.opacity=0.1

        text_h1.innerHTML="Model S"
        text_a.innerHTML="Schedule a Test Drive"
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        }
        if(altura > 950){
            content[0].style.opacity=0.2 
        }
        if(altura > 966){
            content[0].style.opacity=0.3 
        }
        if(altura > 982){
            content[0].style.opacity=0.4 
        }
        if(altura > 998){
            content[0].style.opacity=0.5 
        }
        if(altura > 1014){
            content[0].style.opacity=0.6 
        }
        if(altura > 1030){
            content[0].style.opacity=0.7 
        }
        if(altura > 1046){
            content[0].style.opacity=0.8 
        }
        if(altura > 1062){
            content[0].style.opacity=0.9
        }
        if(altura > 1075){
            content[0].style.opacity=1
        }
        if(altura > 1087){/*"Model S" começa a se tornar invisível
            content[0].style.opacity=0.9 
        }
        if(altura > 1098){
            content[0].style.opacity=0.8
        }
        if(altura > 1109){
            content[0].style.opacity=0.7
        }
        if(altura > 1120){
            content[0].style.opacity=0.6 
        }
        if(altura > 1131){
            content[0].style.opacity=0.5 
        }
        if(altura > 1142){
            content[0].style.opacity=0.4 
        }
        if(altura > 1153){
            content[0].style.opacity=0.3 
        }
        if(altura > 1164){
            content[0].style.opacity=0.2 
        }
        if(altura > 1175){
            content[0].style.opacity=0.1 
        }
        if(altura > 1186){
            content[0].style.opacity=0 
        }

        if(altura > 1482){/*O "Model X" começa a se tornar visível

        content[0].style.opacity=0.1 

        text_h1.innerHTML="Model X"
        text_a.innerHTML="Schedule a Test Drive"

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/modelx/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'

    }
        if(altura > 1485){
            content[0].style.opacity=0.2 
        }
        if(altura > 1499){
            content[0].style.opacity=0.3 
        }
        if(altura > 1513){
            content[0].style.opacity=0.4 
        }
        if(altura > 1527){
            content[0].style.opacity=0.5 
        }
        if(altura > 1541){
            content[0].style.opacity=0.6 
        }
        if(altura > 1555){
            content[0].style.opacity=0.7 
        }
        if(altura > 1569){
            content[0].style.opacity=0.8 
        }
        if(altura > 1583){
            content[0].style.opacity=0.9 
        }
        if(altura > 1613){
            content[0].style.opacity=1 
        }
        if(altura > 1623){/*O "Model X" começa a se tornar invisível
            content[0].style.opacity=0.9  
        }
        if(altura > 1634){
            content[0].style.opacity=0.8  
        }
        if(altura > 1645){
            content[0].style.opacity=0.7  
        }
        if(altura > 1656){
            content[0].style.opacity=0.6  
        }
        if(altura > 1668){
            content[0].style.opacity=0.5  
        }
        if(altura > 1679){
            content[0].style.opacity=0.4  
        }
        if(altura > 1690){
            content[0].style.opacity=0.3  
        }
        if(altura > 1701){
            content[0].style.opacity=0.2  
        }
        if(altura > 1712){
            content[0].style.opacity=0.1  
        }
        if(altura > 1724){
            content[0].style.opacity=0  
        }

        if(altura > 2020){/*O "Solar Panels" começa a se tornar visível
        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML="Lowest Cost Solar Panels in America"

        content[0].style.opacity=0.1 

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'

    }
        if(altura > 2023){
            content[0].style.opacity=0.2  
        }
        if(altura > 2039){
            content[0].style.opacity=0.3  
        }
        if(altura > 2055){
            content[0].style.opacity=0.4  
        }
        if(altura > 2071){
            content[0].style.opacity=0.5  
        }
        if(altura > 2087){
            content[0].style.opacity=0.6  
        }
        if(altura > 2103){
            content[0].style.opacity=0.7  
        }
        if(altura > 2119){
            content[0].style.opacity=0.8  
        }
        if(altura > 2135){
            content[0].style.opacity=0.9  
        }
        if(altura > 2151){
            content[0].style.opacity=1  
        }
        if(altura > 2163){/*O "Solar Panels" começa a se tornar invisível
            content[0].style.opacity=0.9  
        }
        if(altura > 2174){
            content[0].style.opacity=0.8
        }
        if(altura > 2185){
            content[0].style.opacity=0.7  
        }
        if(altura > 2196){
            content[0].style.opacity=0.6  
        }
        if(altura > 2207){
            content[0].style.opacity=0.5  
        }
        if(altura > 2218){
            content[0].style.opacity=0.4
        }
        if(altura > 2229){
            content[0].style.opacity=0.3 
        }
        if(altura > 2240){
            content[0].style.opacity=0.2
        }
        if(altura > 2251){
            content[0].style.opacity=0.1
        }
        if(altura > 2262){
            content[0].style.opacity=0 
        }

        if(altura > 2558){/*O "Solar Roof" começa a se tornar visível
    
            text_h1.innerHTML="Solar Roofs"
            text_a.innerHTML="Produce Clean Energy From Your Roof"
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://www.tesla.com/energy/design'
            link_btn_existing_inventory.href='https://www.tesla.com/solarroof'
          
            btn_custom_order.innerHTML='Order Now'
            btn_existing_inventory.innerHTML='Learn More'
          
          }
          if(altura > 2561){
            content[0].style.opacity=0.2
          }
          if(altura > 2577){
            content[0].style.opacity=0.3
          }
          if(altura > 2593){
            content[0].style.opacity=0.4
          }
          if(altura > 2609){
            content[0].style.opacity=0.5
          }
          if(altura > 2625){
            content[0].style.opacity=0.6
          }
          if(altura > 2641){
            content[0].style.opacity=0.7
          }
          if(altura > 2657){
            content[0].style.opacity=0.8
          }
          if(altura > 2673){
            content[0].style.opacity=0.9
          }
          if(altura > 2689){
            content[0].style.opacity=1
          }
          if(altura > 2700){/*O "Solar Roof" começa a se tornar invisível
            content[0].style.opacity=0.9
          }
          if(altura > 2712){
            content[0].style.opacity=0.8
          }
          if(altura > 2723){
            content[0].style.opacity=0.7
          }
          if(altura > 2734){
            content[0].style.opacity=0.6
          }
          if(altura > 2745){
            content[0].style.opacity=0.5
          }
          if(altura > 2756){
            content[0].style.opacity=0.4
          }
          if(altura > 2767){
            content[0].style.opacity=0.3
          }
          if(altura > 2778){
            content[0].style.opacity=0.2
          }
          if(altura > 2789){
            content[0].style.opacity=0.1
          }
          if(altura > 2800){
            content[0].style.opacity=0
            
            link_btn_existing_inventory.style.display='none'
          }
          if(altura < 2800){
            link_btn_existing_inventory.style.display=''
          }
          if(altura > 3115){
            text_h1.innerHTML="Accessories"
            text_a.innerHTML=""
          
            content[0].style.opacity=0.1
          
            link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'
          
            btn_custom_order.innerHTML='Shop Now'
            
          }
          if(altura > 3126){
            content[0].style.opacity=0.2
          
          }
          if(altura > 3137){
            content[0].style.opacity=0.3
          
          }
          if(altura > 3148){
            content[0].style.opacity=0.4
          
          }
          if(altura > 3159){
            content[0].style.opacity=0.5
          
          }
          if(altura > 3170){
            content[0].style.opacity=0.6
          
          }
          if(altura > 3181){
            content[0].style.opacity=0.7
          
          }
          if(altura > 3192){
            content[0].style.opacity=0.8
          
          }
          if(altura > 3203){
            content[0].style.opacity=0.9
          
          }
          if(altura > 3224){
            content[0].style.opacity=1
            btn_custom_order.style.backgroundColor='#171A20'
          
          }
    }*/

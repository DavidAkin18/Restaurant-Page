
function MenuPage(){
    let content = document.querySelector('#content')

    //main para, img and header

    let pageContent = document.createElement('div')
    pageContent.classList.add('page-content')
    let headText = document.createElement('h2')
    headText.innerText='Menu Available';
    

    let menuUl = document.createElement('ul')
    menuUl.classList.add('option');

    let menu1 = document.createElement('li')
    menu1.innerText= 'Bread Cake';
    let image1 = document.createElement('img');
    image1.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image1.height ='150';
    image1.alt = 'imageBig';
    menu1.appendChild(image1)

    let price1 = document.createElement('p');
    price1.innerText= "$ 2000"
    price1.classList.add('price')
    menu1.appendChild(price1)
    


    let menu2 = document.createElement('li')
    menu2.innerText = "Vanilla Cake"
    let image2 = document.createElement('img');
    image2.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image2.height ='150';
    image2.alt = 'imageBig';
    menu2.appendChild(image2)

    let price2 = document.createElement('p');
    price2.innerText= "$ 200"
    price2.classList.add('price')
    menu2.appendChild(price2)


    let menu3 = document.createElement('li')
    let image3 = document.createElement('img');
    menu3.innerText = "Contract Cake";
    image3.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image3.height ='150';
    image3.alt = 'imageBig';
    menu3.appendChild(image3)

    let price3 = document.createElement('p');
    price3.innerText= "$ 5000"
    price3.classList.add('price')
    menu3.appendChild(price3)

    
    let menu4 = document.createElement('li')
    menu4.innerText= 'Chocolate Cake'
    let image4 = document.createElement('img');
    image4.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image4.height ='150';
    image4.alt = 'imageBig';
    menu4.appendChild(image4)

    let price4 = document.createElement('p');
    price4.innerText= "$ 1000"
    price4.classList.add('price')
    menu4.appendChild(price4)


    let menu5 = document.createElement('li')
    menu5.innerText = "StrawBerry Cake"
    let image5 = document.createElement('img');
    image5.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image5.height ='150';
    image5.alt = 'imageBig';
    menu5.appendChild(image5)

    let price5 = document.createElement('p');
    price5.innerText= "$ 500"
    price5.classList.add('price')
    menu5.appendChild(price5)


    let menu6 = document.createElement('li')
    menu6.innerText = "Banana Cake"
    let image6 = document.createElement('img');
    image6.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image6.height ='150';
    image6.alt = 'imageBig';
    menu6.appendChild(image6)

    let price6 = document.createElement('p');
    price6.innerText= "$ 800"
    price6.classList.add('price')
    menu6.appendChild(price6)


     //main list
     content.appendChild(pageContent)
     pageContent.appendChild(headText)
     pageContent.appendChild(menuUl)
     menuUl.appendChild(menu1)
     menuUl.appendChild(menu2)
     menuUl.appendChild(menu3)
     menuUl.appendChild(menu4)
     menuUl.appendChild(menu5)
     menuUl.appendChild(menu6)

    
}
    export default MenuPage;
    
     
 
 

const homePage = ()=>{
    let content = document.querySelector('#content')
  
    //main para, img and header
    let pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    let headText = document.createElement('h1')
    headText.innerText='Welcome to Dav;s Swift  Cakes'

   const image = document.createElement('img');
    image.src = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    image.height ='300';
    image.alt = 'imageBig';

    let para = document.createElement('p');
    para.innerText= "We make wedding, birthday and all varieties of cakes Free global shipping on all orders 30 days easy returns if you change your mind Order before noon for same day dispatch";
    para.classList.add('text')

    content.appendChild(pageContent)
    pageContent.appendChild(headText)
    pageContent.appendChild(image)
    pageContent.appendChild(para)
}



export default homePage;
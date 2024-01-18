import homePage from "./homeResturant";
import contactPage from "./contact";
import MenuPage from "./menu";

function  createTabs(){
    const content = document.querySelector('#content')
    const nav = document.createElement('div')
    nav.classList.add('nav');
    content.appendChild(nav)

    //create logo div
    const logo = document.createElement('div')
    logo.classList.add('logo');
    let h2 = document.createElement('h2')
    h2.textContent='Dav-Cake'
    let icon = document.createElement('i')
    icon.classList.add('fa-solid')
    icon.classList.add('fa-cake-candles')
    logo.appendChild(h2)
    logo.appendChild(icon)


    //create div home, menu, contact
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
   

    //pass id 
    div1.setAttribute('id', 'homeBtn')
    div2.setAttribute('id', 'menuBtn')
    div3.setAttribute('id', 'contactBtn')
    
    //padd class
    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')
    
    //textcontent
    div1.textContent ="Home"
    div2.textContent="Menu"
    div3.textContent="Contact"

    //add event lister
    div1.addEventListener('click', ()=>{
        clearContent()
        homePage()
    });
    div2.addEventListener('click', ()=>{
        clearContent()
        MenuPage()
    })
    div3.addEventListener('click',()=>{
        clearContent()
        contactPage();
    })
    nav.appendChild(logo)
    nav.appendChild(div1)
    nav.appendChild(div2)
    nav.appendChild(div3)
}
function clearContent(){
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')
    if(pageContent){
        content.removeChild(pageContent)
    }
}
export default createTabs;
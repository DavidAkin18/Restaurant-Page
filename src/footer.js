function footTab(){
    const content = document.querySelector('#content')

    let footer = document.createElement('div')
    footer.classList.add('footer')


    let para1 = document.createElement('p')
    para1.textContent='This work is made by David';

    let para2 = document.createElement('p')
    para2.innerText = 'Cake pictures are gotten from google.com photos';

    let para3 = document.createElement('p')
    para3.innerText = 'Proudly Odin Boy';

    content.appendChild(footer);
    footer.appendChild(para1);
    footer.appendChild(para2);
    footer.appendChild(para3);
}
export default footTab;
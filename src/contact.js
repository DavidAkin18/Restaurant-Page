function contactPage(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);

    let number = document.createElement('h2')
    number.innerText= 'Welcome, you can contact us'


    const form =document.createElement('form');

    const label1 = document.createElement('label')
    label1.htmlFor = 'text';
    label1.innerText="Name:"
    label1.setAttribute('for', 'text')
    
    const breaker = document.createElement('br')
    
    const inputName = document.createElement('input')
    inputName.setAttribute('type','text');
    inputName.setAttribute('name','text');
    inputName.setAttribute('id','text');
    inputName.setAttribute('siz',50);
    inputName.setAttribute('placeholder','Names');
    
    const label2 = document.createElement('label')
    label2.htmlFor = 'email';
    label2.innerText="Email:"
    label2.setAttribute('for', 'email')
   
    const breaker1 = document.createElement('br')
    
    const inputMail = document.createElement('input')
    inputMail.setAttribute('type','email');
    inputMail.setAttribute('name','email');
    inputMail.setAttribute('id','email');
    inputMail.setAttribute('siz',50);
    inputMail.setAttribute('placeholder','dav@gmail.com');

    const label3 = document.createElement('label')
    label3.htmlFor = 'email';
    label3.innerText="Email:"
    label3.setAttribute('for', 'number')
   
    const breaker2 = document.createElement('br')
    const inputNumber = document.createElement('input')
    inputNumber.setAttribute('type','number');
    inputNumber.setAttribute('name','number');
    inputNumber.setAttribute('id','number');
    inputNumber.setAttribute('siz',50);
    inputNumber.setAttribute("maxLength", 10)
    inputNumber.setAttribute('placeholder','+234 81');
    const breaker3 = document.createElement('br')
    const buttonReset = document.createElement('button')
    buttonReset.setAttribute('type', 'reset');
    buttonReset.innerText= "Submit"
    buttonReset.setAttribute('id','btn')

    form.appendChild(label1)
    form.appendChild(breaker);
    form.appendChild(inputName)
    
    form.appendChild(breaker1);
    form.appendChild(label2)
    form.appendChild(inputMail)

    form.appendChild(breaker2);
    form.appendChild(label3)
    form.appendChild(inputNumber)


    form.appendChild(breaker3)
    form.appendChild(buttonReset)

    pageContent.appendChild(number)
    pageContent.appendChild(form);

}
export default contactPage;
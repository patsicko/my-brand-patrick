const grid3=document.getElementById('grid3');
const navMobileHeader=document.getElementById('nav-mobile-header');
const navMobileX=document.getElementById('nav-mobile-body-head-x');
const navMobileBody=document.getElementById('nav-mobile-body');

grid3.addEventListener('click',e=>{
    console.log('clicked')
    navMobileHeader.className=navMobileHeader.className.replace('nav-mobile-header','hide-navMobileHeader')
 

    navMobileBody.className=navMobileBody.className.replace('nav-mobile-body','show-navMobileBody')
 
})

navMobileX.addEventListener('click',e=>{
    navMobileHeader.className=navMobileHeader.className.replace('hide-navMobileHeader','nav-mobile-header')
    navMobileBody.className=navMobileBody.className.replace('show-navMobileBody','nav-mobile-body')
})





// contat page validation

const contactNames=document.getElementById('contact-names');
const contactEmail=document.getElementById('contact-email');
const contactForm=document.querySelector('#contact-form');

const namesError=document.getElementById('names-error');
const emailError=document.getElementById('email-error');
const textError=document.getElementById('text-error');
const mytextarea=document.getElementById('mytextarea');
// var text = tinymce.get('mytextarea').save();
// console.log(text);

// const notif=document.getElementById('notification');
// console.log(notif)





const validateInputs=()=>{

if(contactNames.value.trim()==''){
   namesError.innerText='Names are required';
   namesError.style.visibility='visible'
   
}else{
    namesError.innerText='';
    namesError.style.visibility='hidden'
}
   


if(contactEmail.value.trim()==''){
    emailError.innerText='Email is required';
    emailError.style.visibility='visible';

}else{
    emailError.innerText='';
    emailError.style.visibility='hidden'; 
}

if(mytextarea.value.trim().length<30){
    textError.innerText=` You typed ${mytextarea.value.trim().length} characters. The message must be at least 30 characters `;
    textError.style.visibility=`visible`
}else{
    textError.innerText='';
    textError.style.visibility=`hidden`
}


}




contactForm.addEventListener('submit',e=>{
    e.preventDefault()
    validateInputs();
   
 var temp = tinymce.get('mytextarea').save();

const userMessage={
contactNames:contactNames.value,
contactEmail:contactEmail.value,
message:temp

}

console.log(userMessage)

localStorage.setItem('userMessage',JSON.stringify(userMessage));





// const p=document.createElement('p');
// p.innerHTML+=userMessage.message
// notif.appendChild(p)




// notif.innerHTML+=userMessage.message;

// window.open('/notification.html')


  
   
// console.log(JSON.stringify(userMessage));
    
})



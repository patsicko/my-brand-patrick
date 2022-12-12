console.log('signup')


let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById('email')
let password=document.getElementById("password");
let pwd=document.getElementById("user-password").value;

console.log(password);
let form=document.querySelector("form");



function validateInput(){

  if(fname.value.trim()===""){
      let parent=fname.parentElement;
      let messageElement=parent.querySelector("small");
      messageElement.style.visibility="visible";
      messageElement.innerText="First name can not be empty";
      fname.style.borderColor = "#FF0000";
      
  }else{
    let parent=fname.parentElement;
      let messageElement=parent.querySelector("small");
    fname.style.borderColor = "#228B22";
    messageElement.style.visibility="hidden";
    
  }




  if(lname.value.trim()===""){
    let parent=lname.parentElement;
    let messageElement=parent.querySelector("small");
    messageElement.style.visibility="visible";
    messageElement.innerText="Last name can not be empty";
    lname.style.borderColor = "#FF0000";
    
}else{
  let parent=lname.parentElement;
    let messageElement=parent.querySelector("small");
  lname.style.borderColor = "#228B22";
  messageElement.style.visibility="hidden";
  
}


// email validation with regular expressions

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(!email.value.match(validRegex)){
    email.style.borderColor = "#FF0000";
    const parent=email.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility='visible';
    messageElement.innerText='Please put a valid email'

 
}else{
    email.style.borderColor = "#228B22";
    const parent=email.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility="hidden";
    
}


// password validation


const pass=  /^[A-Za-z]\w{6}$/;

if(!password.value.match(pass)){
    password.style.borderColor = "#FF0000";
    const parent=password.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility='visible';
    messageElement.innerText='Please put a valid password'
}else{
    password.style.borderColor = "#228B22";
    const parent=password.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility="hidden";
}




}





const button=document.getElementById('btn-signup')
console.log(button)

button.addEventListener("click",(event)=>{
  
event.preventDefault();
validateInput();

formData()

});


const formData=()=>{

   const username=lname.value;
   const userPwd=pwd;

    localStorage.setItem('username',username);
    localStorage.setItem('password',userPwd);

    const data={
        username,
        password
    }
console.log(data)

}
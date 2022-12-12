

const username=document.getElementById('username');
const password=document.getElementById('password');
const button=document.getElementById('btn-login');
const usernameError=document.querySelector('.username-error');
const passwordError=document.querySelector('.password-error');

const validName=localStorage.getItem('username');
const validPassword=localStorage.getItem('password');


console.log(button);


const validateInputs=()=>{

if(username!==validName){
  
    usernameError.innerHTML='Invalid username';
    usernameError.style.color='red'
}else{
    usernameError.innerHTML='';
   
}


if(password!==validPassword){
 
    passwordError.innerHTML='Invalid password';
    passwordError.style.color='red'
}else{
    passwordError.innerHTML='';
    

}



// if(username.value.trim()==''){
//     usernameError.innerHTML='Username is required';
//     username.style.borderColor = "#FF0000";
//     usernameError.style.color='red'
// }else{
//     username.style.borderColor = "#228B22";
//     usernameError.innerText=''
// }




// const pass=  /^[A-Za-z]\w{6}$/;

// if(!password.value.match(pass)){
//     password.style.borderColor = "#FF0000";
//     passwordError.style.color='red'
//     passwordError.innerText='Please put a valid password'
// }else{
//     password.style.borderColor = "#228B22";
//     passwordError.innerText=''
   

// }




}


button.addEventListener('click',e=>{
    e.preventDefault();

    validateInputs();
})
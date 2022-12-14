

const username=document.getElementById('username');
const password=document.getElementById('password');
const button=document.getElementById('btn-login');
const usernameError=document.querySelector('.username-error');
const passwordError=document.querySelector('.password-error');

const validAddress=JSON.parse(localStorage.getItem('userAddress'));




const validUsername=validAddress.username;
console.log(validUsername)
const validPassword=validAddress.userPassword;
console.log(validPassword)

console.log(button);


const validateInputs=()=>{

if(username.value!=validUsername){
  
     usernameError.innerHTML='Username is not valid';
    username.style.borderColor = "#FF0000";
    usernameError.style.color='red'
}else{
    username.style.borderColor = "#228B22";
     usernameError.innerText=''
   
}


if(password.value!=validPassword){
 
    password.style.borderColor = "#FF0000";
    passwordError.style.color='red'
    passwordError.innerText='Please put a valid password'
}else{
     password.style.borderColor = "#228B22";
    passwordError.innerText=''
    

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
    if(username.value==validUsername && password.value==validPassword ){
        window.open('/admin.html')
    }

   
})


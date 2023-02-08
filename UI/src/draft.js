
import {initializeApp} from 'firebase/app';

import {getFirestore,collection,onSnapshot,addDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDoQl_l8uztVVe2yXS9YZhcGrobyU8I4iE",
    authDomain: "my-brand-patrick.firebaseapp.com",
    projectId: "my-brand-patrick",
    storageBucket: "my-brand-patrick.appspot.com",
    messagingSenderId: "359983700664",
    appId: "1:359983700664:web:620d90a9f191439c5bf24d",
    measurementId: "G-GPM03G0WHR"
  };

// initialize firebase


initializeApp(firebaseConfig);

// initialize service

const db=getFirestore();

// collection ref

const colRef=collection(db,'admin');

const loginForm=document.querySelector('.login-form');

console.log(loginForm)





onSnapshot(colRef,(snapshoot) =>{


    let data=[];
  

    snapshoot.docs.forEach((doc)=>{
        data.push({...doc.data(),id:doc.id})
    })

  
   
loginForm.addEventListener('submit',e=>{
    e.preventDefault();


    
//    login validation




const username=document.getElementById('username');
const password=document.getElementById('password');
const button=document.getElementById('btn-login');
const usernameError=document.querySelector('.username-error');
const passwordError=document.querySelector('.password-error');


    data.forEach((datum)=>{

        if(username.value.trim()==''){

            username.style.borderColor = "#FF0000";
            usernameError.style.color='red';
            usernameError.innerHTML='username required'
        }else if(datum.lname!=username.value){

            username.style.borderColor = "#FF0000";
            usernameError.style.color='red';
            usernameError.innerHTML='invalid username'

        }
        
        else{
            username.style.borderColor = "#228B22";
            usernameError.innerText=''
        }
        
        const pass=  /^[A-Za-z]\w{6,}$/;
        
        if(!password.value.match(pass)){
            password.style.borderColor = "#FF0000";
            passwordError.style.color='red'
            passwordError.innerText='Please put a valid password'
        }else if(datum.password!=password.value){
            password.style.borderColor = "#FF0000";
            passwordError.style.color='red'
            passwordError.innerText='Incorrect password'
        }
        else{
            password.style.borderColor = "#228B22";
            passwordError.innerText=''
           
        
        }
        


        if(datum.lname==username.value && datum.password==password.value){
            window.open('/admin.html')
        }
    })
   })


})




// create data



let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById('email')
let signPassword=document.getElementById("user-password");


const signupForm=document.querySelector('.signup-form');
 signupForm.addEventListener('submit',e=>{
    e.preventDefault();

    // validate signup


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
    

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email.value.match(validRegex)){
        email.style.borderColor = "#FF0000";
        const parent=email.parentElement;
        const messageElement=parent.querySelector('small');
        messageElement.style.visibility='visible';
        messageElement.innerText='Please put a valid email';
      
    
     
    }else{
      
        email.style.borderColor = "#228B22";
        const parent=email.parentElement;
        const messageElement=parent.querySelector('small');
        messageElement.style.visibility="hidden";
        
      
      
        
        
    }


    const pass=  /^[A-Za-z0-9]\w{6,}$/;

if(!signPassword.value.match(pass)){
    signPassword.style.borderColor = "#FF0000";
    const parent=signPassword.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility='visible';
    messageElement.innerText='Please put a valid password';
    
}else{
    signPassword.style.borderColor = "#228B22";
    const parent=signPassword.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility="hidden";
  
    
}




if(fname.value.trim()!="" && lname.value.trim()!="" && email.value.match(validRegex) && signPassword.value.match(pass)){

    addDoc(colRef,{
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        password:signPassword.value
     }).then(()=>{
         signupForm.reset();
         
     })
 

  
}



 })












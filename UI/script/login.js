const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const button=document.getElementById('btn-login');
const emailError=document.querySelector('.email-error');
const passwordError=document.querySelector('.password-error');
let form=document.querySelector("form");


const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pass=  /^[A-Za-z0-9]\w{6,}$/;

function validateInput(){




if(!email.value.match(validRegex)){
    email.style.borderColor = "#FF0000";

    emailError.style.visibility='visible';
    emailError.innerText='Please put a valid email';
  

 
}else{
  
    email.style.borderColor = "#228B22";
  
    emailError.style.visibility="hidden";
    
  
    
    
}





if(!password.value.match(pass)){
    password.style.borderColor = "#FF0000";

    passwordError.style.visibility='visible';
    passwordError.innerText='Please put a valid password';
    
}else{
    password.style.borderColor = "#228B22";

    passwordError.style.visibility="hidden";
  
    
}


}






const postData = async(url = '', data = {})=> {

  const response = await fetch(url, {
    method: 'POST', 

    headers: {
      'Content-Type': 'application/json'
    
    },
   
    body: JSON.stringify(data) 
  });

  return response.json(); 
}




button.addEventListener('click',e=>{

  e.preventDefault();
validateInput();

if(email.value.match(validRegex) && password.value.match(pass)){

  postData('https://my-brand-backend.cyclic.app/api/login', {  email:email.value,password:password.value})

  .then((data) => {
    console.log(data);
   
    localStorage.setItem('token', data.token);
  
    console.log(data.data.role);
    if(data.data.role == 'admin'){
      console.log('GO TO ADMIN  PANEL')
      window.open('admin.html')
    }else if(data.data.role == 'user'){
      window.open('home.html')
    }
    
  }).catch(error =>{
   document.querySelector('.systemError').innerHTML =' Oop! Something went wrong! check your network and refill the form. <br> Make sure that this account exists '
   form.reset()
 
  });


}



})
















































// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";


// import {getFirestore,collection,onSnapshot,addDoc, getDocs,doc,deleteDoc,} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";



// const firebaseConfig = {
//     apiKey: "AIzaSyCaGFxEryap3Tgfy_9NhVh5S2IAP6XdARo",
//     authDomain: "my-brand-patsicko.firebaseapp.com",
//     projectId: "my-brand-patsicko",
//     storageBucket: "my-brand-patsicko.appspot.com",
//     messagingSenderId: "938465124094",
//     appId: "1:938465124094:web:c088de2015e05a3a280faf"
//   };

// const app=initializeApp(firebaseConfig);

// const db=getFirestore(app);




// const data=[]

// const getData=async()=>{

//   const snapshot=await getDocs(collection(db,'users'));
  
  
//   snapshot.forEach((doc)=>{
//   data.push({...doc.data(),id:doc.id});
    
//   })
//   console.log(data);

//   data.forEach(admin=>{
   
//     if(username.value==admin.lname && password.value==admin.password){
     
//       open('../admin.html')
//     }
//   })
  
//     }



// form.addEventListener('submit',e=>{
// e.preventDefault();

//  getData();



// })











// const validAddress=JSON.parse(localStorage.getItem('userAddress'));




// const validUsername=validAddress.username;
// console.log(validUsername)
// const validPassword=validAddress.userPassword;
// console.log(validPassword)

// console.log(button);


// const validateInputs=()=>{

// if(username.value!=validUsername){
  
//      usernameError.innerHTML='Username is not valid';
//     username.style.borderColor = "#FF0000";
//     usernameError.style.color='red'
// }else{
//     username.style.borderColor = "#228B22";
//      usernameError.innerText=''
   
// }


// if(password.value!=validPassword){
 
//     password.style.borderColor = "#FF0000";
//     passwordError.style.color='red'
//     passwordError.innerText='Please put a valid password'
// }else{
//      password.style.borderColor = "#228B22";
//     passwordError.innerText=''
    

// }



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




// }


// button.addEventListener('click',e=>{
//     e.preventDefault();

//     validateInputs();
//     if(username.value==validUsername && password.value==validPassword ){
//         window.open('/admin.html')
//     }

   
// })


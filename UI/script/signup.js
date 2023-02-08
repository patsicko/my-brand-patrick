



// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";


// import {getFirestore,collection,onSnapshot,addDoc, getDocs,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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


let fname=document.getElementById("fname");


let lname=document.getElementById("lname");
let email=document.getElementById('email')
let password=document.getElementById("user-password");
let form=document.querySelector("form");

const signUp=document.querySelector('#btn-signup');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pass=  /^[A-Za-z0-9]\w{6,}$/;



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





if(!password.value.match(pass)){
    password.style.borderColor = "#FF0000";
    const parent=password.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility='visible';
    messageElement.innerText='Please put a valid password';
    
}else{
    password.style.borderColor = "#228B22";
    const parent=password.parentElement;
    const messageElement=parent.querySelector('small');
    messageElement.style.visibility="hidden";
  
    
}


}




// button.addEventListener("click",(event)=>{

  
// event.preventDefault();
// validateInput();



// if(fname.value.trim()!="" && lname.value.trim()!="" && email.value.match(validRegex) && password.value.match(pass)){
//   window.open('/admin.html')
// }



// });
























const createUser=async()=>{




const userData=await ( await fetch('https://my-brand-backend.cyclic.app/api/createUser',{method: 'POST',headers: {'content-Type': 'application/json'},body:JSON.stringify(
  
{fname:fname.value,
  lname:lname.value,
  email:email.value,
  password:password.value})})).json()

console.log("data:",userData.status);
if(userData.status='success'){
  document.querySelector('#result').innerHTML = 'Thank you for registartion! go to login to access the homepage'
}



}


signUp.addEventListener('click',e=>{


  e.preventDefault();

  validateInput();

  if(fname.value.trim()!="" && lname.value.trim()!="" && email.value.match(validRegex) && password.value.match(pass)){

    createUser();
    form.reset();

  }
  

})













// const formData=new FormData();

// formData.append('fname',fname.value);
// formData.append('lname',lname.value);
// formData.append('email',email.value);
// formData.append('password',password.value);

// await console.log(formData);






















// form.addEventListener('submit',e=>{
// e.preventDefault()

//     addUser();
 
//     form.reset()
// })

// const addUser=()=>{
//     const docRef=addDoc(collection(db,'users'),{
//         fname:fname.value,
//         lname:lname.value,
//         email:email.value,
//         password:password.value
//     })

   
// }
   

//   const data=[]




//   const getData=async()=>{

// const snapshot=await getDocs(collection(db,'users'));

// snapshot.forEach((doc)=>{
// data.push({...doc.data(),id:doc.id});
  
// })
// console.log(data)

//   }

//  getData();
 


 
//  const deleteData=()=>{

//     deleteDoc(doc(db,'users',
//     '1B37FtFf2RFECK4FuXFn'));

//     console.log('deleted')

//  }

//  deleteData()











// const formData=()=>{

//    const username=lname.value;
//    const userPassword=password.value;

//    const data={
//     username,
//     userPassword
// }



//     localStorage.setItem('userAddress',JSON.stringify(data));
   

   
// console.log(data)
// document.getElementById('signup-form').reset();
// }


console.log('firebase')

import { initializeApp } from '/firebase/app'

import{
    getFirestore,collection,getDocs
} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDoQl_l8uztVVe2yXS9YZhcGrobyU8I4iE",
    authDomain: "my-brand-patrick.firebaseapp.com",
    projectId: "my-brand-patrick",
    storageBucket: "my-brand-patrick.appspot.com",
    messagingSenderId: "359983700664",
    appId: "1:359983700664:web:620d90a9f191439c5bf24d",
    measurementId: "G-GPM03G0WHR"
  };

  initializeApp(firebaseConfig);


  const db=getFirestore();


  const colRef=collection(db,'admin');


  getDocs(colRef)
  .then((snapshot)=>{
    console.log(snapshot.docs)
  })



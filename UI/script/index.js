

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
const textarea=document.getElementById('textarea');
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

if(textarea.value.trim().length<2){
    textError.innerText=` You typed ${textarea.value.trim().length} characters. The message must be at least 2 characters `;
    textError.style.visibility=`visible`
}else{
    textError.innerText='';
    textError.style.visibility=`hidden`
}


}




// contactForm.addEventListener('submit',e=>{
//     e.preventDefault()
//     validateInputs();
   
//  var temp = tinymce.get('mytextarea').save();

// const userMessage={
// contactNames:contactNames.value,
// contactEmail:contactEmail.value,
// message:temp

// }

// console.log(userMessage)

// localStorage.setItem('userMessage',JSON.stringify(userMessage));




    
// }

// )





const fetchBlogs=async()=>{

    const blogData=await (await fetch('https://my-brand-backend.cyclic.app/api/getBlogs')).json();

    
   const blogs=blogData.data.posts;
  
   let blogDiv=document.querySelector('.blogs-main');
   
   blogs.map(blog=>{
    
    blogDiv.innerHTML+=`
    
    <div class=" blog  blog1">
    <div class="blog-image">
        <img src=${blog.blogImage}  alt="">

    </div>

    <div class="blog-content">

        <div class="blog-title">
            <a href="blog.html">${blog.blogTitle}</a>
        </div>
        <br>
        <div class="blog-author">
            ${blog.blogAuthor}
        </div>
         <br> 
        <div class="blog-date">
        September 23 2022
        </div>
        <br> <br>
        <div class="blog-text">
        ${blog.blogText}
           
        </div>
        <span class="read-more">Read more...</span>
        ${blog._id}

        

    </div>

</div>

 <br><br><br><br><br>
    
    `
    document.querySelectorAll('.blog-text').forEach(text=>{
        text.style.height="70px"
        text.style.overflow="hidden";
    })

let readMore=document.querySelectorAll('.read-more').forEach(readmore=>{
    readmore.style.cursor="pointer"
    readmore.addEventListener('click',e=>{
        
       open('blog.html')

        console.log(e.target.parentNode);

        blogDiv.innerHTML=e.target.parentNode.parentNode.innerHTML;
       
        document.querySelector('.read-more').remove()
        
        
        })

})





   })



}

// fetchBlogs();



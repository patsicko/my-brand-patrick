const blogForm=document.querySelector('.comments-form');
const comment=document.querySelector('.comment');
const comments=document.querySelector('.comments');
const commentText=document.querySelector('#comment-text');
const commentsArr=[]




comment.addEventListener('click',e=>{
    blogForm.style.display='block'
})



blogForm.addEventListener('submit',e=>{
    e.preventDefault();
    blogForm.style.display='none';
    comments.style.display='block';
    
    comments.innerHTML+= `${blogForm.userName.value}  <br/> ${commentText.value}`;


})
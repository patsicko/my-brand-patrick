console.log('admin');

const blogs=document.querySelectorAll('.blog');


const blogList=Array.from(blogs);




const deleteBlog=document.getElementById('delete-blog');





blogList.map(blog=>{

    deleteBlog.addEventListener('click',(e)=>{
        console.log(e.target.parentNode);
       
    })

 


}
    )
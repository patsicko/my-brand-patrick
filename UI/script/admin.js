

 const token=localStorage.getItem('token');
 console.log(token)

const blogContainer=document.querySelector('.blogs-main-admin');
const form=document.querySelector('.admin-blog-form')


let title=document.getElementById('title');
let author=document.getElementById('author');
let blogImage='';

let blogTitle=document.querySelector('#title');
let blogAuthor=document.querySelector('#author');
let blogImg=document.querySelector('#blog-img');
let text=document.querySelector('#textarea');

const createButton=document.getElementById('create-blog');
let textarea=document.getElementById('textarea')




    document.getElementById('blog-img').addEventListener('change',function(){

        const reader=new FileReader();
        reader.readAsDataURL(this.files[0])
        reader.addEventListener('load',()=>{
        blogImage=reader.result;
        })
    
    })
    
    
    
    const blogText=textarea.value;


    const blogData={
        "title":title.value,
        "author":author.value,
        "blogImage":blogImage,
        "blogText": blogText,
    }
    



    const allBlogs=document.querySelector('.allBlogs');
    




    const fetchBlogs = async(url = '')=> {

        const response = await fetch(url, {
          method: 'GET'
        });
      
        return response.json(); 
      }







      
const getBlogs = async()=>{



    document.querySelector('.blogTable').innerHTML='';
    document.querySelector('.userTable').innerHTML='';
    document.querySelector('.admin-blog-form').innerHTML='';

   await fetchBlogs('https://my-brand-backend.cyclic.app/api/getBlogs').then((response)=>{
       
        const blogs=response.data.posts;

        blogs.map((blog,index)=>{
            console.log(index)
       document.querySelector('.blogTable').innerHTML+=


            `
                            
           <tr>
            <td>${index+1}</td>
            <td>${blog.blogTitle}</td>
            <td><i class="fa fa-pencil-square-o" aria-hidden="true" data-blogup-id=${blog._id}></i></td>
            <td><i class="fa fa-trash" aria-hidden="true" data-blog-id=${blog._id} ></i></td>
            </tr>
           
            
            `

        })

        deleteBlogById();
        updateBlogById()


            

    });

    

}








document.querySelector('.allBlogs').addEventListener('click',e=>{
 
    e.preventDefault();

    document.querySelector('form').style.display='none';


    


getBlogs();




})
      






const deleteBlogById=()=>{


    const deleteBlogIcon =document.querySelectorAll('.fa-trash');

    const dels=Array.from(deleteBlogIcon)

    
    
    dels.map((del) =>{
       
    
       del.addEventListener('click',e=>{

       
    
        const blogId=e.target.dataset.blogId
    

        const deleteBlog =async(id)=>{
          
        const deletedBlog=await fetch(`https://my-brand-backend.cyclic.app/api/deleteBlog/${id}`,
        {method:'DELETE', headers:{'content-Type':'application/json',token:`Bearer ${token} `}});
         console.log(deletedBlog.status);

         if(deletedBlog.status==204){
            getBlogs()
         }

         

        }
    
        deleteBlog(blogId);
    
       })  
    
    });

}





const updateBlogById=()=>{



    const updateBlogIcon =document.querySelectorAll('.fa-pencil-square-o');
    

    const updates=Array.from(updateBlogIcon);

   

    updates.forEach((upd) =>{
       
    
       upd.addEventListener('click',e=>{
        document.querySelector('.blogs-main-admin').innerHTML=
        `
        <form class="admin-blog-form">
        <h1 class="create-blog">CREATE A BLOG</h1>

        

        <form-group><label for="">Blog title</label> &nbsp; &nbsp; &nbsp; &nbsp;  <input  type="text" name="title" placeholder="Blog title" id="title"></form-group> <br> <br>
        <form-group><label for=""> Blog author</label>  &nbsp; <input type="text" name="author" placeholder="Blog author" id="author"></form-group> <br> <br>
        <form-group><label for=""> Blog image</label>  &nbsp; <input type="file" id="blog-img" placeholder="upload image"  name="blog-img"></form-group> <br> <br>


        <textarea name="" id="textarea" cols="30" rows="10" placeholder="#">
            
        </textarea>
        <br> <br>
        
        <button type="submit" id="create-blog-btn">CREATE</button>

    </form>
        
        `

       console.log(e.target);

        const blogId=e.target.dataset.blogupId;
        console.log(blogId);
        

    const getBlogById=async(blogId)=>{
   const response=await (await fetch(`https://my-brand-backend.cyclic.app/api/getBlog/${blogId}`)).json();

   console.log(response.data.post);


  document.querySelector('#title').value=response.data.post.blogTitle;
  document.querySelector('#author').value=response.data.post.blogAuthor;
//   document.querySelector('#blog-img').files[0]=response.data.post.blogImage;
  document.querySelector('#textarea').innerHTML=response.data.post.blogText;
    }

    getBlogById(blogId);


    const updateBlog =async(id)=>{
        const formData= new FormData();

formData.append('blogTitle',blogTitle.value);
formData.append('blogAuthor',blogAuthor.value);
formData.append('blogImage',blogImg.files[0]);
formData.append('blogText',text.value);

console.log(formData);
          
        const updatedBlog=await fetch(`https://my-brand-backend.cyclic.app/api/updateBlog/${id}`,
        {method:'PUT',headers:{token:`Bearer ${token}`},body:formData});

         console.log(updatedBlog.status);

         if(updatedBlog.status==200){
            getBlogs()
         }

        }

        document.querySelector('form').addEventListener('submit',e=>{

            e.preventDefault();
            updateBlog(blogId);

        })
    
        


    
       })  
    
    });

}









console.log(text)
const createBlogButton=document.querySelector('#create-blog-btn');




document.querySelector('.createBlog').addEventListener('click',e=>{
    e.preventDefault()

console.log(e.target);

document.querySelector('table').style.display='none';

window.location.reload();



})



const postData = async(url = '', data = {})=> {

    const response = await fetch(url, {});
  
    return response.json(); 
  }
  


createBlogButton.addEventListener('click',e=>{
    e.preventDefault();

const formData= new FormData();

formData.append('blogTitle',blogTitle.value);
formData.append('blogAuthor',blogAuthor.value);
formData.append('blogImage',blogImg.files[0]);
formData.append('blogText',text.value);


const createBlog=async()=>{

    const response=await(await fetch('https://my-brand-backend.cyclic.app/api/createBlog',{method:'POST',headers:{token:`Bearer ${token}`},body:formData})).json()
    
    console.log(response);
    if(response){
        document.querySelector('form').reset()
        document.querySelector('.created').innerHTML='Blog created successfully!'
    }


}

createBlog();

  
})










const allUsers=document.querySelector(".allUsers");
document.querySelector('.userTable').innerHTML='';


const getUsers=async()=>{
    const response=await fetch('https://my-brand-backend.cyclic.app/api/getUsers',{headers:{token:`Bearer ${token}`}});
    const data=await response.json();
    console.log(data.data);
const users=data.data
    users.map((user,index)=>{

   document.querySelector('.userTable').innerHTML+=`
   
   
   <tr>
   <td>${index+1}</td>
   <td>${user.fname}</td>
   <td>${user.lname}</td>
   <td>${user.email}</td>
   <td><i class="fa fa-trash" aria-hidden="true"  data-user-id=${user._id} ></i></td>
    </tr>
   
   `

    })

    deleteUserById()
}




allUsers.addEventListener("click",e=>{

    e.preventDefault();
document.querySelector('.userTable').innerHTML='';
document.querySelector('.blogTable').innerHTML='';
document.querySelector('.admin-blog-form').innerHTML='';




    getUsers()
})








const deleteUserById=()=>{


    const deleteUserIcon =document.querySelectorAll('.fa-trash');

    const dels=Array.from(deleteUserIcon)

    
    
    dels.map((del) =>{
       
    
       del.addEventListener('click',e=>{

       
    
        const userId=e.target.dataset.userId
    

        const deleteUser =async(id)=>{
          
        const deletedUser=await fetch(`https://my-brand-backend.cyclic.app/api/deleteUser/${id}`,
        {method:'DELETE', headers:{'content-Type':'application/json',token:`Bearer ${token} `}});
         console.log(deletedUser.status);

         if(deletedUser.status==204){
            getUsers()
         }

         

        }
    
        deleteUser(userId);

      

        
    
       })  
    
        
     

    });



}




const getMessages=async()=>{

const response=await (await fetch('https://my-brand-backend.cyclic.app/api/getMessages',{headers:{token:`Bearer ${token} `}})).json();
console.log(response.data.posts);
const data=response.data.posts;

data.map((datum,index)=>{

    document.querySelector('.messageTable').innerHTML+=`

    <tr>
    <td>${index+1}</td>
    <td>${datum.names}</td>
    <td>${datum.email}</td>
    <td>${datum.message}</td>
    <td><i class="fa fa-trash" aria-hidden="true"  data-user-id=${datum._id} ></i></td>
     </tr>

    `

})





}


document.querySelector('.allMessages').addEventListener('click',e=>{
    e.preventDefault();
    getMessages()
})
























// const addBlogdb=()=>{
// const docRef=addDoc(collection(db,'blogs'),blogData)

// }

// addBlogdb()





//     form.reset()

// })





// const addBlog=(dataArray)=>{

// dataArray.map(blogData=>{




//     const blogN=document.createElement('div');
//     blogN.classList.add('blog');

//     const blogImg=document.createElement('div');
//     blogImg.classList.add('blog-image');

//     const imageTrue=document.createElement('img');
//     imageTrue.setAttribute('src',`${blogData.blogImage}`);

//     blogImg.appendChild(imageTrue);
//     blogN.appendChild(blogImg)


//     // blog paragraph

//     const blogContent=document.createElement('div');
//     blogContent.classList.add('blog-content');


//     // blog title

//     const blogTitle=document.createElement('div');

//     blogTitle.classList.add('blog-title');
     
//     const titleLink=document.createElement('a');
//     titleLink.setAttribute('href','blog.html');
//     titleLink.innerHTML=`${blogData.title}`;

//     blogTitle.appendChild(titleLink);

//     blogContent.appendChild(blogTitle);

//     const br1=document.createElement('br');

//     blogContent.appendChild(br1);

//     const blogAuthor=document.createElement('div');
//     blogAuthor.classList.add('blog-author');
//     blogAuthor.innerHTML=`${blogData.author}`;

//     blogContent.appendChild(blogAuthor);

//     const br2=document.createElement('br');
//     blogContent.appendChild(br2);

//     const blogDate=document.createElement('div');
//     blogDate.classList.add('blog-date');
//     blogDate.innerHTML=new Date();

//     blogContent.appendChild(blogDate);

//     const br3=document.createElement('br');
//     blogContent.appendChild(br3);

//     const br4=document.createElement('br');
//     blogContent.appendChild(br4);

//     // blog text

//     const blogText=document.createElement('div');
//     blogText.classList.add('blog-text');
//     blogText.innerHTML=blogData.blogTemp;
//     blogText.style.overflowY='hidden';
    

//     const pliviledge=document.createElement('div');
//     pliviledge.classList.add('pliviledge');

//     const edit=document.createElement('div');
//     edit.classList.add('edit');
//     edit.innerHTML='Edit';
//     pliviledge.appendChild(edit);

//     const deleteBlog=document.createElement('div');
//     deleteBlog.classList.add('delete');
//     deleteBlog.setAttribute('id','delete-blog');
//     deleteBlog.innerHTML='Delete';

//     pliviledge.appendChild(deleteBlog);

//     blogText.appendChild(pliviledge)

//     blogContent.appendChild(blogText);

//     blogN.appendChild(blogContent);

//     blogContainer.appendChild(blogN);

// console.log(blogContainer);





// const deleteb=document.querySelectorAll('.delete');

// console.log(deleteb)
// deleteb.forEach(element=>{
//     element.addEventListener('click',e=>{
//         blogContainer.removeChild(e.target.parentElement.parentElement.parentElement.parentElement)

//         let dataArray= JSON.parse(localStorage.getItem('AllBlogs'));

        

//         dataArray.map((data,index)=>{
//             console.log(e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML);
//             console.log(data.title)
//      const dataTitle=e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
//      const objectTitle=data.title;

//      console.log(dataArray)

//        if(dataTitle==objectTitle){
//         dataArray.splice(index,1);
//         console.log(dataArray);
         

//         localStorage.setItem('AllBlogs',JSON.stringify(dataArray))

//         dataArray= JSON.parse(localStorage.getItem('AllBlogs'));
//         addBlog(dataArray);


//        }
      

//         })



//     })
    
// })







// const editb=document.querySelectorAll('.edit');

// console.log(edit)
// editb.forEach(element=>{
//     element.addEventListener('click',e=>{
        

//         let dataArray= JSON.parse(localStorage.getItem('AllBlogs'));

        

//         dataArray.map((data,index)=>{
//             console.log(e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML);
//             console.log(data.title)
//      const dataTitle=e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
//      const objectTitle=data.title;

//      console.log(dataArray)

//        if(dataTitle==objectTitle){

//         blogContainer.removeChild(e.target.parentElement.parentElement.parentElement.parentElement) 

//         dataArray.splice(index,1);
//         console.log(dataArray);
//         localStorage.removeItem('AllBlogs')

//         localStorage.setItem('AllBlogs',JSON.stringify(dataArray))

//         title.value= (e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML);

//         author.value=(e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerHTML)
          
//         textarea.innerText=e.target.parentElement.parentElement.firstElementChild.innerHTML;

//        }
      

//         })

//     })
    
// })




// })



// }



// document.addEventListener('DOMContentLoaded',e=>{

//     let dataArray= JSON.parse(localStorage.getItem('AllBlogs'));
//     addBlog(dataArray);
//     console.log(dataArray)

// })
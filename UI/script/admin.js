const blogContainer=document.querySelector('.blogs-main-admin');



const title=document.getElementById('title');
const author=document.getElementById('author');
const blogImage=document.getElementById('blog-img');
const createButton=document.getElementById('create-blog');
const textarea=document.getElementById('textarea')
const allBlogs=[];
createButton.addEventListener('click',e=>{
    e.preventDefault();
    
    const blogTemp = tinymce.get('textarea').save();

    const blogData={
        "title":title.value,
        "author":author.value,
        "blogImage":blogImage.value,
        "blogTemp": blogTemp,
    }
    console.log("New data: ", blogData);
   allBlogs = JSON.parse(localStorage.getItem("AllBlogs"));
    allBlogs.push(blogData);
    // localStorage.setItem('blogData',JSON.stringify(blogData));

    console.log("All blogs: ", allBlogs)
    saveToLocalStorage(allBlogs);


   const dataArray= JSON.parse(localStorage.getItem('AllBlogs'));

   console.log(dataArray);
    addBlog(blogData);

})

const saveToLocalStorage=(newData) => {
    localStorage.setItem('AllBlogs', JSON.stringify(newData));
}



const addBlog=(blogData)=>{


    const blogN=document.createElement('div');
    blogN.classList.add('blog');

    const blogImg=document.createElement('div');
    blogImg.classList.add('blog-image');

    const imageTrue=document.createElement('img');
    imageTrue.setAttribute('src',`${blogData.blogImage}`);

    blogImg.appendChild(imageTrue);
    blogN.appendChild(blogImg)


    // blog paragraph

    const blogContent=document.createElement('div');
    blogContent.classList.add('blog-content');


    // blog title

    const blogTitle=document.createElement('div');

    blogTitle.classList.add('blog-title');
     
    const titleLink=document.createElement('a');
    titleLink.setAttribute('href','blog.html');
    titleLink.innerHTML=`${blogData.title}`;

    blogTitle.appendChild(titleLink);

    blogContent.appendChild(blogTitle);

    const br1=document.createElement('br');

    blogContent.appendChild(br1);

    const blogAuthor=document.createElement('div');
    blogAuthor.classList.add('blog-author');
    blogAuthor.innerHTML=`${blogData.author}`;

    blogContent.appendChild(blogAuthor);

    const br2=document.createElement(br);
    blogContent.appendChild(br2);

    const blogDate=document.createElement('div');
    blogDate.classList.add('blog-date');
    blogDate.innerHTML=new Date();

    blogContent.appendChild(blogDate);

    const br3=document.createElement('br');
    blogContent.appendChild(br3);

    const br4=document.createElement('br');
    blogContent.appendChild(br4);

    // blog text

    const blogText=document.createElement('div');
    blogText.classList.add('blog-text');
    blogText.innerHTML=blogTemp;
    blogText.style.overflowY='hidden';
    

    const pliviledge=document.createElement('div');
    pliviledge.classList.add('pliviledge');

    const edit=document.createElement('div');
    edit.classList.add('edit');
    edit.innerHTML='Edit';
    pliviledge.appendChild(edit);

    const deleteBlog=document.createElement('div');
    deleteBlog.classList.add('delete');
    deleteBlog.setAttribute('id','delete-blog');
    deleteBlog.innerHTML='Delete';

    pliviledge.appendChild(deleteBlog);

    blogText.appendChild(pliviledge)

    blogContent.appendChild(blogText);

    blogN.appendChild(blogContent);

    blogContainer.appendChild(blogN);

console.log(blogContainer)

}


const deleteb=document.querySelectorAll('.delete');
deleteb.forEach(element=>{
    element.addEventListener('click',e=>{
    
        blogContainer.removeChild(e.target.parentElement.parentElement.parentElement.parentElement)  
    })
    
})

const editb=document.querySelectorAll('.edit');
editb.forEach(element=>{
    element.addEventListener('click',e=>{
     title.value= (e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML);

     author.value=(e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerHTML)
       
        textarea.innerText=e.target.parentElement.parentElement.firstElementChild.innerHTML;
        
         blogContainer.removeChild(e.target.parentElement.parentElement.parentElement.parentElement);
    })
    
})


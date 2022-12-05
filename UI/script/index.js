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
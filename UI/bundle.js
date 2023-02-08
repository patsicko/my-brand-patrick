/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/***/ (() => {

eval("\n\nconst grid3=document.getElementById('grid3');\nconst navMobileHeader=document.getElementById('nav-mobile-header');\nconst navMobileX=document.getElementById('nav-mobile-body-head-x');\nconst navMobileBody=document.getElementById('nav-mobile-body');\n\ngrid3.addEventListener('click',e=>{\n    console.log('clicked')\n    navMobileHeader.className=navMobileHeader.className.replace('nav-mobile-header','hide-navMobileHeader')\n \n\n    navMobileBody.className=navMobileBody.className.replace('nav-mobile-body','show-navMobileBody')\n \n})\n\nnavMobileX.addEventListener('click',e=>{\n    navMobileHeader.className=navMobileHeader.className.replace('hide-navMobileHeader','nav-mobile-header')\n    navMobileBody.className=navMobileBody.className.replace('show-navMobileBody','nav-mobile-body')\n})\n\n\n\n\n\n// contat page validation\n\nconst contactNames=document.getElementById('contact-names');\nconst contactEmail=document.getElementById('contact-email');\nconst contactForm=document.querySelector('#contact-form');\n\nconst namesError=document.getElementById('names-error');\nconst emailError=document.getElementById('email-error');\nconst textError=document.getElementById('text-error');\nconst mytextarea=document.getElementById('mytextarea');\n// var text = tinymce.get('mytextarea').save();\n// console.log(text);\n\n// const notif=document.getElementById('notification');\n// console.log(notif)\n\n\n\n\n\nconst validateInputs=()=>{\n\nif(contactNames.value.trim()==''){\n   namesError.innerText='Names are required';\n   namesError.style.visibility='visible'\n   \n}else{\n    namesError.innerText='';\n    namesError.style.visibility='hidden'\n}\n   \n\n\nif(contactEmail.value.trim()==''){\n    emailError.innerText='Email is required';\n    emailError.style.visibility='visible';\n\n}else{\n    emailError.innerText='';\n    emailError.style.visibility='hidden'; \n}\n\nif(mytextarea.value.trim().length<30){\n    textError.innerText=` You typed ${mytextarea.value.trim().length} characters. The message must be at least 30 characters `;\n    textError.style.visibility=`visible`\n}else{\n    textError.innerText='';\n    textError.style.visibility=`hidden`\n}\n\n\n}\n\n\n\n\ncontactForm.addEventListener('submit',e=>{\n    e.preventDefault()\n    validateInputs();\n   \n var temp = tinymce.get('mytextarea').save();\n\nconst userMessage={\ncontactNames:contactNames.value,\ncontactEmail:contactEmail.value,\nmessage:temp\n\n}\n\nconsole.log(userMessage)\n\nlocalStorage.setItem('userMessage',JSON.stringify(userMessage));\n\n\n\n\n\n// const p=document.createElement('p');\n// p.innerHTML+=userMessage.message\n// notif.appendChild(p)\n\n\n\n\n// notif.innerHTML+=userMessage.message;\n\n// window.open('/notification.html')\n\n\n  \n   \n// console.log(JSON.stringify(userMessage));\n    \n})\n\n\n\n\n//# sourceURL=webpack://ui/./script/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/index.js"]();
/******/ 	
/******/ })()
;
const notif=document.getElementById('notification');
console.log(notif);

const userMessage=JSON.parse(localStorage.getItem('userMessage'));

console.log(userMessage.message);

notif.innerHTML+=userMessage;
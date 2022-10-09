let btnLog = document.querySelector("#btn-log"); 
let btnSign = document.querySelector("#btn-sign"); 
let logForm = document.querySelector("#login-form"); 
let signForm= document.querySelector("#signin-form"); 
btnLog.addEventListener("click",()=>{
    btnLog.classList.add('active'); 
    btnSign.classList.remove('active');
    logForm.classList.add('active'); 
    signForm.classList.remove('active'); 
}); 


btnSign.addEventListener("click",()=>{
    btnSign.classList.add('active'); 
    btnLog.classList.remove('active'); 
    signForm.classList.add('active'); 
    logForm.classList.remove('active'); 
}); 
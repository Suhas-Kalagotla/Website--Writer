let btnLog = document.querySelector("#btn-log"); 
let btnSign = document.querySelector("#btn-sign"); 
btnLog.addEventListener("click",()=>{
    btnLog.classList.add('active'); 
    btnSign.classList.remove('active'); 
}); 

btnSign.addEventListener("click",()=>{
    btnSign.classList.add('active'); 
    btnLog.classList.remove('active'); 
}); 
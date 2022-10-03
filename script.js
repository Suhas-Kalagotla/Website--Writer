// to make navbar sticy 
window.addEventListener("scroll",function(){
    let header=document.querySelector("header"); 
    header.classList.toggle("sticky", window.scrollY > 0);
})

// to change background color 
let i=0; 
function changeBgColor(){
    let target = document.querySelector("#box1"); 
    let bgcolor=["#E27D60","#659DBD","#1A1A1D","#3AAF9A"];
    target.style.background=bgcolor[i];
    i=(i+1)%bgcolor.length; 
}
setInterval(changeBgColor,5000); 

// to change the card 
let x=0; 
function showCard(){
    let c =["#card2","#card3","#card1"];
    for(j=0; j<c.length; j++){
        let temp = document.querySelector(c[j]); 
        temp.style.zIndex = "0"; 
    }
    let target=document.querySelector(c[x]); 
    target.style.zIndex = "10";
    x=(x+1)%c.length;
}
setInterval(showCard,5000);

// modal 
let modal2 = document.querySelector("#modal2");
let modal = document.querySelector("#modal-content");
let overlay = document.querySelector("#overlay"); 
function modalOpen(){
    modal.classList.add("active"); 
    overlay.classList.add("active"); 
}
function modalOpen2(){
    modal2.classList.add("active"); 
    overlay.classList.add("active"); 
}

overlay.addEventListener('click',()=>{
    modal2.classList.remove("active"); 
    modal.classList.remove("active"); 
    overlay.classList.remove("active"); 
})

let btn = document.querySelector("modal-btn"); 
let icons = document.querySelector("btn-icon");
btn.addEventListener("onmouseover",()=>{
    
})

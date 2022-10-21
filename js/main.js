let option = document.querySelector("#option");

option.addEventListener("click",()=>{
    var slide = document.querySelector("[data-slide]"); 
    if(slide.style.display =="flex"){
        slide.style.display ="none"; 
    }else{
        slide.style.display ="flex"; 
    }
})
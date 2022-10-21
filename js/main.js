let option = document.querySelector("#option");

option.addEventListener("click",()=>{
    var slide = document.querySelector("[data-slide]"); 
    if(slide.style.display =="flex"){
        slide.style.display ="none"; 
    }else{
        slide.style.display ="flex"; 
    }
})

document.querySelector("#read").addEventListener("click",()=>{
    window.open("main.html","_self");
});
document.querySelector("#top").addEventListener("click",()=>{
    window.open("top.html","_self"); 
});
document.querySelector("#mywork").addEventListener("click",()=>{
    window.open("myWork.html","_self");
});

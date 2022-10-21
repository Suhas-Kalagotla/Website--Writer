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


let btnProfile= document.querySelector("[data-profile]"); 

btnProfile.addEventListener("click",()=>{
    
    let profile =document.querySelector("#profile"); 
    if(profile.style.display=="none") {
        profile.style.display="flex";
    }else {
        profile.style.display ="none";
    }
});


/* adding stories */ 

const notesContainer = document.getElementById("cont");
const addNoteButton= notesContainer.querySelector(".add-note");
 
getNotes().forEach((note) =>{
    const noteElement = createNoteElement(note.id,note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click",()=>addNote());

function getNotes(){ 
    return JSON.parse(localStorage.getItem("stickynotes-notes")||"[]");
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes",JSON.stringify(notes));
}

function createNoteElement(id,content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder ="Start Writing"; 

    element.addEventListener("change",()=>{
        updateNote(id,element.value);
    });

    element.addEventListener("dblclick",()=>{
        const doDelete = confirm("Do you want to delete this story"); 

        if(doDelete){
            deleteNote(id,element);
        }
    });

    return element;
}



function addNote(){
    const notes = getNotes();
    const noteObject = {
        id:Math.floor(Math.random()*100000),
        content:""
    };
    const noteElement = createNoteElement(noteObject.id,noteObject.content); 
    notesContainer.insertBefore(noteElement,addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}

function updateNote(id,newContent){
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id == id)[0];

    targetNote.content = newContent;
    saveNotes(notes);

}

function deleteNote(id,element){
    const notes = getNotes().filter(note => note.id != id);
    saveNotes(notes);
    notesContainer.removeChild(element);
}
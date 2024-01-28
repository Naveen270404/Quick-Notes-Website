const notescontanier = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inpur-box");

function showNotes(){
    notescontanier.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStoreage(){
    localStorage.setItem("notes",notescontanier.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className ="input-box" ;
    inputBox.setAttribute("contenteditable","true");
    img.src = "/delete.png";
    notescontanier.appendChild(inputBox).appendChild(img);

})
notescontanier.addEventListener("click" ,function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStoreage();
     }
     else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStoreage();
            }
        })
     }
})
document.addEventListener("keydown",event =>{
        if(event.key === "Enter"){
           document.execCommand("insertlineBreak");
           event.preventDefault();
        }
})
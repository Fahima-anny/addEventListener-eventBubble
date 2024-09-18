document.getElementById("updateBtn").addEventListener("click", function(){
let inputTxt = document.getElementById("inputTxt")
let defaultTxt = document.getElementById("defaultTxt")
defaultTxt.innerText = inputTxt.value
})

let commentDiv = document.getElementById("commentDiv")
let textArea = document.getElementById("textArea")
function addComment(){
    let newP = document.createElement("p")
    newP.innerText = textArea.value ;
    commentDiv.appendChild(newP)
}


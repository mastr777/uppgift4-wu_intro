/* 
ToDo List js
 */

let textInput;
let textInput2;
let result;

const input1 = document.querySelector("#textInput");
const input2 = document.querySelector("#textInput2");
const addBtn = document.querySelector("#showList");
const showBtn = document.querySelector("#result");

function addEachText() {

textInput = input1.value;
textInput2 = input2.value;
result = textInput + " " + textInput2;

showBtn.textContent = result;
// parseInt()

}

addBtn.addEventListener("click", addEachText);
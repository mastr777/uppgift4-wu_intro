/* 
ToDo List js
 */

/* let textInput;
let taskList = "<ol>";
let grabText; */

const completedTasks = document.querySelector("#completedTasks");
const textInput = document.querySelector("#textInput");
const grabTextBtn = document.querySelector("#grabTextBtn");
//const taskList = document.querySelector("#taskList");
const todoList = document.querySelector("#todoList");

let todoText = "";
let completed = 0;

// event listner for button Click

grabTextBtn.addEventListener("click", addToList);


// add text from Input to a list

function addToList() {

todoText = textInput.value;

const listElement = document.createElement('li');
todoList.appendChild(listElement);

const wrappedTask = document.createElement('span');
wrappedTask.innerText = todoText;

listElement.appendChild(wrappedTask);
/* taskList = todoText;

todoList.textContent = taskList; */

}

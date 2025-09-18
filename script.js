/* 
ToDo List js
 */

/* let textInput;
let taskList = "<ol>";
let grabText; */

const completedTasks = document.querySelector("#completedTasks");
const textInput = document.querySelector("#textInput");
const grabTextBtn = document.querySelector("#grabTextBtn");
const infoText = document.querySelector("small")
//const taskList = document.querySelector("#taskList");
const todoList = document.querySelector("#todoList");

let todoText = "";
let completed = 0;

// event listner for button Click

grabTextBtn.addEventListener("click", addToList);


// add text from Input to a list

function addToList() {

infoText.textContent = "";

todoText = textInput.value;
if (todoText.length == 0) {

    infoText.textContent = "Please, type a task and press add !!";
    return;

}

const listElement = document.createElement('li');
todoList.appendChild(listElement);

const wrappedTask = document.createElement('span');
wrappedTask.innerText = todoText;

listElement.appendChild(wrappedTask);

// clear input field

textInput.value = "";

}

/* 
ToDo List js
 */

// declaration of needed variables

const completedTasks = document.querySelector("#completedTasks");
const textInput = document.querySelector("#textInput");
const grabTextBtn = document.querySelector("#grabTextBtn");
const infoText = document.querySelector("small")
const todoList = document.querySelector("#todoList");

let todoText = "";
let completed = 0;

// event listner for button Click
grabTextBtn.addEventListener("click", addToList);


// function start, when clicked button ---------------------------------------------------------------
// add text from Input to a list
function addToList() {

                    // completedTasks.textContent = "You have no active tasks at the moment";

infoText.textContent = "";

todoText = textInput.value;
if (todoText.length == 0) {

    infoText.textContent = "Please, type a task and press Add Task !!";
    return;
}

const item = document.createElement('li');
todoList.appendChild(item);

const itemText = document.createElement('span');
itemText.innerText = todoText;

// added EventListener to span (text)
itemText.addEventListener("click", 
    function(){
        
        if (itemText.classList.contains("completed"))
        {
            itemText.setAttribute('class', "");
            completed--;
            completedTasks.textContent = "You have " + completed + " tasks done";
        }
        else 
        {
            itemText.setAttribute("class", "completed"); 
            completed++;
            completedTasks.textContent = "You have " + completed + " tasks done";
        }
    }
)

item.appendChild(itemText);

// clear input field
textInput.value = "";

}

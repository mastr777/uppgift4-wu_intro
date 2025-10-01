/* 
ToDo List js
 */


// declaration of needed variables

const completedTasks = document.querySelector('#completedTasks');

const textInput = document.querySelector('#textInput');
const theButton = document.querySelector('#theButton');
const infoText = document.querySelector('small')
const todoList = document.querySelector('#todoList');

let todoText = '';
let completed = 0;


// event listner for button Click
theButton.addEventListener('click', addToList);


// an Array conected to the li input
const todoArray = [];

function changeStatus(todoText, completedStatus){

    let findIndex = todoArray.map(t => t.name).indexOf(todoText);
    todoArray[findIndex].completed = completedStatus;


}

completedTasks.textContent = completed + ' completed Tasks';

// function start, when clicked button --------------------------------------------------------------
// add text from Input to a list
function addToList() {

    infoText.textContent = '';

    todoText = textInput.value;

    if (todoText.length == 0) {

        infoText.textContent = ' _please, type a task !';
        return;
    }


        // adding input into an Array
            /* let text = textInput.value; */
        const todoObject = {name: todoText, completed: false};
        todoArray.push(todoObject); /* text */


    // creating li and span within elements
    const item = document.createElement('li');
    todoList.appendChild(item);

    const itemText = document.createElement('span');
    itemText.setAttribute('class', 'listText');
    itemText.innerText = todoText;


        // trashcan code for an appearing span element
    const trashcan = document.createElement('span');
    trashcan.innerHTML = '&#x1F5D1';
    trashcan.classList.add('trashcan'); /* setAttribute('class',  */

    trashcan.addEventListener('click', function() {

        if (itemText.classList.contains('completed')) {

                itemText.setAttribute('class', 'listText');
                completed--;
                completedTasks.textContent = completed + ' completed Tasks';
                item.remove();
                let removeText = item.firstChild.textContent;
                let indexToRemove = todoArray.map(t => t.name).indexOf(removeText);
                todoArray.splice(indexToRemove, 1);
                
            }
            else {
            
            item.remove();
            let removeText = item.firstChild.textContent;
            let indexToRemove = todoArray.map(t => t.name).indexOf(removeText);
            todoArray.splice(indexToRemove, 1);
            completedTasks.textContent = completed + ' completed Tasks';

            }
    });


    // added EventListener to span (text)
    itemText.addEventListener('click',
        function () {

            if (itemText.classList.contains('completed')) {

                itemText.setAttribute('class', 'listText');
                completed--;
                completedTasks.textContent = completed + ' completed Tasks';
                changeStatus(itemText.innerText, false);

            }
            else {

                itemText.setAttribute('class', 'completed');
                completed++;
                completedTasks.textContent = completed + ' completed Tasks';
                changeStatus(itemText.innerText, true);

            }
        }
    );

    item.appendChild(itemText);
    item.appendChild(trashcan);


    // clear input field - last in code
    textInput.value = '';

};

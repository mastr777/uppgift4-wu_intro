/* 
ToDo List js
 */

// declaration of needed variables

const completedTasks = document.querySelector('#completedTasks');

const textInput = document.querySelector('#textInput');
const grabTextBtn = document.querySelector('#grabTextBtn');
const infoText = document.querySelector('small')
const todoList = document.querySelector('#todoList');

let todoText = '';
let completed = 0;

// event listner for button Click
grabTextBtn.addEventListener('click', addToList);

const todoArray = [];


// function start, when clicked button --------------------------------------------------------------

// add text from Input to a list
function addToList() {

    infoText.textContent = '';

    todoText = textInput.value;

    if (todoText.length == 0) {

        infoText.textContent = 'Please, type a task and press Add Task !!';
        return;
    }

        // adding input into an Array
        let text = textInput.value;
        todoArray.push(text);

    const item = document.createElement('li');
    todoList.appendChild(item);
    const itemText = document.createElement('span');
    itemText.setAttribute('class', 'listText');
    itemText.innerText = todoText;

    // trashcan code for an appearing span element
    const trashcan = document.createElement('span');
    trashcan.innerHTML = '&#x1F5D1';
    trashcan.setAttribute('class', 'trashcan');

    trashcan.addEventListener('click', function() {
        
        if (itemText.classList.contains('completed')) {
                itemText.setAttribute('class', 'listText');
                completed--;
                completedTasks.textContent = 'You have ' + completed + ' tasks done';
                item.remove();
            }
            else {

            item.remove();

            }
    }
    );


    // added EventListener to span (text)
    itemText.addEventListener('click',
        function () {

            if (itemText.classList.contains('completed')) {
                itemText.setAttribute('class', 'listText');
                completed--;
                completedTasks.textContent = 'You have ' + completed + ' tasks done';
            }
            else {
                itemText.setAttribute('class', 'completed');
                completed++;
                completedTasks.textContent = 'You have ' + completed + ' tasks done';
            }
        }
    )

    item.appendChild(itemText);
    item.appendChild(trashcan);

    // clear input field
    textInput.value = '';

}

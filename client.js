console.log('script loaded');

let $button = document.getElementById('addTodo');
let $textBox = document.getElementById('userInput');
let $todo = document.getElementById('listTodo');
let $completed = document.getElementById('listCompleted');
$button.onclick = addTodo;

let isBlack = true;
let $header = document.getElementById('header');
let $body = document.getElementById('body');
$header.onclick = changeColor;

$textBox.onmouseover = lightenTextBox;
$button.onmouseover = lightenButton;
$textBox.onmouseout = darkenTextBox;
$button.onmouseout = darkenButton;

/**
 * Defines the button click handler
 */
function addTodo(event) {
    let newTodoText = $textBox.value;
    console.log(newTodoText);

    let $newTodoItem = document.createElement('li');
    $newTodoItem.innerHTML = `${newTodoText}<button id="done" onclick = taskDone(event) onmouseover = lightenButton(event) onmouseout = darkenButton(event)>Done</button>`;

    $todo.append($newTodoItem);
}

function taskDone(event) {
    let $listItem = event.target.parentElement;
    console.log($listItem);
    event.target.remove();
    $listItem.style.textDecoration = 'line-through';
    $completed.append($listItem);
}

function deleteTask(event) {

}

function changeColor(event) {
    if (isBlack) {
        console.log('into cyan');
        isBlack = false;
        $header.style.backgroundColor = '#0ff';
        $header.style.color = '#181818';
        $body.style.backgroundColor = '#0ff';
        $body.style.color = '#181818';

        $textBox.style.backgroundColor = '#0dd';
        $button.style.backgroundColor = '#0dd';
        $textBox.style.color = '#111';
        $button.style.color = '#111';
    }
    else {
        console.log('into black');
        isBlack = true;
        $header.style.backgroundColor = '#181818';
        $header.style.color = '#0ff';
        $body.style.backgroundColor = '#181818';
        $body.style.color = '#0ff';

        $textBox.style.backgroundColor = '#111';
        $button.style.backgroundColor = '#111';
        $textBox.style.color = '#0dd';
        $button.style.color = '#0dd';
    }
}

function lightenTextBox(event) {
    if (isBlack) {
        $textBox.style.backgroundColor = '#222';
    }
    else {
        $textBox.style.backgroundColor = '#0bb';
    }
}

function lightenButton(event) {
    if (isBlack) {
        event.target.style.backgroundColor = '#222';
    }
    else {
        event.target.style.backgroundColor = '#0bb';
    }
}

function darkenTextBox(event) {
    if (isBlack) {
        $textBox.style.backgroundColor = '#111';
    }
    else {
        $textBox.style.backgroundColor = '#0dd';
    }
}

function darkenButton(event) {
    if (isBlack) {
        event.target.style.backgroundColor = '#111';
    }
    else {
        event.target.style.backgroundColor = '#0dd';
    }
}
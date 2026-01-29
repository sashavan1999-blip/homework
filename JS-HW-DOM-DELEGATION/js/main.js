"use strict"


let todos = [];
const todoKeys = {
    id: 'id',
    text: 'text',
    isCompleted: 'isCompleted',
}

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: todos.length + 1,
        [todoKeys.text]: text,
        [todoKeys.isCompleted]: false,
    };
    todos.push(newTodo)
    return newTodo;
}

const completeTodoById = (todos, todoId) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId);
    if (todo === undefined) {
        console.error(`Задачи c таким id (${todoId}) не существует`)
        return null
    }
    todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
    return todo;
}

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(`Задачи c таким id (${todoId}) не существует`);
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;

}



const formElement = document.querySelector(".form")
const inputElement = document.querySelector(".input")
const todosElement = document.querySelector(".todos")

function createTodoElement(text) {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.innerHTML = `<div class="todo-text">${text}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>`
    return li
}

function handleCreateTodo(todos, text) {
    createTodo(todos, text);
    const todoElement = createTodoElement(text);

    todosElement.prepend(todoElement)
}

formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    const text = inputElement.value.trim();
    if (text == '') {
        return
    }

    handleCreateTodo(todos, text);
    inputElement.value = ''
});

todosElement.addEventListener('click', event => {
    const target = event.target
    if (target.classList.contains('button-complete')) {
        const todoElement = target.closest('.todo')
        todoElement.classList.toggle('completed')
    }
    if (target.classList.contains('button-delete')) {
        const todoElement = target.closest('.todo')
        todoElement.remove()
    }
})
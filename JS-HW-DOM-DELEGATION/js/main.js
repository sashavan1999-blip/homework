"use strict"


const todoKeys = {
    id: 'id',
    text: 'text',
    isCompleted: 'isCompleted',
}
const getTodosFormLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
};

const setTodosTolocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos)) 
}


const todos = getTodosFormLocalStorage() || [];


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

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.dataset.id = todo[todoKeys.id];
    li.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>` 
    return li
}

const renderTodods = (todos, container) => {
    container.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        if (todo[todoKeys.isCompleted]) {
            todoElement.classList.add("completed")
        }
        container.prepend(todoElement);
    })

}


function handleCreateTodo(todos, text) {
    const todo = createTodo(todos, text);
    const todoElement = createTodoElement(todo);
    setTodosTolocalStorage(todos);
    todosElement.prepend(todoElement)
}

document.addEventListener("DOMContentLoaded", () => {
    renderTodods(todos, todosElement)
})

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
    const todo = event.target.closest('.todo')
    if (!todo) return
    const todoId = Number(todo.dataset.id)

    if (event.target.classList.contains("button-complete")){
        completeTodoById(todos, todoId)
        setTodosTolocalStorage(todos);
        todo.classList.toggle("completed")
    }
    if (event.target.classList.contains("button-delete")){
        deleteTodoById(todos, todoId);
        setTodosTolocalStorage(todos);
        todo.remove()
    }
})

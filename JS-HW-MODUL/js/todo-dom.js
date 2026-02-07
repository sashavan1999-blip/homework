import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./todo-service.js";
import {setTodosTolocalStorage} from "./localStorage.js";

const formElement = document.querySelector(".form")
const inputElement = document.querySelector(".input")
const todosElement = document.querySelector(".todos")

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.dataset.id = todo[todoKeys.id];
    li.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#9989;</button>
            <button class="button-delete button">&#10060;</button>
        </div>` 
    return li
}

export const renderTodods = (todos) => {
    todosElement.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        if (todo[todoKeys.isCompleted]) {
            todoElement.classList.add("completed")
        }
        todosElement.prepend(todoElement);
    })

}
function handleCreateTodo(todos, text) {
    const todo = createTodo(todos, text);
    const todoElement = createTodoElement(todo);
    setTodosTolocalStorage(todos);
    todosElement.prepend(todoElement)
}

export const initTodoHandlers = (todos) => {
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

}
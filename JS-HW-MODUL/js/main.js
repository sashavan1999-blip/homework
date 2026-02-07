import { getTodosFormLocalStorage } from "./localStorage.js"
import { renderTodods, initTodoHandlers } from "./todo-dom.js"


const todos = getTodosFormLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
    renderTodods(todos)
    initTodoHandlers(todos)
})


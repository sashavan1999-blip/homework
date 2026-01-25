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
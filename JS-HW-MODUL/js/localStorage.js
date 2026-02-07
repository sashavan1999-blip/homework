export const getTodosFormLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosTolocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos)) 
}
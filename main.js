const title = document.querySelector("#title")
const description = document.querySelector("#description")
const nTodo = document.querySelector(".number-todo")
const listTodo = document.querySelector(".list-todos ul")

class Todo{
    constructor(title, description){
        this.title = title
        this.description = description
    }

    static #getTodos() {
        const todos = localStorage.getItem("todos")
        const getTodos = todos ? JSON.parse(todos) : []

        return getTodos
    }

    save(){
        const todo = {
            title: this.title,
            description: this.description
        }

        Todo.#getTodos().push(todo);
        localStorage.setItem('todos',JSON.stringify(Todo.#getTodos()));
    }

    static getAll() {
        Todo.#getTodos().forEach(todo => {
            listTodo.append(todoTemplate(todo.title, todo.description))
        });
    }

    static getLength() {
        return Todo.#getTodos().length
    }

}

// Get todo length after load page
nTodo.innerHTML = Todo.getLength();

// Add new todo
addEventListener("submit", (e) => {
    e.preventDefault()
    const todo = new Todo(title.value, description.value);
    todo.save()
    
    // Get todo length after submit
    nTodo.innerHTML = Todo.getLength();

    // Empty input after submit
    title.value = ''
    description.value = ''
});

function todoTemplate(title, description) {
    const li = document.createElement("li")
    const strong = document.createElement("strong")
    const titleNode = document.createTextNode(title)

    const p = document.createElement("p")
    const descriptionNode = document.createTextNode(description)

    strong.appendChild(titleNode)
    p.appendChild(descriptionNode)
    li.appendChild(strong)
    li.appendChild(p)
    return li

}

forEach


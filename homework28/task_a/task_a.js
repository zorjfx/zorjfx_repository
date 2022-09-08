class getTodo {
    async getTodoTitle() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data["title"]);
    }
}

newGetTodo = new getTodo();
newGetTodo.getTodoTitle();
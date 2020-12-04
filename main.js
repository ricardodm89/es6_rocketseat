class TodoList{
    constructor(){
        this.todos = []

    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function(){
    MinhaLista.addTodo();
}

const nome = "Ricardo";
const idade = 30;

console.log(`meu nome é ${nome}`);
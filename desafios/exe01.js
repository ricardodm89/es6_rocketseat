const User1 = new Usuario('user@teste.com', 'senha123');
const Adm1 = new Admin('admin@teste.com', 'senha123');

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;

    }

}

class Admin extends Usuario{
    constructor(){
        super();
    
        Admin = true;

    
    }
}




console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
// 3.1
const arr = [1, 2, 3, 4, 5];
const soma = arr.map(item => item + 10);
console.log('Exercício 3.1',soma);


//3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log('Exercício 3.2', mostraIdade(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});

console.log('Exercício 3.3',mostraUsuario(nome, idade));
console.log('Exercício 3.3',mostraUsuario(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}


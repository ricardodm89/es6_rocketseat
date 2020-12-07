// 3.1
const arr = [1, 2, 3, 4, 5];
const soma = arr.map(item => item + 10);
console.log(soma);

//3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario => usuario.idade);

console.log(mostraIdade(usuario));





// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

function soma(...params){
    return params.reduce((total, next) => total + next);
};

console.log(soma(1, 2, 3, 4, 5, 6));


//console.log(soma(1, 2, 3, 4, 5, 6)); // 21
//console.log(soma(1, 2)); // 3


//5.2 spread
//Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   const usuario2 = {...usuario, nome:'Gabriel'};
   console.log('Exercício 5.1', usuario2)

   const usuario3 = {...usuario, endereco:{cidade:'Lontras'}};
   console.log('Exercício 5.2', usuario3)
   
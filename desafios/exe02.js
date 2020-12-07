const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   

   // Exercicio 2.1  Utilizando o map
   //Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

  const ages = usuarios.map(usuarios => usuarios.idade);
  console.log('Exercicio 2.1',ages);

  // 2.2 Utilizando o filter
  //Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const users = usuarios.filter(usuarios => 
        usuarios.idade > 18 && usuarios.empresa === 'Rocketseat'
);
console.log('Exercicio 2.2',users);

// 2.3 Utilizando o find
  //Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const userWork = usuarios.find(usuarios => usuarios.empresa === 'Google');
console.log('Exercicio 2.3',userWork);

//2.4 Unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

const usersAge = usuarios.map( usuarios => ({...usuarios, idade : usuarios.idade * 2})).filter(usuarios => usuarios.idade <= 50);
console.log('Exercicio 2.4',usersAge);


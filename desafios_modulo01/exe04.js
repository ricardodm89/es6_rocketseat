//4.1 Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };


const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


//4.2 Desestruturação em parâmetros


function mostraInfo({nome, idade}) {
    //return `${usuario.nome} tem ${usuario.idade} anos.`;
    return info = `${nome} tem ${idade} anos.`;
   }

   mostraInfo({ nome: 'Diego', idade: 23 })
   console.log(info);
    
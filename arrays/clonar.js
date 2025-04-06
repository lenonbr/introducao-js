const notas = [7, 7, 8, 9]; //array original

// array referenciando o original,
// atribuindo SPREAD OPERATOR [...array]
// e adicionando novo item ao novo array
//sem modificar o original referenciado
const novaListaNotas = [...notas, 10]; 
// [...notas, 10] é uma alternativa a
// novaListaNotas.push(10);

console.log(notas);//valor original
console.log(novaListaNotas);//com item '10' adicionado




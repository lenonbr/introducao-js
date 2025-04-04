const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão(let indice = 0;): executada apenas 1x
//segunda expressão(indice < notas.length;): condição de execução
//terceira expressão(indice++): executada sempre ao final do bloco e adicona 1 ao valor de indice
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}
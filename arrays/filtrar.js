const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

//retornando o menor nome da lista de alunos
const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length < 4;
});
//apontando o aluno reprovado por sua média
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(tamanhoNome);
console.log(reprovados);

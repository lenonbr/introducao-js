const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//           [elem. 1],[elem. 2]
const lista = [ alunos, medias];

console.log(
    `O aluno ${lista[0][0]} teve obteve a média ${lista[1][0]};
     A aluna ${lista[0][1]} teve obteve a média ${lista[1][1]};
     O aluno ${lista[0][2]} teve obteve a média ${lista[1][2]};
     A aluna ${lista[0][3]} teve obteve a média ${lista[1][3]};
    `
)
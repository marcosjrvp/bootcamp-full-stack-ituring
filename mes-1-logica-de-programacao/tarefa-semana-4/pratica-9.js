let filmes = [{
  titulo: "Um Sonho de Liberdade",
  notaAvaliacao: 9.2,
  duracao: 142,
  anoPublicacao: 1994,
  categoria: "Drama"
},
{
  titulo: "Clube da Luta",
  notaAvaliacao: 8.7,
  duracao: 139,
  anoPublicacao: 1999,
  categoria: "Drama"
},
{
  titulo: "Toy Story 3",
  notaAvaliacao: 8.3,
  duracao: 103,
  anoPublicacao: 2010,
  categoria: "Animação"
}];

function filmesOrdenados(filmes){

  const listaFilmesOrdenados = filmes.sort( (a,b)=> a.notaAvaliacao - b.notaAvaliacao);
  return listaFilmesOrdenados;
}

function exibirResultado(filmes){

  let melhorFilme = filmesOrdenados(filmes).pop();

  console.log(`O filme de melhor avaliação com nota ${melhorFilme.notaAvaliacao} é : ${melhorFilme.titulo}`);
}

exibirResultado(filmes);
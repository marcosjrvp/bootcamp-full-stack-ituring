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

  function ordenarFilmes(filmes){

    let filmesOrdenados = filmes.sort((a, b) =>{
        return a.notaAvaliacao - b.notaAvaliacao; 
        
    });

    let ultimo = filmesOrdenados.length-1;

    console.log(`O filme de melhor avaliação com nota ${filmesOrdenados[ultimo].notaAvaliacao} é : ${filmesOrdenados[ultimo].titulo}`);
    
  }

  ordenarFilmes(filmes);

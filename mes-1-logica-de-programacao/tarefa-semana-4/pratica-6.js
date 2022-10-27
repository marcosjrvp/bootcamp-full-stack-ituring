let filme = {
    titulo: 'Estrelas Além do Tempo' ,
    notaDeAvaliacao: 7.8 ,
    duracao: 127 ,
    anoDePublicacao: 2016 ,
    categoria: 'Drama'
}

const exibirInformacao = (filme => {

    console.log(`O filme ${filme.titulo} que estreou em ${filme.anoDePublicacao} e tem a avaliação de ${filme.notaDeAvaliacao} pelo IMDB`);
} );

exibirInformacao(filme);
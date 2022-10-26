const listaSerie = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];



function pesquisarSeries(listaSerie, termoPesquisado) {

    let serieEncontradas = [];
    let mensagem = 'Favor digitar algum termo para ser pequisado'

    if( termoPesquisado === ""){

        return mensagem;
        
    }
    
      for (let i = 0; i < listaSerie.length; i++) {
        if (listaSerie[i].includes(termoPesquisado)) {
            serieEncontradas.push(listaSerie[i]);

        }
 
    } 
    return serieEncontradas;

}

console.log(pesquisarSeries(listaSerie, "Th"));
console.log(pesquisarSeries(listaSerie, "ubs"));

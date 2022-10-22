const listaSerie = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

let serieEncontradas = [];

function pesquisarSeries(listaSerie, termoPesquisado) {

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

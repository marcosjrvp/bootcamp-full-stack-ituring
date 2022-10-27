const listaSerie = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];



function pesquisarSeries(listaSerie, termoPesquisado) {

    let seriesFiltradas = listaSerie.filter(function (item) {

        return item.includes(termoPesquisado)
    });

    return seriesFiltradas;
}

console.log(pesquisarSeries(listaSerie, "Th"));
console.log(pesquisarSeries(listaSerie, "ubs"));





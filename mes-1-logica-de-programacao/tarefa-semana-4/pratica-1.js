const listaSerie = ["Breaking Bad" , "Game of Thrones" , "Stranger Things" , "Chernobyl" , "Dexter" , "The Last Dance" , "This is Us"];


function exibirLista(listaSerie){

    listaSerie.forEach(function(item, indice){
        console.log(`[${indice}] ${item}`)
    });
    
}

exibirLista(listaSerie);
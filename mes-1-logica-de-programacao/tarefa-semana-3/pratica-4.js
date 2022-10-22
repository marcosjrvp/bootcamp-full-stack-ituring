
const listaSerie = ["Breaking Bad" , "Game of Thrones" , "Stranger Things" , "Chernobyl" , "Dexter" , "The Last Dance" , "This is Us"];


function exibirLista(listaSerie){

    for(let i=0; i< listaSerie.length; i++){

        console.log(`[${i}] ${listaSerie[i]}`)
    }
}

exibirLista(listaSerie);
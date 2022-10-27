const listaSerie = ["Breaking Bad" , "Game of Thrones" , "Stranger Things" , "Chernobyl" , "Dexter" , "The Last Dance" , "This is Us"];

 function pesquisarSeries(listaSerie, serieBuscada){
    
        let resultado = undefined;
        listaSerie.forEach(function(valorElemento, indiceElemento){
        if(valorElemento === serieBuscada){        
         resultado = indiceElemento;
        }
    });
    return resultado;
    
}

console.log(pesquisarSeries(listaSerie, "Dexter"));
console.log(pesquisarSeries(listaSerie, "Friends"));
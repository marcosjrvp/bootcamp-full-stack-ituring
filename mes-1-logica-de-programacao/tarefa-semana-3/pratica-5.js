const listaSerie = ["Breaking Bad" , "Game of Thrones" , "Stranger Things" , "Chernobyl" , "Dexter" , "The Last Dance" , "This is Us"];

 function pesquisarSeries(listaSerie, serie){

    for(let i=0; i<listaSerie.length; i++){
        if(listaSerie[i] === serie){
            return  i;

        }
    }

}

console.log(pesquisarSeries(listaSerie, "Dexter"));
console.log(pesquisarSeries(listaSerie, "Friends"));
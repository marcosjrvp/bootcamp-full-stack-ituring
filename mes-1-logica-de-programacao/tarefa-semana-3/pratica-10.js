const listaVotos = [1, 1, 1, 4, 4, 2, 3, 2];


function verificarQuantidadeVotos(listaVotos){

    let totalVotosBrasil = 0;
    let totalVotosArgentina = 0;
    let totalVotosEspanha = 0;
    let totalVotosPortugal = 0;

    for(let i=0; i < listaVotos.length; i++){
        if(listaVotos[i] === 1){
            totalVotosBrasil++;
        }else if(listaVotos[i] === 2){
            totalVotosArgentina++;
        }else if(listaVotos[i] === 3){
            totalVotosEspanha++;
        }else if(listaVotos[i] === 4){
            totalVotosPortugal++;
        }
    }
    console.log(`Brasil : ${totalVotosBrasil} votos`);
    console.log(`Argentina : ${totalVotosArgentina} votos`);
    console.log(`Espanha : ${totalVotosEspanha} votos`);
    console.log(`Portugal : ${totalVotosPortugal} votos`);

    if(totalVotosBrasil>=totalVotosArgentina && totalVotosBrasil >= totalVotosEspanha && totalVotosBrasil >= totalVotosPortugal){
        console.log(`Resultado :        
        Brasil é o preferido para ganhar a Copa do Mundo!`);
    }else if(totalVotosArgentina >= totalVotosBrasil && totalVotosArgentina >= totalVotosEspanha && totalVotosArgentina >= totalVotosPortugal){
        console.log(`Resultado :
        Argentina é a preferida para ganhar a Copa do Mundo!`);
    }else if(totalVotosEspanha >= totalVotosBrasil && totalVotosEspanha >= totalVotosArgentina && totalVotosEspanha >= totalVotosPortugal){
        console.log(`Resultado :
        Espanha é a preferida para ganhar a Copa do Mundo!`);
    }else{
        console.log(`Resultado :
        Portugal é o preferido para ganhar a copa do Mundo!`);
    }
     

}

verificarQuantidadeVotos(listaVotos);




//
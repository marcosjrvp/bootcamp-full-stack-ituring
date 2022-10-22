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
    console.log(`Resultado : `);
    console.log(`Brasil é o preferido para ganhar a Copa do Mundo!`);

}

verificarQuantidadeVotos(listaVotos);





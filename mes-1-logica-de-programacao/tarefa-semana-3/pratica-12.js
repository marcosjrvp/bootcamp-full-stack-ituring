const listaPessoas = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano" , "Jairo Ferreira" , "Vitor Ribeiro"];


function dividirLista(listaPessoas){

    let grupo1 = listaPessoas.slice(0,2);
    let grupo2 = listaPessoas.slice(2,4);
    let grupo3 = listaPessoas.slice(4,7);

    

    console.log(`Grupo 1: ${grupo1}`);
    console.log(`Grupo 2 : ${grupo2}`);
    console.log(`Grupo 3 : ${grupo3}`);
}

dividirLista(listaPessoas);

/* Outra solução :

function exibirPessoas(listaPessoas){

    
    console.log('Grupo 1 : '  + listaPessoas[0] +' , ' + listaPessoas[1] );
    console.log('Grupo 2 : ' + listaPessoas[2] + ' , ' + listaPessoas[3] );
    console.log('Grupo 3 : ' + listaPessoas[4] + ' , ' + listaPessoas[5] + ' , ' + listaPessoas[6] );
}


exibirPessoas(listaPessoas);*/
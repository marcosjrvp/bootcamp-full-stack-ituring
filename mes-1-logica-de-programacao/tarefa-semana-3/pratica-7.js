const listaNumeros = [100 , -20 , -30 , 10 , -7 , -21 , -5];


function calcularSaldoFinal(listaNumeros){

    let saldoFinal = 0;

    for(let i=0; i, i<listaNumeros.length; i++){
        saldoFinal += listaNumeros[i];        
    }

    if(saldoFinal > 0){
    console.log(`O saldo final da sua conta foi de positivo no valor de R$ ${saldoFinal}`);
    }else{
        console.log(`O saldo final da sua conta foi negativo no valor de R$ ${saldoFinal}`);
    }
}

calcularSaldoFinal(listaNumeros);


//
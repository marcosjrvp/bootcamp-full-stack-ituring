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

function exibirDepositosERetiradas(listaNumeros){

    let totalDepositos = 0;
    let totalRetiradas = 0;

    for(let i =0; i < listaNumeros.length; i++ ){
        if(listaNumeros[i] >= 0){
            totalDepositos += listaNumeros[i];
        }else if(listaNumeros[i] < 0){
            totalRetiradas += listaNumeros[i];
            
        }
    }
    console.log(`O total de depósitos foram de R$ ${totalDepositos}`);
    console.log(`O total de retiradas foram de R$ ${totalRetiradas*-1}`);
}

//

exibirDepositosERetiradas(listaNumeros);
calcularSaldoFinal(listaNumeros);
    
const verificarPar = (numero) => {

    const ehPar = numero % 2 === 0;

    if(ehPar){

        console.log(`O número ${numero} é par`)
    }else{

        console.log(`O número ${numero} é ímpar`)
    }
    
}

verificarPar(1);
verificarPar(28);
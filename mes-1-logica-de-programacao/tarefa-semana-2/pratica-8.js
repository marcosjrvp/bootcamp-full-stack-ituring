const verificarPar = (numero) => {

    ehPar = numero % 2 === 0;

    if(ehPar){

        console.log(`O número ${numero} é par`)
    }else{

        console.log(`O número ${numero} é ímpar`)
    }
    
}

console.log(verificarPar(1));
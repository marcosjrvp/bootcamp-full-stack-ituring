const exibirPrimos = function (numero) {

    let i = 2;
    let ehPrimo = true;

    if(numero < 1){

        console.log('Favor digitar um número inteiro maior que 0 !');
        return undefined;
    }

    while (i < numero) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;

        }
        i++;
    }
    if (ehPrimo) {

        console.log('true = primo');
    } else {

        console.log(' false = não é primo');
    }
}

exibirPrimos();
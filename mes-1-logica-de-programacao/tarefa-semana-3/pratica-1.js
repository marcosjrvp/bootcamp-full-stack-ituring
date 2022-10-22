function exibirTabuada(numero) {
    let i = 1;

    while (i <= 10) {
        let tabuada = numero * i;
        console.log(`${numero} x ${i} = ${tabuada}`);
        i = i + 1;
    }

}

exibirTabuada(7);
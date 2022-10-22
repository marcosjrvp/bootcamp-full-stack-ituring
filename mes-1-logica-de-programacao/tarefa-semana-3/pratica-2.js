const exibaImpares = (numero) => {

    let i = 0;

    if (numero < 1) {

        console.log('Os números informados deversão ser maior do que 0!');
        return undefined;
    }

    while (i <= numero) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i = i + 1;
    }
}

exibaImpares(80);
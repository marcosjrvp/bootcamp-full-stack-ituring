const obterMaior = function (numero1, numero2) {

    if (numero1 === numero2) {

        console.log(`Os números digitados foram iguais, portando será exibido somente um deles : ${numero1}`);

    } else if (numero1 > numero2) {

        console.log(`O número ${numero1} foi o maior digitado, portanto somente ele será exibido : ${numero1}`);

    } else {
        console.log(`O número ${numero2} foi o maior digitado, portanto somente ele será exibido : ${numero2}`);

    }
}

obterMaior(1, 2);
obterMaior(2, 2);
obterMaior(4, 2);
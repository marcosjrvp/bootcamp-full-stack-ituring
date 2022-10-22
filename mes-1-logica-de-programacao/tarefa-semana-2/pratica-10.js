function obterMaior(numero1, numero2, numero3) {

    if (numero1 === numero2 && numero2 === numero3) {
        console.log(`Os números digitados foram iguais, portando será exibido somente um deles : ${numero1}`)
    } else if (numero1 > numero2 && numero1 > numero3) {
        console.log(`O número ${numero1} foi o maior digitado, portanto somente ele será exibido : ${numero1}`)
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log(`O número ${numero2} foi o maior digitado, portanto somente ele será exibido : ${numero2}`)
    } else if (numero3 > numero1 && numero3 > numero2) {
        console.log(`O número ${numero3} foi o maior digitado, portanto somente ele será exibido : ${numero3}`)
    } else if (numero1 > numero2 && numero1 >= numero3) {
        console.log(`Há 2 números iguais maiores, portanto somente será exibido um deles :  ${numero1}`)
    } else if (numero2 > numero1 && numero2 >= numero3) {
        console.log(`Há 2 números iguais maiores, portanto somente será exibido um deles :  ${numero2}`)
    } else if (numero3 > numero1 && numero3 >= numero2) {
        console.log(`Há 2 números iguais maiores, portanto somente será exibido um deles :  ${numero3}`)
    } else if (numero1 >= numero2 && numero1 > numero3) {
        console.log(`Há 2 números iguais maiores, portanto somente será exibido um deles :  ${numero1}`)
    } else if (numero2 >= numero1 && numero2 > numero3) {
        console.log(`Há 2 números iguais maiores, portanto somente será exibido um deles :  ${numero2}`)
    } else if (numero3 >= numero1 && numero3 > numero2) {
        console.log(`Há 2 números iguais maiores, portanto somente será exibido um deles :  ${numero3}`)

    }
}

obterMaior(1,2,3);
obterMaior(1,1,1);
obterMaior(4,2,3);
obterMaior(2,5,3);
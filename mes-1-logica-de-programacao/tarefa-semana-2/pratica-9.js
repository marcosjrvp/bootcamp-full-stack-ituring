const obterMaior = function(numero1 , numero2){

    if(numero1 === numero2){

        resultado = console.log(`Os números digitados foram iguais, portando será exibido somente um deles : ${numero1}`);
        return resultado;
    }else if(numero1 > numero2){

        resultado = console.log(`O número ${numero1} foi o maior digitado, portanto somente ele será exibido : ${numero1}`);
        return resultado;
    }else{
        resultado = console.log(`O número ${numero2} foi o maior digitado, portanto somente ele será exibido : ${numero2}`);
        return resultado;
    }
}

obterMaior()
function recebaNumeros(num){

    if(num == 1){
        resultado = console.log('Segunda-feira');
        return resultado;
    }else if(num == 2){
        resultado = console.log('Terça-feira');
        return resultado;
    }else if(num == 3){
        resultado = console.log('Quarta-feira');
        return resultado;
    }else if(num == 4){
        resultado = console.log('Quinta-feira');
        return resultado;
    }else if(num == 5){
        resultado = console.log('Sexta-feira');
        return resultado;
    }else if(num == 6){
        resultado = console.log('Sábado')
        return resultado;
    }else if(num == 7){
        resultado = console.log('Domingo')
        return resultado;
    }else{
        resultado = console.log(`O número${num} não é válido para o dia da semana`)
    }
}

recebaNumeros()
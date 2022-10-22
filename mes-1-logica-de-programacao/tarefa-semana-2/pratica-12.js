function recebaNumeros(num){

    if(num == 1){
        return'Segunda-feira';
        
    }else if(num == 2){
        return 'Terça-feira';
        
    }else if(num == 3){
        return'Quarta-feira';
        
    }else if(num == 4){
        return 'Quinta-feira';
        
    }else if(num == 5){
        return 'Sexta-feira';
        
    }else if(num == 6){
        return 'Sábado';
        
    }else if(num == 7){
        return 'Domingo';
        
    }else{
        console.log(`O número ${num} não é válido para o dia da semana`)
    }
}

console.log(recebaNumeros(1));
console.log(recebaNumeros(2));
console.log(recebaNumeros(3));
console.log(recebaNumeros(4));
console.log(recebaNumeros(5));
console.log(recebaNumeros(6));
console.log(recebaNumeros(7));
console.log(recebaNumeros(8));
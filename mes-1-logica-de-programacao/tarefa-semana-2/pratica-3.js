function exibirNumeroAleatorio(){
    
    const min = 0;
    const max = 10000;
    
  
    const numero = Math.floor(Math.random() * (max - min) + min); 

    return numero;
}

console.log(exibirNumeroAleatorio());






/* outra opção : 

function exibirNumeroAleatorio(){
    
    
  
    const numero = Math.floor(Math.random() * (10000 + 1)); // foi feita a soma com o número 1, para dar a    possibilidade de cair o número 10000.

    return numero; */
const verificarMenor = function(num1 , num2){

    const menor = num1 < num2 ? num1 : num2;
    let resultado;

    resultado = console.log(`O menor número digitado é ${menor}`);

    return resultado;
}

verificarMenor(4,5);
verificarMenor(8,2);
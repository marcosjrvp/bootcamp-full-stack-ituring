function calcularImc(peso, altura) {

    const imc = peso / (altura * altura);

    return imc;
}

function verificarResultadoImc() {

    let imc = calcularImc()
    let resultado;

    if (imc < 18.5) {

        resultado = console.log('Abaixo do peso');
    } else if (imc <= 25) {

        resultado = console.log('Peso normal');
    } else if (imc <= 30) {

        resultado = console.log('Sobrepeso');
    } else if(imc > 30) {

        resultado = console.log('Obesidade')
    }

    return resultado;
}

verificarResultadoImc()
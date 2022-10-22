const calcularImc = (peso, altura) =>{

    const imc = peso / (altura * altura);
    let resultado;
    
    if(imc < 18.5){

        resultado = console.log(`Abaixo do peso, seu IMC foi de ${imc.toFixed(2)}`);
    }else if(imc <= 25){

        resultado = console.log(`Peso normal, seu IMC foi de ${imc.toFixed(2)}`);
    }else if(imc <= 30){

        resultado = console.log(`Sobrepeso, seu IMC foi de ${imc.toFixed(2)}`);
    }else if(imc > 30){

        resultado = console.log(`Obesidade, seu IMC foi de ${imc.toFixed(2)}`)
    }
     
    return resultado;
}

calcularImc(70, 1.80);
calcularImc(100, 1.50);
calcularImc(50, 1.90);
calcularImc(92, 1.90);
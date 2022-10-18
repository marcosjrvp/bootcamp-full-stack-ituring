const calcularImc = (peso, altura) =>{

    const imc = peso / (altura * altura);
    let resultado;
    
    if(imc < 18.5){

        resultado = console.log(`Abaixo do peso, seu IMC foi de ${imc.toFixed(2)}`);
    }else if(imc <= 25){

        resultado = console.log(`Peso normal, seu IMC foi de ${imc.toFixed(2)}`);
    }else if(imc <= 30){

        resultado = console.log(`Sobrepeso, seu IMC foi de ${imc.toFixed(2)}`);
    }else{

        resultado = console.log(`Obesidade, seu IMC foi de ${imc.toFixed(2)}`)
    }
     
    return resultado;
}

calcularImc()
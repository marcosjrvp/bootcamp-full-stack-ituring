const listaNumeros = [4, 9, 16, 25, 36, 49];

const numeroQuadrado = listaNumeros => {

    let listaQuadrado = listaNumeros.map(item => Math.sqrt(item));
    return listaQuadrado;
}

console.log(numeroQuadrado(listaNumeros));
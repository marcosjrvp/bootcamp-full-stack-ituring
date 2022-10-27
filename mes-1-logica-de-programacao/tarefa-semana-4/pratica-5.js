const listaNumeros = [4, 9, 7, 1, 8, 12];

const listaCrescente = (listaNumeros =>{

    let listaOrdenada = listaNumeros.sort( (a,b) => a-b);

    return listaOrdenada;
});

console.log(listaCrescente(listaNumeros));
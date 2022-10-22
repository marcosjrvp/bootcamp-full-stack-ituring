let listaNumeros = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824];

function ordenarCrescente(listaNumeros){
    for(let i=0; i < listaNumeros.length; i++){
        for(let j= i+1; j < listaNumeros.length; j++){
            if(listaNumeros[i] > listaNumeros[j]){
                let aux = listaNumeros[i];
                listaNumeros[i] = listaNumeros[j];
                listaNumeros[j] = aux;
            }
        }
    }  return listaNumeros;  
}

console.log(ordenarCrescente(listaNumeros));

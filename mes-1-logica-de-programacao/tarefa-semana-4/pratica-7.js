let utensilio = {
    marca: 'Tramontina' ,
    produto: 'Jogo de Talheres' , 
    preco: 500 ,
    quantidade: 132 ,
    categoria: 'Utensilios domésticos'
}

const listarChaves = (objeto => Object.keys(objeto));

console.log(listarChaves(utensilio));
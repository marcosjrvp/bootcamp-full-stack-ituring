const receberCor = (cor) => {
       
    switch (cor) {
        case "vermelha":
            return "rgb(255,0,0)"
        case "laranja":
            return "rgb(255,128,0)"
        case "amarela":
            return "rgb(255,255,0)"
        case "verde":
            return "rgb(0,255,0)"
        case "azul claro":
            return "rgb(0,255,255)"
        case "azul marinho":
            return "rgb(0,0,255)"
        case "rosa":
            return "rgb(255,0,255)"
        default:
            return "rgb(255,255,255)"
    }
}

console.log(receberCor('vermelha'));
console.log(receberCor('laranja'));
console.log(receberCor('amarela'));
console.log(receberCor('verde'));
console.log(receberCor('azul claro'));
console.log(receberCor('azul marinho'));
console.log(receberCor('rosa'));
console.log(receberCor('preto'));
function calcularPrecoComDesconto(valorProduto, porcentoDesconto){

    const valorDoDesconto = (valorProduto * porcentoDesconto) / 100;
    const valorProdutoComDesconto = valorProduto - valorDoDesconto;

    return valorProdutoComDesconto.toFixed(2);
}

console.log(calcularPrecoComDesconto(100, 10));


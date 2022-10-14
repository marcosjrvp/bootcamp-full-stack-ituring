const calculoPrecoComDesconto = function(valorProduto, porcentoDesconto){

    const valorDoDesconto = (valorProduto * porcentoDesconto) / 100;
    const valorProdutoComDesconto = valorProduto - valorDoDesconto;

    return valorProdutoComDesconto.toFixed(2);
}

console.log(calculoPrecoComDesconto(100, 10));
 
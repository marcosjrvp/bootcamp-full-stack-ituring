let listaSaldo = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
}];

function atribuirObjetoData(listaSaldo) {

    for (let i = 0; i < listaSaldo.length; i++) {
        listaSaldo[i].dataMovimentacao = new Date(listaSaldo[i].dataMovimentacao);
    }
    return listaSaldo;
}

function ordenarPorData(listaSaldo) {

    const listaOrdenada = atribuirObjetoData(listaSaldo).sort((a, b) => b.dataMovimentacao.getTime() - a.dataMovimentacao.getTime());

    return listaOrdenada;
}

console.log(ordenarPorData(listaSaldo));


/* Fazendo com o método map ( Outra solução)

function atribuirData(listaSaldo) {
    let novalista = listaSaldo.map(item => {

        return item.dataMovimentacao = new Date(item.dataMovimentacao);
    });

    return novalista = listaSaldo.sort((a, b) => b.dataMovimentacao.getTime() - a.dataMovimentacao.getTime());
}

console.log(atribuirData(listaSaldo)); */

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
  
  function exibirTotalRetirada(listaSaldo){
    let somaRetiradas = 0;

    for(let i=0; i < listaSaldo.length; i++){
        if(listaSaldo[i].movimentacao === 'retirada'){
            somaRetiradas += listaSaldo[i].valor;
        }
    }
    return somaRetiradas;
  }

  function calcularNumerosRetiradas(listaSaldo){
    let totalRetiradas = 0;

    for(let i=0; i < listaSaldo.length; i++){
        if(listaSaldo[i].movimentacao === 'retirada'){
            totalRetiradas++;
        }
    }
    return totalRetiradas;
  }

  function calcularNumerosDepositos(listaSaldo){
    let totalDepositos = 0;

    for(let i=0; i < listaSaldo.length; i++){
        if(listaSaldo[i].movimentacao === 'deposito'){
            totalDepositos++;
        }
    }
    return totalDepositos;
  }

  function exibirTotalDepositos(listaSaldo){
    let somaDepositos = 0;

    for(let i=0; i < listaSaldo.length; i++){
        if(listaSaldo[i].movimentacao === 'deposito'){
            somaDepositos += listaSaldo[i].valor;
        }
    }
    return somaDepositos;
  }

  function exibirSaldoFinal(listaSaldo){

     let saldoFinal = 0;

     return  saldoFinal = exibirTotalDepositos(listaSaldo) - exibirTotalRetirada(listaSaldo);
  }

  function exibirMensagem(listaSaldo){

    let mensagem = exibirSaldoFinal(listaSaldo) > 0 ? console.log('O saldo final da sua conta foi positivo no valor de ' +exibirSaldoFinal(listaSaldo)) : console.log('O saldo final da sua conta foi negativo no valor de ' + exibirSaldoFinal(listaSaldo));

    return mensagem;
  }

  function exibirExtratoFinal(listaSaldo){

    console.log('Total de depóstios : ' +calcularNumerosDepositos(listaSaldo));
    console.log('Total de retiradas : ' +calcularNumerosRetiradas(listaSaldo));
    console.log(' O valor total de depósitos foi de R$ '+exibirTotalDepositos(listaSaldo));
    console.log(' O valor total de retirada foi de R$ ' +exibirTotalRetirada(listaSaldo));
    exibirMensagem(listaSaldo);
  }


  exibirExtratoFinal(listaSaldo);
  
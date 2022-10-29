let listaQualidade = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

function calcularTotalNotas(listaQualidade){

    let totalNotas = 0;

    for(let i=0; i < listaQualidade.avaliacoes.length; i++){
        totalNotas += listaQualidade.avaliacoes[i].nota;
    }
    return totalNotas.toFixed(2);
}

function calcularQtdNotas(listaQualidade){

    qtdNotas = 0;

    for(let item of listaQualidade.avaliacoes){

        qtdNotas++;
    }
    return qtdNotas;
}

function calcularMediaNotas(listaQualidade){
    
    let mediaNotas = 0;
    mediaNotas = calcularTotalNotas(listaQualidade) / calcularQtdNotas(listaQualidade);

    return mediaNotas;
    
}

const exibirMensagem = listaQualidade => console.log('A média de avaliações do restaurante Ituring Gourmet foi de '+calcularMediaNotas(listaQualidade));


exibirMensagem(listaQualidade);
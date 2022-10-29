let carros = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
  },
  {
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
  },
  {
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
  }];


  const caluclarCarroMaisProximo = (carros =>{
    let carroMaisProximo = '';  
    let carrosOrdenados = carros.sort((a,b) => a.tempoEstimado - b.tempoEstimado);
    carroMaisProximo = carrosOrdenados[0];
    return carroMaisProximo;
   
  });

  function exibirMensagem(carros){

    let carroMaisProximo = caluclarCarroMaisProximo(carros);

    console.log(`${carroMaisProximo.motorista} está a caminho com o carro ${carroMaisProximo.veiculo} de placa ${carroMaisProximo.placa}. Chega em ${carroMaisProximo.tempoEstimado} minutos.`)
  }

  exibirMensagem(carros);
  


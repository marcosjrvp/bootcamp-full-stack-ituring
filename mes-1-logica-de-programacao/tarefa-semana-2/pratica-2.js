function exibirNomeComprador(nomeComprador){

    console.log(`Olá ${nomeComprador} !`);
}

exibirNomeComprador('Marcos')

function exibirInfoProdutoEntregue(nomeProd, nomeReceProd , endeEntrega){

    console.log(`Fizemos a entrega do produto ${nomeProd} no endereço ${endeEntrega} com sucesso.`)
    console.log(`O seu produto foi recebido por : ${nomeReceProd}.`)
    console.log(`Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias pra que possamos ajudar.`)
}

exibirInfoProdutoEntregue('Playstation 5' , 'Junior', 'Rio de Janeiro')

function exibirNomeEmail(nomeEmail){

    console.log(`Antenciosamente,
                 ${nomeEmail}`)
}

exibirNomeEmail('Pedro')
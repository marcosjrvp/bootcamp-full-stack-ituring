function traduzirHelloWorld(idioma) {

    if (idioma == 'es') {
        console.log('Hola Mundo!')
    } else if (idioma == 'en') {
        console.log('Hello World!')
    } else if (idioma == 'pt' || idioma == null) {
        console.log('Olá Mundo!')
    } else {
        console.log('Só aceitamos os idiomas espanhol (es), português (pt) e inglês (en) ou sem  nenhum idioma')
    }

}

console.log(traduzirHelloWorld())
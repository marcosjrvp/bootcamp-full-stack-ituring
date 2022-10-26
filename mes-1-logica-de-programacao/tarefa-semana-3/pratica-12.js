const listaPessoas = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"];

function dividirLista(listaPessoas, corte) {
    let novaLista = [];
    const qtdGrupos = parseInt(listaPessoas.length / corte);


    for (let i = 0; i < qtdGrupos; i++) {
        novaLista.push(listaPessoas.slice(i * corte, i * corte + corte))
    }
    if (listaPessoas.length % 2 != 0) {
        novaLista[novaLista.length - 1].push(listaPessoas[listaPessoas.length - 1]);


    }
    return novaLista;
}


console.log(dividirLista(listaPessoas, 2));







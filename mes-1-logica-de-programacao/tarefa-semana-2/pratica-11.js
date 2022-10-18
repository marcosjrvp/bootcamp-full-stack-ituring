const receberCor = (cor) => {

    if(cor == 'vermelha'){
       resultado = console.log(`A cor digitada foi ${cor} -> "rgb(255,0,0)"`);
       return resultado;
    }else if(cor == 'laranja'){
        resultado = console.log(`A cor digitada foi ${cor} -> "rgb(255,128,0)"`);
        return resultado;
    }else if(cor == 'amarela'){
        resultado = console.log(`A cor digitada foi ${cor} -> "rgb(255,255,0)"`);
        return resultado;
    }else if(cor == 'verde'){
        resultado = console.log(`A cor digitada foi ${cor} -> "rgb( ,255, )"`);
        return resultado;
    }else if(cor == 'azul claro'){
        resultado = console.log(`A cor digitada foi ${cor} -> "rgb(0,255,255)"`);
        return resultado;
    }else if(cor == 'azul marinho'){
        resultado = console.log(`cor digitada foi ${cor} -> "rgb(0,0,255)"`);
        return resultado;
    }else if(cor == 'rosa'){
       resultado = console.log(`A cor digitada foi ${cor} -> "rgb(255,0,255)"`);
       return resultado;
    }else{
        resultado = console.log(`Você não digitou as cores cadastradas, por isso será exibido o valor padrão : "rgb(255,255,0)" `);
        return resultado;
    }
}

receberCor()
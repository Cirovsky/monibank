export default function verificaNome(nome) {
    if (temNumero(nome)) {
        return false;
    } else {
        return true;
    }
}

function temNumero(nome) {
    const arrayNome = nome.split("");
    let temNumero = false;
    arrayNome.forEach(letra => {
        console.log(parseInt(letra));
        if (Number.isInteger(parseInt(letra))) {
            temNumero = true;
            console.log(letra);
        }
    });
    console.log(temNumero);
    return temNumero;
}
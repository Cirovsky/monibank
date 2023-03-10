export default function verificaCpf(cpf) {
    if (cpf.length == 11 || cpf.length == 14) {
        if (cpf.length == 14) {
            const checaNumero = cpf.split(".").join("");
            const checaDigito = checaNumero.split("-").join("");
            if (checarNumero(checaDigito)) {
                console.log("o número é um inteiro válido");
                checarValidadeCpf(checaDigito);
            }
        } else {
            if (checarNumero(cpf)) {
                console.log("o número é um inteiro válido");
                checarValidadeCpf(cpf);
            }
        }
    } else {
        console.log("cpf inválido, tente novamente.")
    }
}

const checarNumero = (cpf) => {
    if (!Number.isNaN(parseInt(cpf))) {
        return true;
    };
    return false;
}

const checarValidadeCpf = (cpf) => {
    const nCpf = cpf.split("");
    const igual = nCpf.reduce( (a,b) => a==b? true : false);
    if (igual) {
        return false;
    } else {
        const restoDivisao1 = checarDigito(nCpf, nCpf[9], 10);
        const restoDivisao2 = checarDigito(nCpf, nCpf[10], 11);
        console.log(restoDivisao1);
        console.log(restoDivisao2);

        if (restoDivisao1 && restoDivisao2) {
            return true;
        } else {
            return false;
        }
    }
}

function checarDigito (array, digito, multi){
    let acc = 0;
    const contador = multi - 1;
    for (let i = 0; i < contador; i++) {
        acc += array[i] * multi;
        multi--;
    }
    let restoDivisao = (acc * 10) % 11;
    restoDivisao = restoDivisao == 10 ? 0 : restoDivisao;
    return restoDivisao == digito;
}
export default function verificaIdade(data) {
    if (data == '') {
        console.log("Por favor, preencha o campo data de nascimento.");
    } else if (data[0] == 0) {
        console.log("ano incorreto, por favor, preecha o ano inteiro, com 4 dígitos.");
    } else {
        const arrayData = data.split('-');
        const dataAtual = new Date();
        const nascimento = new Date(arrayData[0], arrayData[1] - 1, arrayData[2]);
        const idade = dataAtual.getFullYear() - nascimento.getFullYear();
        const aniversarioAno = new Date(dataAtual.getFullYear(), arrayData[1] - 1, arrayData[2]);

        if (idade < 18 || idade == 18 && aniversarioAno.getTime() > dataAtual.getTime()) {
            
            return false;
            /* if (aniversarioAno.getTime() > dataAtual.getTime()) {
                alert(`não podemos fazer uma conta para um bebê de ${idade - 1} anos`);
            } else {
                alert(`Olá jovenzinho, você ainda não tem idade para fazer conta, afinal tem apenas ${idade} anos`);
            } */
        } else {

            return true;
            /* if (aniversarioAno.getTime() > dataAtual.getTime()) {
                console.log(`olá adultinho! você tem ${idade - 1} anos`);
            } else {
                console.log(`olá adultão! você tem ${idade} anos`);
            } */
        }
    }

}
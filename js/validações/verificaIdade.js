export default function verificaIdade(data){
    const arrayData = data.split('-');
    const dataAtual = new Date();
    const nascimento = new Date(arrayData[0], arrayData[1]-1, arrayData[2]);
    const idade = dataAtual.getFullYear() - nascimento.getFullYear();
    const aniversarioAno = new Date(dataAtual.getFullYear(),arrayData[1] -1,arrayData[2]);

    if( idade < 18 || idade == 18 && aniversarioAno.getTime() > dataAtual.getTime()){
        if(aniversarioAno.getTime() > dataAtual.getTime()){
            console.log("aniversário ano: " + aniversarioAno.getMonth())
            console.log(`não podemos fazer uma conta para um bebê de ${idade - 1} anos`)
        }else{
            console.log(`Olá jovenzinho, você ainda não tem idade para fazer conta, afinal tem apenas ${idade} anos`)
        }
    }else{
        if(aniversarioAno.getTime() > dataAtual.getTime()){
            console.log("aniversário ano: " + aniversarioAno.getMonth())
            console.log(`olá adultinho! você tem ${idade - 1} anos`)
        }else{
            console.log(`olá adultão! você tem ${idade} anos`)
        }
    }
}
import verificaNome from "./validações/verificarNome.js";
import verificaIdade from "./validações/verificarIdade.js";
import verificaCpf from "./validações/verificarCpf.js";
import { mensagens } from "./validações/mensagens.js";

const camposDoFormulario = document.querySelectorAll("[required]");
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tipoErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

function mensagemEl(campo, mensagem){
    const elErro = campo.parentElement.querySelector(".mensagem-erro");
    elErro.textContent = mensagem;
}

function verificaCampo(campo) {
    let mensagem = "";
    if (campo.id == "nome") {
        if(!verificaNome(campo.value)){
            campo.setCustomValidity('valor numérico no meio do nome.');
        }
    }
    if (campo.id == "cpf") {
        if(!verificaCpf(campo.value)){
            campo.setCustomValidity('valor do CPF inválido.');
        }
    }
    if (campo.id == "nascimento") {
        if(!verificaIdade(campo.value)){
            campo.setCustomValidity("menor de 18 anos");
        }
    }
    tipoErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const validadorInput = campo.checkValidity();
    if (!validadorInput){
        mensagemEl(campo, mensagem);
    }else{
        mensagemEl(campo, "");
    }
}
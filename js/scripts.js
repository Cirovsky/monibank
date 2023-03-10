import verificaNome from "./validações/verificarNome.js";
import verificaIdade from "./validações/verificarIdade.js";
import verificaCpf from "./validações/verificarCpf.js";
import { mensagens } from "./validações/mensagens.js";

const camposDoFormulario = document.querySelectorAll("[required]");
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const form = document.querySelector("[data-formulario]");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log(evento);
    const listaRespostas = {
        "nome": evento.target.elements["nome"].value,
        "email": evento.target.elements["email"].value,
        "rg": evento.target.elements["rg"].value,
        "cpf": evento.target.elements["cpf"].value,
        "nascimento": evento.target.elements["nascimento"].value,
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    window.location.href = './abrir-conta-form-2.html';
});

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
    console.log(campo.value);
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.id == "nome") {
        if(!verificaNome(campo.value)){
            campo.setCustomValidity('valor numérico no meio do nome.');
        }
    }
    if (campo.id == "cpf") {
        console.log("verifica", verificaCpf(campo.value));
        if(!verificaCpf(campo.value)){
            campo.setCustomValidity('valor do CPF inválido.');
        }
    }
    if (campo.id == "nascimento") {
        console.log(campo.value);
        verificaIdade(campo.value);
        if(!verificaIdade(campo.value)){
            campo.setCustomValidity("menor de 18 anos");
        }
    }
    tipoErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    console.log(campo.id + ":" + mensagem);
    const validadorInput = campo.checkValidity();
    if (!validadorInput){
        mensagemEl(campo, mensagem);
    }else{
        mensagemEl(campo, "");
    }
}
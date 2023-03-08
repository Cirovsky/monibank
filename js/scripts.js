import verificaIdade from "./validações/verificaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificaCampo(campo));
})

function verificaCampo(campo){
    console.log(campo.id);
    switch(campo.id){
        case "nome":
            verificaNome(campo.value);
            break;
        case "email":
            verificaEmail(campo.value);
            break;
        case "rg":
            verificaRg(campo.value);
            break;
        case "cpf":
            verificaCpf(campo.value);
            break;
        case "nascimento":
            verificaIdade(campo.value);
            break;
        case "termos":
            verificaTermos(campo.value);
    }
}
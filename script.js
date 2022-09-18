
let idade = document.querySelector("#idade")
let altura = document.querySelector("#altura")
let peso = document.querySelector("#peso")
let sexo = document.getElementsByName("sexo")
let resultado = document.getElementById("resultado")



function calcular() {

    if (sexo[0].checked) {
        let tmb = Math.ceil((66 + (13.7 * peso.value) + (5 * altura.value) - (6.8 * idade.value)))
        resultado.innerHTML += `<h2> Sua TMB é de: ${tmb} calorias/dia </h2>`
    } if (sexo[1].checked) {
        let tmb = Math.ceil((665 + (9.6 * peso.value) + (1.8 * altura.value) - (4.7 * idade.value)))
        resultado.innerHTML += `<h2> Sua TMB é de: ${tmb} calorias/dia </h2>`
    }
    
}

function reset(){
    sexo[0].checked=false;
    sexo[1].checked=false;
    idade.value=null;
    altura.value=null;
    peso.value=null;
    resultado.innerHTML='';
}


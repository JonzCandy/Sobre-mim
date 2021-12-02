var numeros = ['','','',''];

var primeiro = document.querySelector("#numeroum");
var segundo = document.querySelector("#numerodois");
var terceiro = document.querySelector("#numerotres");
var quarto = document.querySelector("#numeroquatro");

function guardar() {
    numeros[0] = primeiro.value;
    numeros[1] = segundo.value;
    numeros[2] = terceiro.value;
    numeros[3] = quarto.value;

    const exibir = document.getElementById('apresentar');

    exibir.innerHTML += `
    <p>${numeros}</p>
    `
}

function inverter() {
    numeros[3] = primeiro.value;
    numeros[2] = segundo.value;
    numeros[1] = terceiro.value;
    numeros[0] = quarto.value;

    const exibir = document.getElementById('apresentar');

    exibir.innerHTML += `
    <p>${numeros}</p>
    `
}

function ordenar() {
    if((primeiro.value < segundo.value)&&(primeiro.value < terceiro.value)&&(primeiro.value < quarto.value)){
        numeros[0] = primeiro.value;
    }else if(((primeiro.value > segundo.value)&&(primeiro.value < terceiro.value)&&(primeiro.value < quarto.value))||((primeiro.value < segundo.value)&&(primeiro.value > terceiro.value)&&(primeiro.value < quarto.value))||((primeiro.value < segundo.value)&&(primeiro.value < terceiro.value)&&(primeiro.value > quarto.value))){
        numeros[1] = primeiro.value;
    }else if(((primeiro.value > segundo.value)&&(primeiro.value > terceiro.value)&&(primeiro.value < quarto.value))||((primeiro.value > segundo.value)&&(primeiro.value < terceiro.value)&&(primeiro.value > quarto.value))||((primeiro.value < segundo.value)&&(primeiro.value > terceiro.value)&&(primeiro.value > quarto.value))){
        numeros[2] = primeiro.value;
    }else if((primeiro.value > segundo.value)&&(primeiro.value > terceiro.value)&&(primeiro.value > quarto.value)){
        numeros[3] = primeiro.value;
    }

    if((segundo.value < primeiro.value)&&(segundo.value < terceiro.value)&&(segundo.value < quarto.value)){
        numeros[0] = segundo.value;
    }else if(((segundo.value > primeiro.value)&&(segundo.value < terceiro.value)&&(segundo.value < quarto.value))||((segundo.value < primeiro.value)&&(segundo.value > terceiro.value)&&(segundo.value < quarto.value))||((segundo.value < primeiro.value)&&(segundo.value < terceiro.value)&&(segundo.value > quarto.value))){
        numeros[1] = segundo.value;
    }else if(((segundo.value > primeiro.value)&&(segundo.value > terceiro.value)&&(segundo.value < quarto.value))||((segundo.value > primeiro.value)&&(segundo.value < terceiro.value)&&(segundo.value > quarto.value))||((segundo.value < primeiro.value)&&(segundo.value > terceiro.value)&&(segundo.value > quarto.value))){
        numeros[2] = segundo.value;
    }else if((segundo.value > primeiro.value)&&(segundo.value > terceiro.value)&&(segundo.value > quarto.value)){
        numeros[3] = segundo.value;
    }

    if((terceiro.value < primeiro.value)&&(terceiro.value < segundo.value)&&(terceiro.value < quarto.value)){
        numeros[0] = terceiro.value;
    }else if(((terceiro.value > primeiro.value)&&(terceiro.value < segundo.value)&&(terceiro.value < quarto.value))||((terceiro.value < primeiro.value)&&(terceiro.value > segundo.value)&&(terceiro.value < quarto.value))||((terceiro.value < primeiro.value)&&(terceiro.value < segundo.value)&&(terceiro.value > quarto.value))){
        numeros[1] = terceiro.value;
    }else if(((terceiro.value > primeiro.value)&&(terceiro.value > segundo.value)&&(terceiro.value < quarto.value))||((terceiro.value > primeiro.value)&&(terceiro.value < segundo.value)&&(terceiro.value > quarto.value))||((terceiro.value < primeiro.value)&&(terceiro.value > segundo.value)&&(terceiro.value > quarto.value))){
        numeros[2] = terceiro.value;
    }else if((terceiro.value > primeiro.value)&&(terceiro.value > segundo.value)&&(terceiro.value > quarto.value)){
        numeros[3] = terceiro.value;
    }

    if((quarto.value < primeiro.value)&&(quarto.value < segundo.value)&&(quarto.value < terceiro.value)){
        numeros[0] = quarto.value;
    }else if(((quarto.value > primeiro.value)&&(quarto.value < segundo.value)&&(quarto.value < terceiro.value))||((quarto.value < primeiro.value)&&(quarto.value > segundo.value)&&(quarto.value < terceiro.value))||((quarto.value < primeiro.value)&&(quarto.value < segundo.value)&&(quarto.value > terceiro.value))){
        numeros[1] = quarto.value;
    }else if(((quarto.value > primeiro.value)&&(quarto.value > segundo.value)&&(quarto.value < terceiro.value))||((quarto.value > primeiro.value)&&(quarto.value < segundo.value)&&(quarto.value > terceiro.value))||((quarto.value < primeiro.value)&&(quarto.value > segundo.value)&&(quarto.value > terceiro.value))){
        numeros[2] = quarto.value;
    }else if((quarto.value > primeiro.value)&&(quarto.value > segundo.value)&&(quarto.value > terceiro.value)){
        numeros[3] = quarto.value;
    }

    const exibir = document.getElementById('apresentar');

    exibir.innerHTML += `
    <p>${numeros}</p>
    `
}
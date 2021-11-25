//Buttons
function adicionar(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar() {
    var retorne = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = retorne.substring(0, retorne.length -1);
}

function calculo() {
    var calcular = document.getElementById('resultado').innerHTML;
    if(calcular){
        document.getElementById('resultado').innerHTML = eval(calcular);
    }
    else {
        document.getElementById('resultado').innerHTML = "Insira Valores";
    }
}

//Footer
const fillFooter = document.getElementById("fim-pagina");

function fillFooterContent() {
    fillFooter.innerHTML = "<h3>Pagina feita por:</h3><p>Jonz_Candy @2021</p>";
}
fillFooterContent()
function createMultiplier(x) {
    return function (y) {
        return x*y;
    };
} ;

function run() {
    var valor1 = document.getElementById('multiple').value;

    let multiplo = createMultiplier(valor1);

    var valor2 = document.getElementById('multiplicado').value;

    document.getElementById('resultados').innerHTML += ` 
        ${(multiplo(valor2))}
        <br />
    `
};
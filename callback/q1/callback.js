//Defina uma função chamada callback que recebe um argumento e o imprime.
function callme(name) {
    alert('Fala ' + name + ' blz?');
}

function processamentodedados(callback) {
    var name = prompt('Fala tu qual seu nome?');
    callback(name);
}

processamentodedados(callme);

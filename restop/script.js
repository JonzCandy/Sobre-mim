function infinit (...a){
    return a;
};

var array = ["e", "f", "g"];

console.log(infinit("a", "b", ...array, "c", "d", "h", "i", ...array));

/*var array = [];

do {
    array.push(prompt("Oque deseja adicionar?"));

    var resp = prompt("Deseja continuar? s/n");
}while (resp != "n");

function infinit (...arr){
    return arr;
}

console.log(infinit("Olha quanta coisa vem ai", ...array));*/
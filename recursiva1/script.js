var fator = 1;
var numerosfator = '';
var num = parseInt(prompt("Digite um número: "));

function fatorial(x) {
    //base case
    if ((1==num) || (0==num)) {
        return document.getElementById('result').innerHTML += (num+"! = 1");
    }else if (x>num){
        document.getElementById('result').innerHTML += (num+"! = "+numerosfator+" = "+fator);
        return;
    }
    //working
    fator = fator*x;
    if(numerosfator != ''){
        numerosfator += 'x';
    }
    numerosfator += x;
    //recursive, call itself
    fatorial(x+1);
}
fatorial(1);
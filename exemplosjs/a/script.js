var numbers = [];

for (let i = 0; i < 4; i++) {
    numbers.push(parseInt(prompt("insira o valor do parametro")));
}

function multiply(a,b,c,d) {
    return a*b*c*d;
}

console.log(multiply(...numbers));
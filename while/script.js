var cont = 0;
var cont2 = 1;
var cont3 = 0;
const text = document.getElementById("frase");
const times = document.getElementById("quantidade");
var write = document.getElementById("testo");
var map = document.getElementById("quantos");

function iniciat(){
    write.innerHTML = ``;
    map.innerHTML = ``;

    while((cont < times.value)){
        if((cont2 < 12)){
            write.innerHTML += `
                <p>${text.value}</p>
            `;

            cont++;
            cont2++;
        }else{
            write.innerHTML = ``;
            cont + 2;
            cont2 = 1;
            cont3++;
        }
    };

    map.innerHTML += `
        <h3>Ele apagou o quadro ${cont3} vezes</h3>
    `

    cont = 0;
    cont2 = 1;
    cont3 = 0;
};

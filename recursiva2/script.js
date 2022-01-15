var arrayteste = [];

function matrizteste(teste) {
    if (teste.length >= 5) {
        return console.log(teste);
    }

    teste.push(prompt("Adicione algo a matriz"));
    matrizteste(teste);
}

matrizteste(arrayteste);
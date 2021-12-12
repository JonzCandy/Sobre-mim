const carros = {
    popular: {
        "velocidade_maxima": {"min": 180, "max": 200}, 
        "velocidade_minima": {"min": 110, "max": 130}, 
        "derrapagem": {"min": 300, "max": 400}
    },
    sport: {
        "velocidade_maxima": {"min": 195, "max": 215}, 
        "velocidade_minima": {"min": 125, "max": 145}, 
        "derrapagem": {"min": 200, "max": 300}
    },
    supersport: {
        "velocidade_maxima": {"min": 210, "max": 230}, 
        "velocidade_minima": {"min": 140, "max": 160}, 
        "derrapagem": {"min": 100, "max": 175},
    },
};

const chancep = Math.random();
const chancej = Math.random();
const chancee = Math.random();

let carrop;
let carroj;
let carroe;

if(chancep<=0.6){
    carrop = carros.popular;
}else if((chancep>0.6)&&(chancep<=0.95)){
    carrop = carros.sport;
}else{
    carrop = carros.supersport;
};
if(chancej<=0.6){
    carroj = carros.popular;
}else if((chancej>0.6)&&(chancej<=0.95)){
    carroj = carros.sport;
}else{
    carroj = carros.supersport;
};
if(chancee<=0.6){
    carroe = carros.popular;
}else if((chancee>0.6)&&(chancee<=0.95)){
    carroe = carros.sport;
}else{
    carroe = carros.supersport;
};

let veltotalp;
let veltotalj;
let veltotale;

function carrovelminp(min,max) {
    min = Math.ceil(carrop.velocidade_minima.min);
    max = Math.floor(carrop.velocidade_minima.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carrovelmaxp(min,max) {
    min = Math.ceil(carrop.velocidade_maxima.min);
    max = Math.floor(carrop.velocidade_maxima.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carroderrapp(min,max) {
    min = Math.ceil(carrop.derrapagem.min);
    max = Math.floor(carrop.derrapagem.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carrocorrerp(min,max) {
    min = Math.ceil(carrovelminp());
    max = Math.floor(carrovelmaxp());
    return Math.floor(Math.random()*(max - min)+min);
}

function carrovelminj(min,max) {
    min = Math.ceil(carroj.velocidade_minima.min);
    max = Math.floor(carroj.velocidade_minima.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carrovelmaxj(min,max) {
    min = Math.ceil(carroj.velocidade_maxima.min);
    max = Math.floor(carroj.velocidade_maxima.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carroderrapj(min,max) {
    min = Math.ceil(carroj.derrapagem.min);
    max = Math.floor(carroj.derrapagem.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carrocorrerj(min,max) {
    min = Math.ceil(carrovelminj());
    max = Math.floor(carrovelmaxj());
    return Math.floor(Math.random()*(max - min)+min);
}

function carrovelmine(min,max) {
    min = Math.ceil(carroe.velocidade_minima.min);
    max = Math.floor(carroe.velocidade_minima.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carrovelmaxe(min,max) {
    min = Math.ceil(carroe.velocidade_maxima.min);
    max = Math.floor(carroe.velocidade_maxima.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carroderrape(min,max) {
    min = Math.ceil(carroe.derrapagem.min);
    max = Math.floor(carroe.derrapagem.max);
    return Math.floor(Math.random()*(max - min)+min);
};
function carrocorrere(min,max) {
    min = Math.ceil(carrovelmine());
    max = Math.floor(carrovelmaxe());
    return Math.floor(Math.random()*(max - min)+min);
}

let voltas = 0;
let winp = 0;
let winj = 0;
let wine = 0;

function run1() {
    while(voltas<document.getElementById("voltas1").value){
        veltotalp = (carrocorrerp()-((carrocorrerp()*carroderrapp())/10000));
        veltotalj = (carrocorrerj()-((carrocorrerj()*carroderrapj())/10000));
        veltotale = (carrocorrere()-((carrocorrere()*carroderrape())/10000));
        
        if((veltotalp>veltotalj)&&(veltotalp>veltotale)){
            winp++;
        }else if((veltotalj>veltotalp)&&(veltotalj>veltotale)){
            winj++;
        }else if((veltotale>veltotalp)&&(veltotale>veltotalj)){
            wine++;
        }

        voltas++;
    }

    document.getElementById("pedro").innerHTML += `
    <h3>Pedro</h3>
    <p>voltas vencidas</p>${winp}
    `;
    document.getElementById("juca").innerHTML += `
    <h3>Juca</h3>
    <p>voltas vencidas</p>${winj}
    `;
    document.getElementById("edna").innerHTML += `
    <h3>Edna</h3>
    <p>voltas vencidas</p>${wine}
    `;

    if((winp>winj)&&(winp>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>PEDRO</h2>";
    }else if((winj>winp)&&(winj>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>JUCA</h2>";
    }else if((wine>winp)&&(wine>winj)){
        document.getElementById("vencedor").innerHTML = "<h2>EDNA</h2>";
    }else{
        document.getElementById("vencedor").innerHTML = "<h2>ih deu empate</h2>";
    }
}
function run2() {
    while(voltas<document.getElementById("voltas2").value){
        veltotalp = (carrocorrerp()-((carrocorrerp()*carroderrapp())/10000));
        veltotalj = (carrocorrerj()-((carrocorrerj()*carroderrapj())/10000));
        veltotale = (carrocorrere()-((carrocorrere()*carroderrape())/10000));
        
        if((veltotalp>veltotalj)&&(veltotalp>veltotale)){
            winp++;
        }else if((veltotalj>veltotalp)&&(veltotalj>veltotale)){
            winj++;
        }else if((veltotale>veltotalp)&&(veltotale>veltotalj)){
            wine++;
        }

        voltas++;
    }

    document.getElementById("pedro").innerHTML += `
    <h3>Pedro</h3>
    <p>voltas vencidas</p>${winp}
    `;
    document.getElementById("juca").innerHTML += `
    <h3>Juca</h3>
    <p>voltas vencidas</p>${winj}
    `;
    document.getElementById("edna").innerHTML += `
    <h3>Edna</h3>
    <p>voltas vencidas</p>${wine}
    `;

    if((winp>winj)&&(winp>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>PEDRO</h2>";
    }else if((winj>winp)&&(winj>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>JUCA</h2>";
    }else if((wine>winp)&&(wine>winj)){
        document.getElementById("vencedor").innerHTML = "<h2>EDNA</h2>";
    }else{
        document.getElementById("vencedor").innerHTML = "<h2>ih deu empate</h2>";
    }
}
function run3() {
    while(voltas<document.getElementById("voltas3").value){
        veltotalp = (carrocorrerp()-((carrocorrerp()*carroderrapp())/10000));
        veltotalj = (carrocorrerj()-((carrocorrerj()*carroderrapj())/10000));
        veltotale = (carrocorrere()-((carrocorrere()*carroderrape())/10000));
        
        if((veltotalp>veltotalj)&&(veltotalp>veltotale)){
            winp++;
        }else if((veltotalj>veltotalp)&&(veltotalj>veltotale)){
            winj++;
        }else if((veltotale>veltotalp)&&(veltotale>veltotalj)){
            wine++;
        }

        voltas++;
    }

    document.getElementById("pedro").innerHTML += `
    <h3>Pedro</h3>
    <p>voltas vencidas</p>${winp}
    `;
    document.getElementById("juca").innerHTML += `
    <h3>Juca</h3>
    <p>voltas vencidas</p>${winj}
    `;
    document.getElementById("edna").innerHTML += `
    <h3>Edna</h3>
    <p>voltas vencidas</p>${wine}
    `;

    if((winp>winj)&&(winp>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>PEDRO</h2>";
    }else if((winj>winp)&&(winj>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>JUCA</h2>";
    }else if((wine>winp)&&(wine>winj)){
        document.getElementById("vencedor").innerHTML = "<h2>EDNA</h2>";
    }else{
        document.getElementById("vencedor").innerHTML = "<h2>ih deu empate</h2>";
    }
}
function run4() {
    while(voltas<document.getElementById("voltas").value){
        veltotalp = (carrocorrerp()-((carrocorrerp()*carroderrapp())/10000));
        veltotalj = (carrocorrerj()-((carrocorrerj()*carroderrapj())/10000));
        veltotale = (carrocorrere()-((carrocorrere()*carroderrape())/10000));
        
        if((veltotalp>veltotalj)&&(veltotalp>veltotale)){
            winp++;
        }else if((veltotalj>veltotalp)&&(veltotalj>veltotale)){
            winj++;
        }else if((veltotale>veltotalp)&&(veltotale>veltotalj)){
            wine++;
        }

        voltas++;
    }

    document.getElementById("pedro").innerHTML += `
    <h3>Pedro</h3>
    <p>voltas vencidas</p>${winp}
    `;
    document.getElementById("juca").innerHTML += `
    <h3>Juca</h3>
    <p>voltas vencidas</p>${winj}
    `;
    document.getElementById("edna").innerHTML += `
    <h3>Edna</h3>
    <p>voltas vencidas</p>${wine}
    `;

    if((winp>winj)&&(winp>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>PEDRO</h2>";
    }else if((winj>winp)&&(winj>wine)){
        document.getElementById("vencedor").innerHTML = "<h2>JUCA</h2>";
    }else if((wine>winp)&&(wine>winj)){
        document.getElementById("vencedor").innerHTML = "<h2>EDNA</h2>";
    }else{
        document.getElementById("vencedor").innerHTML = "<h2>ih deu empate</h2>";
    }
}

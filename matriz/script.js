var clicks = 1;
var blocks = [
                [document.getElementById("primeiro"),document.getElementById("segundo"),document.getElementById("terceiro")],
                [document.getElementById("quarto"),document.getElementById("quinto"),document.getElementById("sexto")],
                [document.getElementById("setimo"),document.getElementById("oitavo"),document.getElementById("nono")]
            ];

function marcar() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[0][0].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[0][0].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar1() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[0][1].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[0][1].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar2() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[0][2].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[0][2].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar3() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[1][0].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[1][0].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar4() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[1][1].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[1][1].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar5() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[1][2].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[1][2].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar6() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[2][0].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[2][0].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar7() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[2][1].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[2][1].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};
function marcar8() {
    if ((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)) {
        blocks[2][2].innerHTML += `
            <img src="imgs/o.png" alt="marcação o" />
        `
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)) {
        blocks[2][2].innerHTML += `
            <img src="imgs/x.png" alt="marcação x" />
        `
    };
};

function contar() {
    clicks ++;

    if((clicks === 1)||(clicks === 3)||(clicks === 5)||(clicks === 7)||(clicks === 9)){
        if((clicks>5)&&(((blocks[0][0].innerHTML===blocks[1][0].innerHTML)&&(blocks[0][0].innerHTML===blocks[2][0].innerHTML))||((blocks[0][0].innerHTML===blocks[0][1].innerHTML)&&(blocks[0][0].innerHTML===blocks[0][2].innerHTML))||((blocks[0][1].innerHTML===blocks[1][1].innerHTML)&&(blocks[0][1].innerHTML===blocks[2][1].innerHTML))||((blocks[1][0].innerHTML===blocks[1][1].innerHTML)&&(blocks[1][0].innerHTML===blocks[1][2].innerHTML))||((blocks[2][0].innerHTML===blocks[2][1].innerHTML)&&(blocks[2][0].innerHTML===blocks[2][2].innerHTML))||((blocks[0][0].innerHTML===blocks[1][1].innerHTML)&&(blocks[0][0].innerHTML===blocks[2][2].innerHTML))||((blocks[0][2].innerHTML===blocks[1][1].innerHTML)&&(blocks[0][2].innerHTML===blocks[2][0].innerHTML))||((blocks[0][2].innerHTML===blocks[1][2].innerHTML)&&(blocks[0][2].innerHTML===blocks[2][2].innerHTML)))) {
            alert("Vencedor X!\nDa F5");
        }
    }else if((clicks === 2)||(clicks === 4)||(clicks === 6)||(clicks === 8)){
        if((clicks>5)&&(((blocks[0][0].innerHTML===blocks[1][0].innerHTML)&&(blocks[0][0].innerHTML===blocks[2][0].innerHTML))||((blocks[0][0].innerHTML===blocks[0][1].innerHTML)&&(blocks[0][0].innerHTML===blocks[0][2].innerHTML))||((blocks[0][1].innerHTML===blocks[1][1].innerHTML)&&(blocks[0][1].innerHTML===blocks[2][1].innerHTML))||((blocks[1][0].innerHTML===blocks[1][1].innerHTML)&&(blocks[1][0].innerHTML===blocks[1][2].innerHTML))||((blocks[2][0].innerHTML===blocks[2][1].innerHTML)&&(blocks[2][0].innerHTML===blocks[2][2].innerHTML))||((blocks[0][0].innerHTML===blocks[1][1].innerHTML)&&(blocks[0][0].innerHTML===blocks[2][2].innerHTML))||((blocks[0][2].innerHTML===blocks[1][1].innerHTML)&&(blocks[0][2].innerHTML===blocks[2][0].innerHTML))||((blocks[0][2].innerHTML===blocks[1][2].innerHTML)&&(blocks[0][2].innerHTML===blocks[2][2].innerHTML)))) {
            alert("Vencedor O!\nDa F5");
        }
    }else if(clicks===10) {
        alert("empate!\nDa F5");
    };
};

var base = 20;

/*function soma() {
    base++;
    return base;
}

function subtrair() {
    base--;
    return base;
}*/

function zoom(size) {
    return function () {
        document.getElementById('texto').style.fontSize = size + 'px';
    };
}

/*function zoomin() {
    return (soma(), zoom(base));
}

function zoomout() {
    return (subtrair(), zoom(base));
}*/

var zoomin = zoom(base+5);
var zoomout = zoom(base-5);

document.getElementById('ampliar').onclick = zoomin;
document.getElementById('reduzir').onclick = zoomout;
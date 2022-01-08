const min = 1;
const max = 60;

function rool(result) {
    if ((result[0]=result[1])||(result[0]=result[2])||(result[0]=result[3])||(result[0]=result[4])||(result[0]=result[5])) {
        result[0] = Math.floor(Math.random()*(max - min)+min);
    } else if ((result[1]=result[2])||(result[1]=result[3])||(result[1]=result[4])||(result[1]=result[5])) {
        result[1] = Math.floor(Math.random()*(max - min)+min);
    } else if ((result[2]=result[3])||(result[2]=result[4])||(result[2]=result[5])) {
        result[2] = Math.floor(Math.random()*(max - min)+min);
    } else if ((result[3]=result[4])||(result[3]=result[5])) {
        result[3] = Math.floor(Math.random()*(max - min)+min);
    } else if ((result[4]=result[5])) {
        result[4] = Math.floor(Math.random()*(max - min)+min);
    };

    document.getElementById('achimvent').innerHTML = result;
};

function processando(callback) {
    let result = [
        Math.floor(Math.random()*(max - min)+min), 
        Math.floor(Math.random()*(max - min)+min), 
        Math.floor(Math.random()*(max - min)+min), 
        Math.floor(Math.random()*(max - min)+min), 
        Math.floor(Math.random()*(max - min)+min), 
        Math.floor(Math.random()*(max - min)+min)];
    callback(result);
};

processando(rool);
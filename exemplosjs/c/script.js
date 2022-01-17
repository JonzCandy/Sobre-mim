var conjunto = [];

function random(max,min) {
    for (let i = 0; i < 10; i++) {
        conjunto.push(Math.floor(Math.random()*(max-min+1))+min);
    };

    console.log(conjunto);
    console.log(Math.max(...conjunto));
};

console.log(random(100,1));

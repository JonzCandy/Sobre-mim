var write = document.getElementById('tabela');
var contadorclientes = 1;
var clientesinfo = [document.getElementById('nick'), document.getElementById('vali'), document.getElementById('buy')];
var clientes = [];
var oneday;
var diference;
var today = new Date();
const day = 1000*3600*24;

function enviar() {
    clientes.push(
        {nome: clientesinfo[0].value, 
        data: clientesinfo[1].value,
        valor: clientesinfo[2].value,},);
    //clientes.push(document.getElementById("valor"+contadorclientes).innerHTML);

    write.innerHTML += `
        <tr>
            <td>${contadorclientes}</td>
            <td>${clientesinfo[0].value}</td>
            <td id="date${contadorclientes}">${clientesinfo[1].value}</td>
            <td id="valor${contadorclientes}">${clientesinfo[2].value.toLocaleString("pt-BR",{ style : "currency", currency : "BRL"})}</td>
        </tr>
    `;

    contadorclientes ++;
    clientesinfo[0].value = "";
    clientesinfo[1].value = "";
    clientesinfo[2].value = "";
};

function calcular() {
    oneday = new Date(document.getElementById('date'+(contadorclientes-1)).innerHTML);
    diference = (today.getTime()-oneday.getTime()) / day;
    
    if (diference.toFixed(0) < 1) {
        var reajuste = clientes.map(function(item){
            return {
                        nome : item.nome,
                        data: item.data,
                        valor : item.valor*1
                    }
        });
    }else if(diference.toFixed(0) == 1){
        var reajuste = clientes.map(function(item){
            return {
                        nome : item.nome,
                        data: item.data,
                        valor : item.valor*1.02
                    }
        });
    }else if(diference.toFixed(0) > 1){
        var reajuste = clientes.map(function(item){
            return {
                        nome : item.nome,
                        data: item.data,
                        valor : (item.valor*1.02)+(item.valor*diference.toFixed(0)*0.1/100)
                    }
        });
    }

    reajuste.forEach(function(item) {
        document.getElementById('valor'+(contadorclientes-1)).innerHTML = `
            ${item.valor.toLocaleString("pt-BR",{ style : "currency", currency : "BRL"})}
        `;
    })
}

function limpar() {
    write.innerHTML = ``;

    contadorclientes = 1;
}
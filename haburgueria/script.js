function submitForm(){
    var amount = 0.00;

    //Menu
    if(document.getElementById("pao_1").checked) {
        bread = "Francês";
        amount += 3.00; 
    }else if(document.getElementById("pao_2").checked) {
        bread = "Australiano";
        amount += 8.00;
    }else if(document.getElementById("pao_3").checked) {
        bread = "Brioche";
        amount += 6.00;
    }else{
        bread = "Nada Selecionado";
        amount += 0.00;
    }

    if(document.getElementById("hamburguer_1").checked){
        beef = "Picanha";
        amount += 13.00; 
    }else if(document.getElementById("hamburguer_2").checked){
        beef = "Costela";
        amount += 10.00;
    }else if(document.getElementById("hamburguer_3").checked){
        beef = "Vegano";
        amount += 12.00;
    }else{
        beef = "Nada Selecionado";
        amount += 0.00;
    }
    
    if(document.getElementById("salada_1").checked){
        salad = "Alface";
        amount += 1.50; 
    }else if(document.getElementById("salada_2").checked){
        salad = "Tomate";
        amount += 1.50;
    }else if(document.getElementById("salada_3").checked){
        salad = "Sem Salada";
        amount += 0.00;
    }else{
        salad = "Nada Selecionado";
        amount += 0.00;
    }
    
    if(document.getElementById("queijo_1").checked){
        cheese = "Mussarela";
        amount += 3.00; 
    }else if(document.getElementById("queijo_2").checked){
        cheese = "Prato";
        amount += 3.00;
    }else if(document.getElementById("queijo_3").checked){
        cheese = "Cheddar";
        amount += 5.00;
    }else{
        cheese = "Nada Selecionado";
        amount += 0.00;
    }

    //Order
    document.getElementById("comandachef").innerHTML = "<h3>Comanda Chef</h3><p id='parte1'></p><p id='parte2'></p><p id='parte3'></p><p id='parte4'></p><p id='parte5'></p>";
    document.getElementById("parte1").innerHTML = "Pão: " + bread;
    document.getElementById("parte2").innerHTML = "Hambúrguer: " + beef;
    document.getElementById("parte3").innerHTML = "Salada: " + salad;
    document.getElementById("parte4").innerHTML = "Queijo: " + cheese;
    document.getElementById("parte5").innerHTML = "Preço: " + amount;
}

//Footer
const fillFooter = document.getElementById("fim-pagina");

function fillFooterContent() {
    fillFooter.innerHTML = "<h3>Pagina feita por:</h3><p>Jonz_Candy @2021</p>";
}
fillFooterContent()
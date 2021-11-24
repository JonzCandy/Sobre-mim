const starRateImage = document.querySelectorAll('.star');
let clientRate = 0;

//Animation ("By Kanji")
console.log(starRateImage);
[...starRateImage].map(star => {
    star.addEventListener('mouseover', ()=>{
        star.src = "img/Estrela05.png";
    })
    star.addEventListener('mouseout', starChange);
});

function starChange(){
    this.src="img/estrela-fundo-transparente.png";
}
starRateImage[0].onclick = () =>{
    clientRate = 1;
    console.log(clientRate);
}
starRateImage[1].onclick = () =>{
    clientRate = 2;
    console.log(clientRate);
}
starRateImage[2].onclick = () =>{
    clientRate = 3;
    console.log(clientRate);
}
starRateImage[3].onclick = () =>{
    clientRate = 4;
    console.log(clientRate);
}
starRateImage[4].onclick = () =>{
    clientRate = 5;
    console.log(clientRate);
}

//Submission
const submitButton = document.getElementById('confirmar');
const nome = document.getElementById('identificacao');
const comment = document.getElementById('comentario');
const inputForm = document.getElementById('feedbackForm');
const suaavaliacao = document.querySelector('#avaliacao');

submitButton.addEventListener('click', submitForm);

function submitForm(){
    suaavaliacao.innerHTML += `
    <li>
        <p>${nome.value}</p>
        <p>${comment.value}</p>
        <p>
            <img src="img/Estrela05.png" alt="nota" />
            ${clientRate.toString()}
        </p>
    </li>
    `;
    
    nome.value = "";
    comment.value = "";
    clientRate = 0;
}

//Footer
const fillFooter = document.getElementById("fim-pagina");

function fillFooterContent() {
    fillFooter.innerHTML = "<h3>Pagina feita por:</h3><p>Jonz_Candy @2021</p>";
}
fillFooterContent()
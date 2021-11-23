// Header
const fillHeader = document.getElementById("topo-page");

function fillHeaderContent(){
    fillHeader.innerHTML = "<h1>Conheça o Lobinho Brasileiro</h1>";
}
fillHeaderContent()

//Main
const fillSection1 = document.getElementById("mylobin");

function fillSectionContent1(){
    fillSection1.innerHTML = "<h2>Este é o Lobo-Guará</h2><img src='imgs/mylobin.png' alt='um lobo-guara'><p>Nome Cientifico: Chrysocyon brachyurus</p><p>Espécie: Canídeo Endêmico</p><p>Habitat Natural:</p><img src='imgs/habitat.png' alt='habitat lobo-guara'>";
}
fillSectionContent1()

const fillSection2 = document.getElementById("info");

function fillSectionContent2(){
    fillSection2.innerHTML = "<p>O lobo-guará, também conhecido como lobo-de-crina, lobo-vermelho, aguará e aguaraçu, é o maior canídeo da América do Sul. Esse mamífero destaca-se por seus membros longos e finos e pela coloração dos seus pelos, que são laranja-avermelhados em grande parte do seu corpo. O lobo-guará apresenta hábito de vida solitário, sendo encontrado formando casais apenas na época reprodutiva e durante o cuidado parental. Apresenta grande importância ecológica, sendo um importante dispersor de sementes. Importante símbolo do Cerrado, essa espécie hoje sofre com a destruição de seu habitat.</p>";
}
fillSectionContent2()

//Footer
const fillFooter = document.getElementById("fim-pagina");

function fillFooterContent() {
    fillFooter.innerHTML = "<h3>Referencias pra olhar</h3><a href='https://brasilescola.uol.com.br/animais/lobo-guara.htm' target='_blank'>Brasil Escola</a><br /><a href='https://www.youtube.com/watch?v=9chRMO_JcXU' target='_blank'>Youtube</a><br /><a href='https://www.todamateria.com.br/lobo-guara/' target='_blank'>Toda Matéria</a><h3>Pagina feita por:</h3><p>Jonz_Candy @2021</p>";
}
fillFooterContent()

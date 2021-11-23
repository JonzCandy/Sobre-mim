// Header
document.querySelector("#topo-page").innerHTML = "Meu Artista Favorito";

//Main-Container

document.querySelector("#nome").innerHTML = "Nome: João Cândido Costa";
document.querySelector("#idade").innerHTML = "Idade: 18 anos | 27/04";
document.querySelector("#localizacao").innerHTML = "Nascido, Criado e Vivido em Salvador";

document.querySelector("#lilnome").innerHTML = "Nome: Montero Lamar Hill";
document.querySelector("#lilidade").innerHTML = "Idade: 22 anos | 09/04";
document.querySelector("#lillocalizacao").innerHTML = "Lithia Springs, Geórgia";

let perfil = document.querySelector("#essesoueu");
perfil.src = "imgs/perfil.jpg";
perfil.alt = "Foto minha";

let lilperfil = document.querySelector("#esseeolil");
lilperfil.src = "imgs/lilperfil.jpg";
lilperfil.alt = "Foto do rapper Lil Nas X";

//Main-INFOS
document.querySelector("#lilinfos").innerHTML = "Montero Lamar Hill nasceu em Lithia Springs, Geórgia, uma pequena cidade fora de Atlanta, em 9 de abril de 1999. O seu nome vem do Mitsubishi Montero. Seus pais se divorciaram quando ele tinha seis anos, e ele se estabeleceu no projeto habitacional Bankhead Courts com sua mãe e avó. Três anos depois, ele foi morar com seu pai, um cantor gospel, ao norte da cidade em Austell, Geórgia. Embora inicialmente relutante em sair, ele mais tarde considerou isso uma decisão importante: 'Há tanta merda acontecendo em Atlanta—se eu tivesse ficado lá, teria caído no meio do grupo errado.' Ele começou 'usando a Internet fortemente bem na época em que os memes começaram a se tornar sua própria forma de entretenimento'; mais ou menos quando tinha treze anos. Ele passou grande parte de sua adolescência sozinho e se voltou para a Internet, particularmente o Twitter, criando memes que mostravam sua sagacidade e conhecimento da cultura pop. Sua adolescência também o viu lutando para se assumir gay; ele rezou para que fosse apenas uma fase, mas por volta dos dezesseis ou dezessete anos ele passou a aceitá-lo. Ele começou a tocar trompete na quarta série. Frequentou a Lithia Springs High School, na qual se formou em 2017. Depois matriculou-se na University of West Georgia, onde se formou em ciência da computação, mas mais tarde desistiu após um ano para seguir uma carreira musical. Durante este tempo, ficou com a sua irmã e sustentou-se com empregos nos restaurantes de Zaxby e no parque de diversão Six Flags Over Georgia. Em setembro de 2019, ele voltou a sua escola para realizar um concerto surpresa"

document.querySelector("#musicas").innerHTML = "4 que amo ouvir!"

let image1 = document.querySelector("#capa1");
image1.src = "imgs/capa1.jpg";
image1.alt = "Capa Industry Baby";
let image2 = document.querySelector("#capa2");
image2.src = "imgs/capa2.jpg";
image2.alt = "Capa Montero";
let image3 = document.querySelector("#capa3");
image3.src = "imgs/capa3.jpg";
image3.alt = "Capa Old Town Road";
let image4 = document.querySelector("#capa4");
image4.src = "imgs/capa4.jpg";
image4.alt = "Capa Holiday";

//Footer
document.querySelector("#quemfez").innerHTML = "Pagina feita por:";
document.querySelector("#fuieuquefiz").innerHTML = "Jonz_Candy @2021";

document.querySelector("#ref").innerHTML = "Links para Consulta";

let ref1 = document.querySelector("#link1");
ref1.href = "https://pt.wikipedia.org/wiki/Lil_Nas_X";
ref1.target = "_blank";
let ref2 = document.querySelector("#link2");
ref2.href = "https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq?si=Q3wlSHMsTPq2p3Nw80HOPw";
ref2.target = "_blank";
let ref3 = document.querySelector("#link3");
ref3.href = "https://www.youtube.com/channel/UC_uMv3bNXwapHl8Dzf2p01Q";
ref3.target = "_blank";
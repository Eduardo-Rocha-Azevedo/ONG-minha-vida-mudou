/*let count = 1;
document.getElementById('radio1').checked = true;


setInterval( function() {

nextImage();
},4000);*/

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

//ANIMAÇAO DO MENU =========================================
window.addEventListener('scroll', function () {
    const header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 100);
});
function menuShow() {
    const menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
}


//ANIMAÇAO DA PAGINA =========================================

const elements = document.querySelectorAll('[data-anima]');
const anamacaoClass = 'animacao';

//faz a animacao
function animaScroll() {
    const topPageWin = window.pageYOffset + ((window.innerHeight * 3) / 4);
    elements.forEach(function (elemento) {
        if (topPageWin > elemento.offsetTop) {
            elemento.classList.add(anamacaoClass);
        } else {
            elemento.classList.remove(anamacaoClass);
        }
    });
}

if (elements.length) {
    window.addEventListener('scroll', function () {
        animaScroll();
    })
}

// Botao do Whatsapp ==================================================================
function showIt2() {
    document.getElementById("msg1").style.visibility = "visible";
}
setTimeout("showIt2()", 5000);
function hiddenIt() {
    document.getElementById("msg1").style.visibility = "hidden";
}

setTimeout("hiddenIt()", 1500); 
function showIt3() { document.getElementById("msg1").style.visibility = "visible";

 } 
setTimeout("showIt3()", 1500);
msg1.onclick = function () { document.getElementById('msg1').style.visibility = "hidden"; 

}; 

function alertW() { document.getElementById("alertWapp").style.visibility = "visible"; } 
setTimeout("alertW()", 15000); 
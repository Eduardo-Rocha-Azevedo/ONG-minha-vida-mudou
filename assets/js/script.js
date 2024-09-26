let count = 1;
document.getElementById('radio1').checked = true;


setInterval( function() {

//nextImage();
},4000);

function nextImage(){
    count++;
    if(count > 5){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}

//ANIMAÇAO DA PAGINA =========================================

const elements = document.querySelectorAll('[data-anima]');
const anamacaoClass = 'animacao';

//faz a animacao
function animaScroll(){
    const topPageWin= window.pageYOffset+((window.innerHeight*3)/4);
    elements.forEach(function(elemento){
        if(topPageWin > elemento.offsetTop){
            elemento.classList.add(anamacaoClass);
        }else{
            elemento.classList.remove(anamacaoClass);
        }
    });
}

if(elements.length) {
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}
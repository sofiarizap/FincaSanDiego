window.addEventListener ('mousemove', function (){
    let animacion = document.getElementById('animado') ;
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 <= tamañoDePantalla){
        animacion.style.animation ='mover 2s ease-out'
    }
})  
,
window.addEventListener ('scroll', function (){
    let animacion = document.getElementById('animado1','animado3') ;
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 < tamañoDePantalla){
        animacion.style.animation ='mover1 1.2s ease-in'
    }
}),
window.addEventListener ('scroll', function (){
    let animacion = document.getElementById('animado2','animado4');
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 <= tamañoDePantalla){
        animacion.style.animation ='mover 1.2s ease-out'
    }
}),
window.addEventListener ('scroll', function () {
    let animacion = document.getElementById('animado3') ;
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 < tamañoDePantalla/4){
        animacion.style.animation ='mover1 1.2s ease-in'
    }
}),
window.addEventListener ('scroll', function (){
    let animacion = document.getElementById('animado4') ;
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 <= tamañoDePantalla/5){
        animacion.style.animation ='mover 1.2s ease-out'
    }
})
    
    
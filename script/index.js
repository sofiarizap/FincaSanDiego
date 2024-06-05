window.addEventListener ('mousemove', function (){
    let animacion = document.getElementById('animado') ;
    let posicionobj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;
    if (posicionobj1 <= tamañoDePantalla){
        animacion.style.animation ='mover 2s ease-out'
    }
});
function cambioDeFotos() {
    let i = 1;
    let fotos = document.querySelector(".carimg");
    while (i <= 5) {
        this.esperaPorMs(3000);
        for (let j = 1; j > 0; j -= 0.1) {
            this.esperaPorMs(25);
            fotos.style.opacity = `${j}`;
        }
        fotos.style.backgroundImage = `url(../web/assets/Imagenes/banner${i}.jpg)`
        // if(i == 0){
        //     fotos.style.backgroundImage = `url(../web/assets/Imagenes/banner${i}.jpg)`
        // }
        // else{
        //     fotos.style.backgroundImage = `url(../web/assets/Imagenes/foto${i}.jpeg)`
        // }
        for (let j = 0; j < 1; j += 0.1) {
            fotos.style.opacity = `${j}`;
            this.esperaPorMs(25);
        }
        i++;
        if (i == 6) {
            i = 0;
        }
    }
}  

    
    
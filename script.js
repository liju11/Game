var spieler = document.querySelector('.player')
spieler.style.left = '0px'

var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

function loop() {
    backgroundPosition = backgroundPosition + 5;
    spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;
    
    if(keyboard(39)) {
        spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'
    }
    if(keyboard(37)) {
        spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'
    }
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
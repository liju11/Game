var spieler = document.querySelector('.player')
spieler.style.left = '0px'

function loop() {
    if(keyboard(39)) {
        spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'
    }
    if(keyboard(37)) {
        spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'
    }
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
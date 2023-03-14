var spieler = document.querySelector('.player')

function loop() {
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
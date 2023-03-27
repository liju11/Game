var spieler = document.querySelector('.player')
spieler.style.left = '0px'

var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

var timer = new Timer(30)


function loop() {
    // Background-Scrolling:
    backgroundPosition = backgroundPosition + 2;
    spielfeld.style.backgroundPosition = `0 -${backgroundPosition}px`;

    // Tastatursteuerung links-rechts:
    if(keyboard(39)) {
        spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'
    }
    if(keyboard(37)) {
        spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'
    }

    // Hindernis - Stein:
    if(timer.ready()) {
        var h = document.createElement('div')
        h.classList.add('stein')
        h.style.top = '0px'
        h.style.left = '100px'
        spielfeld.appendChild(h)
    }

    var steine = document.querySelectorAll('.stein')
    for(var stein of steine) {
        stein.style.top = parseInt(stein.style.top) + 5 + 'px'
        if(parseInt(stein.style.top) > 400) {
            stein.parentNode.removeChild(stein)
        }
    }

    // Hindernis - Tor Blau:
    if(timer.ready()) {
        var b = document.createElement('div')
        b.classList.add('tor1')
        b.style.top = '0px'
        b.style.left = '100px'
        spielfeld.appendChild(b)
    }

    var tore1 = document.querySelectorAll('.tor1')
    for(var tor1 of tore1) {
        tor1.style.top = parseInt(tor1.style.top) + 5 + 'px'
        if(parseInt(tor1.style.top) > 400) {
            tor1.parentNode.removeChild(tor1)
        }
    }

    // Hindernis - Tor Rot:
    if(timer.ready()) {
        var r = document.createElement('div')
        r.classList.add('tor1')
        r.style.top = '0px'
        r.style.left = '100px'
        spielfeld.appendChild(r)
    }

    var tore2 = document.querySelectorAll('.tor2')
    for(var tor2 of tore2) {
        tor2.style.top = parseInt(tor2.style.top) + 5 + 'px'
        if(parseInt(tor2.style.top) > 400) {
            tor2.parentNode.removeChild(tor2)
        }
    }

    // Kollision mit Tor oder Stein:
    /*if(anyCollision(spieler, [tore1, tore2, stein])) {
        alert("Game over!")
        return
    }

    var collisions = allCollisions(spieler, [tore1, tore2, stein])
    for(var collision of collisions) {
        collision.parentNode.removeChild(collision)
    }*/


    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
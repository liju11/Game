var spieler = document.querySelector('.player')
var rand = document.querySelector('.rand')
spieler.style.left = '380px'

var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

var timer_b = new Timer(240)
var timer_r = new Timer(480)
var timer_stein = new Timer(240)
var timer_stern = new Timer(360)



function loop() {
    // Background-Scrolling:
    backgroundPosition = backgroundPosition + 2;
    spielfeld.style.backgroundPosition = `0 -${backgroundPosition}px`;

    // Tastatursteuerung links-rechts:
    if(keyboard(39)) {
        spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'
        spieler.classList.remove('player_left')
    }

    if(keyboard(37)) {
        spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'
        spieler.classList.add('player_left')
    }

    // Hindernis - Stein:
   if(timer_stein.ready()) {
        var s = document.createElement('img')
        s.src="Bilder/Stein.png"
        s.classList.add('stein')
        s.style.top = document.body.clientHeight + "px"
        s.style.left = 25 + Math.random () * 50 + 'vw'
        spielfeld.appendChild(s)
    }

    var steine = document.querySelectorAll('.stein')
    for(var stein of steine) {
        stein.style.top = parseInt(stein.style.top) - 2 + 'px'
        if(parseInt(stein.style.top) < -100) {
            stein.parentNode.removeChild(stein)
        }
    }

    // Hindernis - Tor Blau:
    if(timer_b.ready()) {
        var b = document.createElement('img')
        b.src='Bilder/Tor_blau_rand.png'
        b.classList.add('tor1')
        b.style.top = document.body.clientHeight + "px"
        b.style.left = 30 + Math.random () * 20 + 'vw'
        spielfeld.appendChild(b)
        timer_b = new Timer(480)
    }

    var tore1 = document.querySelectorAll('.tor1')
    for(var tor1 of tore1) {
        tor1.style.top = parseInt(tor1.style.top) - 2 + 'px'
        if(parseInt(tor1.style.top) < -100) {
            tor1.parentNode.removeChild(tor1)
        }
    }

    // Hindernis - Tor Rot:
    if(timer_r.ready()) {
        var r = document.createElement('img')
        r.src='Bilder/Tor_rot.png'
        r.classList.add('tor2')
        r.style.top = document.body.clientHeight + "px"
        r.style.left = 50 + Math.random () * 20 + 'vw'
        spielfeld.appendChild(r)
    }

    var tore2 = document.querySelectorAll('.tor2')
    for(var tor2 of tore2) {
        tor2.style.top = parseInt(tor2.style.top) - 2 + 'px'
        if(parseInt(tor2.style.top) < -100) {
            tor2.parentNode.removeChild(tor2)
        }
    }

     // Hindernis - Stern:
     if(timer_stern.ready()) {
        var w = document.createElement('img')
        w.src='Bilder/Stern.png'
        w.classList.add('stern')
        w.style.top = document.body.clientHeight + "px"
        w.style.left = 50 + Math.random () * 20 + 'vw'
        spielfeld.appendChild(w)
    }

    var sterne = document.querySelectorAll('.stern')
    for(var stern of sterne) {
        stern.style.top = parseInt(stern.style.top) - 2 + 'px'
        if(parseInt(stern.style.top) < -100) {
            stern.parentNode.removeChild(stern)
        }
    }

    // Kollision mit Tor oder Stein:
    if(anyCollision(spieler, tore1) || anyCollision(spieler, tore2) || anyCollision(spieler, steine) || anyCollision(spieler, rand)) {
        alert("Game over!")
        return
    }

    // Kollision mit Stern
    var collisions = allCollisions(spieler, sterne)
    for(var collision of collisions) {
        collision.parentNode.removeChild(collision)
    }


    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
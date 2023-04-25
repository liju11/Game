var spieler = document.querySelector('.player')
var spielerbody = document.querySelector('.playerbody')
var rand = document.querySelector('.rand')
var rand_l = document.querySelector('.rand_links')
spieler.style.left = rand_l.offsetLeft + 50 + 'px'
spielerbody.style.left = rand_l.offsetLeft + 85 + 'px'

var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

var timer_b = new Timer(240)
var timer_r = new Timer(480)
var timer_stein = new Timer(240)
var timer_stern = new Timer(360)
var timer_rand = new Timer(0)



function loop() {
    // Background-Scrolling:
    backgroundPosition = backgroundPosition + 5;
    spielfeld.style.backgroundPosition = `0 -${backgroundPosition}px`;

    // Tastatursteuerung links-rechts:
    if(keyboard(39)) {
        spieler.style.left = parseInt(spieler.style.left) + 10 + 'px'
        spielerbody.style.left = parseInt(spieler.style.left) + 20 + "px"
        spieler.classList.remove('player_left')
        if(keyboard(16)) {
            spieler.style.left = parseInt(spieler.style.left) + 20 + 'px'
            spielerbody.style.left = parseInt(spieler.style.left) + 40 + "px"
            // backgroundPosition = backgroundPosition + 10;
            // spielfeld.style.backgroundPosition = `0 -${backgroundPosition}px`;  
        }
    }

    if(keyboard(37)) {
        spieler.style.left = parseInt(spieler.style.left) - 10 + 'px'
        spielerbody.style.left = parseInt(spieler.style.left) + 30 + "px"
        spieler.classList.add('player_left')
        if(keyboard(16)) {
            spieler.style.left = parseInt(spieler.style.left) - 20 + 'px'
            spielerbody.style.left = parseInt(spieler.style.left) + 60 + "px"
            // backgroundPosition = backgroundPosition + 10;
            // spielfeld.style.backgroundPosition = `0 -${backgroundPosition}px`;     
        }
    }


    // Hindernis - Rand:
    if(timer_rand.ready()) {
        var l = document.createElement('img')
        l.src="Bilder/Rand.png"
        l.classList.add('rand')
    }

    var raender = document.querySelectorAll('.rand')
    for(var rand of raender) {
        rand.style.top = parseInt(rand.style.top) - 5 + 'px'
        if(parseInt(rand.style.top) < -100) {
            rand.parentNode.removeChild(rand)
        }
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
        stein.style.top = parseInt(stein.style.top) - 5 + 'px'
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
        tor1.style.top = parseInt(tor1.style.top) - 5 + 'px'
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
        tor2.style.top = parseInt(tor2.style.top) - 5 + 'px'
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
        stern.style.top = parseInt(stern.style.top) - 5 + 'px'
        if(parseInt(stern.style.top) < -100) {
            stern.parentNode.removeChild(stern)
        }
    }

    // Kollision mit Tor oder Stein:
    if(anyCollision(spielerbody, tore1) || anyCollision(spielerbody, tore2) || anyCollision(spielerbody, steine) || anyCollision(spielerbody, raender)) {
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
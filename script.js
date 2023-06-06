var spieler = document.querySelector('.player')
var spielerbody = document.querySelector('.playerbody')
var rand = document.querySelector('.rand')
var rand_l = document.querySelector('.rand_links')
spieler.style.left = rand_l.offsetLeft + 50 + 'px'
spielerbody.style.left = rand_l.offsetLeft + 85 + 'px'
var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

var punkteAnzeige = document.querySelector('.punkte')
var score = 0

var timer_b = new Timer(200)
var timer_block_b = new Timer(200)
var timer_r = new Timer(400)
var timer_block_r = new Timer(400)
var timer_stein = new Timer(240)
var timer_stern = new Timer(360)
var timer_rand = new Timer(30)
var timer_score = new Timer(15)
var timer_snow = new Timer(Math.random () * 5)
var counter = 0


function loop() {
    //Counter
    counter = counter + 1

    if(counter > (document.body.clientHeight / 5)) {
        spielfeld.style.backgroundImage = "url(Bilder/Test_4.jpg)"

    }

    // Background-Scrolling:
    backgroundPosition = backgroundPosition + 5;
    if(backgroundPosition > 3489.175 / (1080 / document.body.clientHeight)) {
        backgroundPosition = 0
    }
    
    spielfeld.style.backgroundPosition = `center -${backgroundPosition}px`;

    // Tastatursteuerung links-rechts:
    if(keyboard(39)) {
        spieler.style.left = parseInt(spieler.style.left) + 10 + 'px'
        spielerbody.style.left = parseInt(spieler.style.left) + 20 + "px"
        spieler.classList.remove('player_left')
        if(keyboard(16)) {
            spieler.style.left = parseInt(spieler.style.left) + 20 + 'px'
            spielerbody.style.left = parseInt(spieler.style.left) + 40 + "px"
        }
    }

    if(keyboard(37)) {
        spieler.style.left = parseInt(spieler.style.left) - 10 + 'px'
        spielerbody.style.left = parseInt(spieler.style.left) + 30 + "px"
        spieler.classList.add('player_left')
        if(keyboard(16)) {
            spieler.style.left = parseInt(spieler.style.left) - 20 + 'px'
            spielerbody.style.left = parseInt(spieler.style.left) + 60 + "px"   
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
        rand.style.height = parseInt(rand.style.height) + 1 + 'vh'
            rand.style.top = parseInt(rand.style.top) - 1 + 'vh'
        /*if(rand.style.height < 100 + 'vh') {
            
        }*/
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
        b.src='Bilder/Tor_blau.png'
        b.classList.add('tor1')
        b.style.top = document.body.clientHeight + "px"
        b.style.left = 30 + Math.random () * 20 + 'vw'
        spielfeld.appendChild(b)
        timer_b = new Timer(400)
    }

    var tore1 = document.querySelectorAll('.tor1')
    for(var tor1 of tore1) {
        tor1.style.top = parseInt(tor1.style.top) - 5 + 'px'
        if(parseInt(tor1.style.top) < -100) {
            tor1.parentNode.removeChild(tor1)
        }
    }

    if(timer_block_b.ready()) {
        var block_b = document.createElement('div')
        block_b.classList.add('block_blau')
        block_b.style.top = document.body.clientHeight + 50 + 'px'
        block_b.style.left = b.style.left
        spielfeld.appendChild(block_b)
        timer_block_b = new Timer(400)
    }

    var bloecke_b = document.querySelectorAll('.block_blau')
    for(var block_b of bloecke_b) {
        block_b.style.top = parseInt(block_b.style.top) - 5 + 'px'
        if(parseInt(block_b.style.top) < -100) {
            block_b.parentNode.removeChild(block_b)
        }
    }


    // Hindernis - Tor Rot:
    if(timer_r.ready()) {
        var r = document.createElement('img')
        r.src='Bilder/Tor_rot.png'
        r.classList.add('tor2')
        r.style.top = document.body.clientHeight + "px"
        r.style.right = 30 + Math.random () * 20 + 'vw'
        spielfeld.appendChild(r)
    }

    var tore2 = document.querySelectorAll('.tor2')
    for(var tor2 of tore2) {
        tor2.style.top = parseInt(tor2.style.top) - 5 + 'px'
        if(parseInt(tor2.style.top) < -100) {
            tor2.parentNode.removeChild(tor2)
        }
    }

    if(timer_block_r.ready()) {
        var block_r = document.createElement('div')
        block_r.classList.add('block_rot')
        block_r.style.top = document.body.clientHeight + 50 + 'px'
        block_r.style.right = r.style.right
        spielfeld.appendChild(block_r)
    }

    var bloecke_r = document.querySelectorAll('.block_rot')
    for(var block_r of bloecke_r) {
        block_r.style.top = parseInt(block_r.style.top) - 5 + 'px'
        if(parseInt(block_r.style.top) < -100) {
            block_r.parentNode.removeChild(block_r)
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

    // Schneeflocken
    if (score > 150) {
        if(timer_snow.ready()) {
            var s = document.createElement('img')
            s.src ='Bilder/Snowflake.png'
            s.classList.add('snowflake')
            s.style.top = 0
            s.style.left = Math.random () * 100 + 'vw'
            spielfeld.appendChild(s)
        }
    }

    var snowflakes = document.querySelectorAll('.snowflake')
    for(var snowflake of snowflakes) {
        snowflake.style.top = parseInt(snowflake.style.top) + 5 + 'px'
        if(parseInt(snowflake.style.top) < -100) {
            snowflake.parentNode.removeChild(snowflake)
        }
    }

    // Kollision mit Tor oder Stein:
    if(anyCollision(spielerbody, tore1) || anyCollision(spielerbody, tore2) || anyCollision(spielerbody, steine) || anyCollision(spielerbody, raender)) {
        //alert("Game over! Collision.")
        window.localStorage.setItem("score", score)
        window.location.href = 'game_over.html';
        return
    }

    // Tor verpasst
    if(anyCollision(spielerbody, bloecke_b) || anyCollision(spielerbody, bloecke_r)) {
        //alert("Game over! Missed gate.")
        window.localStorage.setItem("score", score)
        window.location.href = 'game_over.html';
        return
    }

    // Score Game Over
        /*if(anyCollision(spielerbody, bloecke_b) || anyCollision(spielerbody, bloecke_r)) {
        var score_gameover = document.createElement('p')
    score_gameover.classList.add('punkte_gameover')
    score_gameover.textContent('Your score was' + score)
    }*/

    // Kollision mit Stern
    var collisions = allCollisions(spieler, sterne)
    for(var collision of collisions) {
        collision.parentNode.removeChild(collision)
    }

    // Punkte
    for(var collision of collisions) {
        score = score + 20
        punkteAnzeige.textContent = score
    }
    if(timer_score.ready()) {
        score = score + 1
        punkteAnzeige.textContent = score
    }


    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)


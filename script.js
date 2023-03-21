var spieler = document.querySelector('.player')
spieler.style.left = '0px'

var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

var timer = new Timer(30)


function loop() {
    // Background-Scrolling:
    backgroundPosition = backgroundPosition + 5;
    spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;

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


    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
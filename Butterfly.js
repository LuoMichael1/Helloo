
let number_butterflys = 22;

//----------- butterflys -------------------
function addButterflys() {
    for (let i = 0; i < number_butterflys; i++) {
        setButterFly(i);
    }
}
function setButterFly(butterID) {
    let time = Math.random()*9;
    let flap = (Math.floor(Math.random()*8))+1;
    let num = (Math.floor(Math.random()*2))+1;

    let size = 0.1 + Math.random()*0.6;     //Governs size of butterflies
    let rota = Math.floor(Math.random()*6);
    let delay = Math.floor(Math.random()*20);

    document.getElementById("butterflys").innerHTML += '<img draggable="false" id=butterfly'+butterID+' class="butterspritesheet" style="--order: '+butterID+'" alt="butterfly" src="butterflyplaceholder.png">';
    document.getElementById("butterfly" + butterID).style.backgroundSize = 1680*size + "px " + 210*size + "px";
    document.getElementById("butterfly" + butterID).style.height = 210*size + "px"
    document.getElementById("butterfly" + butterID).style.width = 210*size-2.2 + "px" // rounding can cause a bit of the next image in the sprite to show, the -2.2 mitigates this
    document.getElementById("butterfly" + butterID).style.backgroundPositionX = "calc(-5px + calc(" + -210*size + "px * var(--f"+flap+")))";
    document.getElementById("butterfly" + butterID).style.rotate = -14+rota+'deg';
    document.getElementById("butterfly" + butterID).style.animation = 'flap'+num + ' 566.66ms linear infinite, move1 1'+time+'s linear infinite -'+delay+"s";
    document.getElementById("butterfly" + butterID).style.opacity = size*1.25;
}

// animating the butterfly spritesheets
let counter = 0;
let numberOfFrames = 8;
let flap = 0;

function movesprite() {
    for (let i = 0; i < numberOfFrames; i++) {
        flap = i+counter; 
        if (flap>7) {
            flap = flap-8;
        }  
    document.getElementById("butterflys").style.setProperty('--f'+(i+1), flap);
}
    counter = counter+1;
    if (counter == 8) {
        counter = 0;
    }
}

function loadbutterfly() {
    addButterflys();

    // roughly 24fps
    setInterval(movesprite, 41.66*0.8);
}


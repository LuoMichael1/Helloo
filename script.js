let window_width = window.innerWidth;
let tile_width;
let number_butterflys = 0;

const butterfly = {
    xpos: 0,
    ypos: 0,

}

function getWidth() {
    console.log(window_width);

    new ResizeObserver(() => {
        window_width = window.innerWidth;
        changeWidth();
    }).observe(document.body)
}



function changeWidth() {    
    tile_width = window_width*0.8;

    if (tile_width > 700) {
        tile_width /= 3;
        tile_width -= 11;
        document.getElementById("renders").style.gridTemplateColumns = tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px';
        document.getElementById("renders").style.gridTemplateAreas = "'" + "a b c' " + "'" + "d e e' " + "'" + "f e e' " + "'" + "f g h' " + "'" + "i j k' " + "'" + "l m k' " + "'" + "n o p' ";

        document.getElementById("renders").style.gridTemplateRows = tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px';
    }
    else {
        tile_width /= 2;
        //tile_width -=;
        document.getElementById("renders").style.gridTemplateColumns = tile_width + 'px ' + tile_width + 'px';
        document.getElementById("renders").style.gridTemplateAreas = "'" + "a b' " + "'" + "c d' " + "'" + "e e' " + "'" + "e e' " + "'" + "f g' " + "'" + "f h' " + "'" + "i k' " + "'" + "j k' " + "'" + "l m' " + "'" + "n o' ";
        
        document.getElementById("renders").style.gridTemplateRows = tile_width + 'px '+ tile_width + 'px '  + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px';
    }
}


function addButterflys() {
    number_butterflys = 15;
    console.log("hello");
    for (let i = 0; i < number_butterflys; i++) {
        let delay = i*1000
        setTimeout(setButterFly(i), delay);
    }
    
}
function setButterFly(butterID) {
    let time = Math.random()*9;
    let size = 30 + Math.random()*100;
    let frame = Math.floor(Math.random()*7);
    let delay = frame*7
    console.log(frame);
    document.getElementById("butterflys").innerHTML += '<img class="test" id="butterfly'+butterID+'" alt="" src="images/butterfly'+frame+'.gif">';
    document.getElementById("butterfly" + butterID).style.width = ''+size+'px';
    document.getElementById("butterfly" + butterID).style.position = 'absolute';
    document.getElementById("butterfly" + butterID).style.rotate = '60deg';
    document.getElementById("butterfly" + butterID).style.animation = 'flap'+butterID+' 566.66ms linear '+delay+"ms"+' infinite, move 1'+time+'s linear infinite';
    document.getElementById("butterfly" + butterID).style.mixBlendMode = 'difference';
}



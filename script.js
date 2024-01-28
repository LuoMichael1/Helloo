let window_width = window.innerWidth;
let tile_width;
let number_butterflys = 15;

function getWidth() {

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
        document.getElementById("renders").style.gridTemplateColumns = tile_width + 'px ' + tile_width + 'px';
        document.getElementById("renders").style.gridTemplateAreas = "'" + "a b' " + "'" + "c d' " + "'" + "e e' " + "'" + "e e' " + "'" + "f g' " + "'" + "f h' " + "'" + "i k' " + "'" + "j k' " + "'" + "l m' " + "'" + "n o' ";
        
        document.getElementById("renders").style.gridTemplateRows = tile_width + 'px '+ tile_width + 'px '  + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px ' + tile_width + 'px';
    }
}


function addButterflys() {
    for (let i = 0; i < number_butterflys; i++) {
        setButterFly(i);
    }
}
function setButterFly(butterID) {
    let time = Math.random()*9;
    let size = 30 + Math.random()*100;
    let frame = Math.floor(Math.random()*7);

    document.getElementById("butterflys").innerHTML += '<img class="butterfly" id="butterfly'+butterID+'" alt="" src="images/butterfly'+frame+'.gif">';
    document.getElementById("butterfly" + butterID).style.width = ''+size+'px';
    document.getElementById("butterfly" + butterID).style.rotate = 60+frame+'deg';
    document.getElementById("butterfly" + butterID).style.animation = 'flap'+butterID+' 566.66ms linear infinite, move 1'+time+'s linear infinite -'+frame+"s";
}



let window_width = window.innerWidth;
let tile_width;

function hello() {
    document.getElementById("test").style.color = "red";
    //getWidth();
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

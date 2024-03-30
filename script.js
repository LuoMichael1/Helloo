let window_width = window.innerWidth;
let tile_width;
let number_butterflys = 17;

let root;
let theme = -1;
let x;

// used for the picture pages where the grid needs to go down to 2 columns if the screen is small and 3 if the screen is wide
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
        document.getElementById("renders").style.gridAutoRows = tile_width + 'px';
        document.getElementById("renders").style.gridTemplateColumns = 'repeat(3, '+ tile_width + 'px)';
    }
    else {
        tile_width /= 2;
        document.getElementById("renders").style.gridAutoRows = tile_width + 'px';
        document.getElementById("renders").style.gridTemplateColumns = 'repeat(2, '+ tile_width + 'px)';
    }
}

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

    let size = 0.2 + Math.random()*0.5;
    let rota = Math.floor(Math.random()*6);
    let delay = Math.floor(Math.random()*20);

    document.getElementById("butterflys").innerHTML += '<img draggable="false" id=butterfly'+butterID+' class="butterspritesheet" style="--order: '+butterID+'" alt="butterfly" src="butterflyplaceholder.png">';
    document.getElementById("butterfly" + butterID).style.backgroundSize = 1680*size + "px " + 210*size + "px";
    document.getElementById("butterfly" + butterID).style.height = 210*size + "px"
    document.getElementById("butterfly" + butterID).style.width = 210*size-2.2 + "px" // rounding can cause a bit of the next image in the sprite to show, the -2.2 mitigates this
    document.getElementById("butterfly" + butterID).style.backgroundPositionX = "calc(-5px + calc(" + -210*size + "px * var(--f"+flap+")))";
    document.getElementById("butterfly" + butterID).style.rotate = -14+rota+'deg';
    document.getElementById("butterfly" + butterID).style.animation = 'flap'+num + ' 566.66ms linear infinite, move1 1'+time+'s linear infinite -'+delay+"s";
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
    setInterval(movesprite, 41.66);
}

// ------------- dark mode and light mode ----------------------
function themeSetup() {
    root = document.querySelector(':root');
    if (localStorage.getItem("theme") == "0") {
        localStorage.setItem("theme", "1")
        changeTheme();
    }
    else {
        localStorage.setItem("theme", "1");
    }
}
function changeTheme() {
    if (localStorage.getItem("theme") == "1") {
        root.style.setProperty('--main-color1', 'rgb(20 20 20)');
        root.style.setProperty('--main-color2', 'rgb(200 200 200)');
        root.style.setProperty('--highlight-color', '#00df89');     
        localStorage.setItem("theme", "0");
    }
    else if (localStorage.getItem("theme") == "0") {
        root.style.setProperty('--main-color1', 'white');
        root.style.setProperty('--main-color2', 'black');
        root.style.setProperty('--highlight-color', '#FF4A80');
        localStorage.setItem("theme", "1");
    }
}

function indexLoad() {
    themeSetup();
    loadbutterfly();
}
function pictureLoad() {
    themeSetup();
    addObservers();
}

//----------- animation for revealing images as the user scrolls down the page ----------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');

            setTimeout(() => {entry.target.classList.remove('reveal'); 
                }, 1000);
        }
    });
});

function addObservers() {
    const hiddenElements = document.querySelectorAll(".content > div");
    hiddenElements.forEach((el) => observer.observe(el));   
}



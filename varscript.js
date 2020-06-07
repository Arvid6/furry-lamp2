const bildman = document.getElementById('bild');
let text = document.getElementById("textbox"),
    level = 1,//variabler för att hålla koll på level respektive boosten
    boost = 0,//var boost används för se till att boosten bara kan användas en gång i sekunden och bara en gång i luften
    boostTime;

const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      width = 1500,
      height = 600;
let player = {//Alla variabler koplade till ens karaktär
        x: width / 2,
        y: 500,
        width: 25,
        height: 27,
        speed: 4,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false,
		img: ctx.createPattern(bildman, "repeat"),
    },
    keys = [];
const friction = 0.8,
      gravity = 0.4;
let boxes = [],
    lowin = [];
    
let h2 = document.getElementsByTagName('h2')[0],
	mseconds = 0, seconds = 0, minutes = 0,
    t;
    
let mc = new Audio('bild/musictunes.mp3'),//Ljudfiler
    mj = new Audio('bild/deathsound.mp3');
    

const start1 = 550, //Startpositionerna för alla banor.
      start2 = 560,
      start3 = 70,
      start4 = 70,
      start5 = 860,
      start6 = 70,
      start7 = 70,
      start8 = 1400,
      start9 = 30;

let timerstart = 0;

//Registerar när tangenterna blir nertryckta och gör respektive tangent true så if satserna i keys.js
document.body.addEventListener("keydown", function (e) { 
    keys[e.keyCode] = true;
});
//gör så att den sedan blir false när man slutar trycka ner tangenten 
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

mj.loop() = false;//Varför den här måste vara här förstår jag inte men den dör om jag sätter den med resten av ljudfilerna :('

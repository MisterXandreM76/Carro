var canvas;
var database
var gameState=0
var playerCount=0
var game1,player1,form1
var allplayers
var distance = 0;
//var 
function preload() {
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game1=new Game()
  game1.getState()
  game1.start()
}

function draw() {
  background("purple");
  if(playerCount===4){
    game1.update(1)
  }
if(gameState===1){
console.log("aqui nos quedamos")
game1.play()
}


}


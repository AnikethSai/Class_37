var canvas;
var gamestate = 0;
var playercount;
var database;
var player,form;
var game;
var allplayers;

function setup(){
 canvas = createCanvas (400,400);
 database = firebase.database();
game = new Game();
game.getState();
game.start();

}

function draw(){
  background("white")

if(playercount === 4 ){
  game.update(1)

}

if(gamestate === 1 ){
  clear()
  game.play();
}

}


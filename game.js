import Player from "./Player.js";

var FPS = 30;
var player;

window.addEventListener("keydown", function (e) {
  if (e.defaultPrevented) {
    return;
  }

  switch(e.code) {
    case "KeyW":
    case "ArrowUp":
      mvUp();
      break;
    
    case "KeyS":
    case "ArrowDown":
      mvDown();
      break;

    case "KeyA":
    case "ArrowLeft":
      mvLeft();
      break;

    case "KeyD":
    case "ArrowRight":
      mvRight();
      break;
  }

  e.preventDefault();

})

window.addEventListener("keyup", function (e) {
  if (e.defaultPrevented) {
    return;
  }

  switch(e.code) {
    case "KeyW":
    case "ArrowUp":  
    case "KeyS":
    case "ArrowDown":
      stopY();
      break;
    case "KeyA":
    case "ArrowLeft":
    case "KeyD":
    case "ArrowRight":
      stopX();
      break;
  }

  e.preventDefault();

})


var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");

upBtn.addEventListener("mousedown", mvUp);
upBtn.addEventListener("mouseup", stopY);

downBtn.addEventListener("mousedown", mvDown);
downBtn.addEventListener("mouseup", stopY);

leftBtn.addEventListener("mousedown", mvLeft);
leftBtn.addEventListener("mouseup", stopX);

rightBtn.addEventListener("mousedown", mvRight);
rightBtn.addEventListener("mouseup", stopX);

var gameArea = {
  c: document.getElementById("c"),
  start: function () {
    this.c.width = 1000;
    this.c.height = 450;
    this.ctx = this.c.getContext("2d");
    this.interval = setInterval(updateGameArea, 1000 / FPS);
  },
  clear: function () {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.c.width, this.c.height);
  },
};

function startGame() {
  player = new Player(0, 0);
  gameArea.start();

  //drops player in
}

function updateGameArea() {
  gameArea.clear();
  player.newPos();
  // if (player.y < (gameArea.c.height - player.height)) {player.y += 10};

  player.update(gameArea.ctx);
}

function mvUp() {
  player.spdY -= 10;
}

function mvDown() {
  player.spdY += 10;
}

function mvLeft() {
  player.spdX -= 15;
}

function mvRight() {
  player.spdX += 15;
}

function stopX() {
  player.spdX = 0;
}

function stopY() {
  player.spdY = 0;
}

startGame();

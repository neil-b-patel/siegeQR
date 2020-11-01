import Player from "./Player.js";

var FPS = 60;
var HEIGHT = 450;
var WIDTH = 1000;
var player;

// ADD LISTENER FOR ANY KEY DOWN, MOVE PLAYER WITH KEYBOARD CONTROLS
window.addEventListener("keydown", function (e) {
  if (e.defaultPrevented) {
    return;
  }

  switch (e.code) {
    case "KeyW":
    case "ArrowUp":
      angleUp();
      break;

    case "KeyS":
    case "ArrowDown":
      angleDown();
      break;

    case "KeyA":
    case "ArrowLeft":
      velocityDown();
      break;

    case "KeyD":
    case "ArrowRight":
      velocityUp();
      break;

    case "Space":
      player.attack();
      break;
  }

  e.preventDefault();
});

// ADD LISTENER FOR ANY KEY UP, STOP MOVING PLAYER WITH KEYBOARD CONTROLS
window.addEventListener("keyup", function (e) {
  if (e.defaultPrevented) {
    return;
  }

  switch (e.code) {
    case "KeyW":
    case "ArrowUp":
    case "KeyS":
    case "ArrowDown":
      resetAngle();
      break;
    case "KeyA":
    case "ArrowLeft":
    case "KeyD":
    case "ArrowRight":
      // resetVelocity();
      break;
  }

  e.preventDefault();
});

// CATCH-ALL VAR FOR GAME
var gameArea = {
  c: document.getElementById("c"),
  start: function () {
    this.c.width = WIDTH;
    this.c.height = HEIGHT;
    this.ctx = this.c.getContext("2d");
    this.interval = setInterval(updateGameArea, 1000 / FPS);
  },
  clear: function () {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.c.width, this.c.height);
  },
};

var spaceBtn = document.getElementById("spaceBtn");
document.getElementById("c").addEventListener("click", function () {
  if (player) {
    player.attack();
  }
});
spaceBtn.addEventListener("click", function() {
  if (player) {
    player.attack();
  }
})



// START GAME
function startGame() {
  gameArea.start();

  // spawn player at bottom left
  player = new Player(0, HEIGHT - HEIGHT / 5);

  // RETRIEVE BUTTONS FROM HTML AND ADD LISTENERS WITH MOVEMENT CALLBACKS
  var upBtn = document.getElementById("upBtn");
  var downBtn = document.getElementById("downBtn");
  var leftBtn = document.getElementById("leftBtn");
  var rightBtn = document.getElementById("rightBtn");

  upBtn.addEventListener("click", angleUp);
  downBtn.addEventListener("click", angleDown);
  leftBtn.addEventListener("click", velocityDown);
  rightBtn.addEventListener("click", velocityUp);
}

// GAME LOOP
function updateGameArea() {
  gameArea.clear();
  angleBar();
  velocityBar();
  // player.newPos();
  // player.drawArc(gameArea.ctx);
  player.updateAtk(gameArea.ctx);
  player.update(gameArea.ctx);
}

// ANGLE FUNCTIONS
function angleUp() {
  player.angle += 5;
  resetAngle();
}

function angleDown() {
  player.angle -= 5;
  resetAngle();
}

function resetAngle() {
  if (player.angle + 5 > 90) {
    player.angle = 90;
  } else if (player.angle - 5 < 0) {
    player.angle = 0;
  }
}

// VELOCITY FUNCTIONS
function velocityUp() {
  if (player.velocity + 1 > 25) {
    player.velocity = 25;
  } else {
    player.velocity += 1;
  }
}

function velocityDown() {
  if (player.velocity - 1 < 0) {
    player.velocity = 0;
  } else {
    player.velocity -= 1;
  }
}

function resetVelocity() {
  player.velocity = 0;
}

// HUD FUNCTIONS
function angleBar() {
  let ctx = gameArea.ctx;
  ctx.fillStyle = "blue";
  ctx.fillRect(100, 0, 250, 30);

  ctx.font = "1.5em Monospace";
  ctx.fillStyle = "white";
  ctx.fillText("ANGLE", 20, WIDTH / 43);
  ctx.fillText("The angle is: " + player.angle, 140, 22);
}

function velocityBar() {
  let ctx = gameArea.ctx;
  ctx.fillStyle = "blue";
  ctx.fillRect(100, 50, 250, 30);

  ctx.font = "1.5em Monospace";
  ctx.fillStyle = "white";
  ctx.fillText("VELOCITY", 5, WIDTH / 14);
  ctx.fillText("The velocity is: " + player.velocity, 120, 72);
}

// EX-MOVEMENT FUNCTIONS
// function mvUp() {
// player.spdY -= 10;
// }
//
// function mvDown() {
// player.spdY += 10;
// }
//
// function mvLeft() {
// player.spdX -= 15;
// }
//
// function mvRight() {
// player.spdX += 15;
// }
//
// function stopX() {
// player.spdX = 0;
// }
//
// function stopY() {
// player.spdY = 0;
// }

startGame();

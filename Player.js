// if enemies collides with tower, -1 lvl height
// if carpenter hired, +1 lvl height every 10s (while < maxHght)
// if height upgrade, +1 maxHght
// at start of lvl, lvlHght = maxHght

// price of height upgrade increases 100x each time

//need to get the canvas object here

const MAX_SPD = 15;

function Player(x, y) {
  this.x = x;
  this.y = y;

  this.spdX = 0;
  this.spdY = 0;

  this.width = c.width / 20;
  this.height = c.height / 5;

  this.lvlHght = 0;
  this.maxHght = 0;

  this.dmg = 1;
  this.spd = 1;
  this.imp = 1;

  this.update = function (ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.lmtSpd();
    this.x += this.spdX;
    this.y += this.spdY;
    this.inBound();
  }
  // limit movement spd to MAX_SPD
  this.lmtSpd = function() {
    if (this.spdX > MAX_SPD) {
      this.spdX = MAX_SPD;
    } else if (this.spdX < -MAX_SPD) {
      this.spdX = -MAX_SPD;
    }
    if (this.spdY > MAX_SPD) {
      this.spdY = MAX_SPD;
    } else if (this.spdY < -MAX_SPD) {
      this.spdY = -MAX_SPD;
    }
  }
  this.inBound = function() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > (c.width - this.width)) {
      this.x = c.width - this.width;
    }
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y > (c.height - this.height)) {
      this.y = c.height - this.height;
    }
  }
}

export {Player as default}

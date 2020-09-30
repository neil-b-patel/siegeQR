// if enemies collides with tower, -1 lvl height
// if carpenter hired, +1 lvl height every 10s (while < maxHght)
// if height upgrade, +1 maxHght
// at start of lvl, lvlHght = maxHght

// price of height upgrade increases 100x each time

//need to get the canvas object here

function Player(x, y) {
  this.x = x;
  this.y = y;

  this.spdX = 0;
  this.spdY = 0;

  this.width = c.width / 10;
  this.height = c.height / 3;

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
    this.x = this.spdX;
    this.y = this.spdY;
  }

 
 
 

}

export {Player as default}

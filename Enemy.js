// need to get the canvas object here

function Enemy(x, y, hp, dmg, spd) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.dmg = dmg;
    this.spd = spd;
    this.update = function() {
        ctx = c.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, c.width/30 + hp/30, c.height/25 + dmg/25);
    }
}
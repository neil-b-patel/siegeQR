// S/O to Stephen R. Schmitt's calculator (convertalot.com/ballistic_trajectory_calculator.html)
// This intersects with trigonometry (math), classical mechanics (physics). 
// Using his notes, we were able to derive the following functions:

// GRAVITY and +/- CHANCE_TO_HIT constants
const g = 9.81;
const chance = 0.5;

// indices for result array returned by calc_traj
const RNG = 0;
const TTL_T = 1;
const UP_T = 2;
const DN_T = 3;
const IMP_SPD = 4;

// based on ballistic trajectory formula:
// y = h + xtan(?) - gx^2/2V_0^2cos^2(?)

// this calculates the impact distance of a projectile to determine if a target is hit
// note: the formula does not account for atmospheric drag
// basically constructs a parabola based on given parameters to approximate the trajectory shape
// from here, we can derive the time and distance to impact and max height of the projectile's arc

function calc_trj(v, a, h) {
    // convert degrees to radians (theta)
    let th = Math.PI * a / 180.0;

    // calc initial horizontal and vertical velocities
    let vX = v * Math.cos(th);
    let vY = v * Math.sin(th);
    
    // calc when vertical velocity becomes 0 to determine time to maximum height
    let upT = vY / g;

    // substitute upT for t in vertical motion equation to calculate max height
    let maxH = h + (vY * upT) - (0.5 * g * (upT ** 2)) ;

    // time from maximum height to impact
    let dnT = Math.sqrt(2 * maxH / g);

    // total flight time
    let t = upT + dnT;

    // the maximum range (distance to impact)
    let r = vX * t;
    
    // projectile speed at impact
    let sI = Math.sqrt(vX ** 2 + (g * dnT) ** 2);
    
    // console.log("upward time: " + upT + "\n");
    // console.log("downward time: " + dnT + "\n");
    // console.log("max height: " + maxH + "\n");
    // console.log("flight time: "  + t + "\n");
    // console.log("range: " + r + "\n");
    // console.log("impact speed: " + sI + "\n");

    return [r, t, upT, dnT, sI];
}

// is_hit(int v, int a, int h, int d)
// Params: 
//  - int velocity: the initial velocity of the projectile (non-negative)
//  - int angle: the initial angle that projectile is fired from (0-90 degrees)
//  - int height: the initial height from the surface/ground (non-negative)
//  - int distance: the initial distance from the projectile to target
// Returns:
//  - (not really) int[] results: the calculate Range, height, and flight time
//  - True if the target is hit, False otherwise

function is_hit(v, a, h, d) {
    let tr = calc_trj(v, a, h);
    
    if (tr[RNG] > (d - 5) && tr[RNG] < (d + 5)) {
        console.log("HIT")
        return true;
    }

    console.log("MISS")
    return false;
}
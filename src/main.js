/**
 * Brady Lin
 * Rocket Patrol Refactor
 * Around 10 hours
 * 
 * Mods Implemented:
 * Ship speed increases after 30 seconds (1 pt)
 * Display time remaining in seconds (3 pt)
 * Timer +5 seconds on (5 pt)
 * New Title Screen (3 pt)
 * Create new special spaceship that's faster, smaller and worth more points (5 pt)
 * 
 */


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}


let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

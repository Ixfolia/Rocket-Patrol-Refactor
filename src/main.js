/**
 * Brady Lin
 * Rocket Patrol Refactor
 * It took around 10 hours to complete
 * 
 * Mods Implemented:
 * Ship speed increases after 30 seconds (1 pt)
 *      Implemented in Play.js within create(). Using delayedCall, checks if 30 seconds has passed. If it has,
 *      increase default ship moveSpeed by 2 pixels and special ship by 4 pixels.
 * Display time remaining in seconds (3 pt)
 *      Initialized text in Play.js. Implemented timer function within update() called updateTimer().
 *      Decrease time by -= 1 every second.
 * Timer +5 seconds on (5 pt)
 *      Within updateTimer(), checks the flag shipHit. If it's true, add 5 seconds to the timer and reset shipHit flag.
 * New Title Screen (3 pt)
 *      Implemented in Menu.js. Set the "Start" key as "T". Within update(), check if keydown(T) is pressed.
 *      If it is, start "playScene"
 * Create new special spaceship that's faster, smaller and worth more points (5 pt)
 *      Added a new spaceship that is 2 pixels faster and is worth 100 points.
 * Rocket can be controlled after it's fired (1 pt)
 *      Implemented in Rocket.js. Checks if the Rocket is being fired. If it is, allow keyRIGHT and keyLEFT to move it.
 * Added new sprite background (1 pt)
 * Added FIRE text when rocket fires and disappears (1 pt)
 *      Initialized text in Play.js. Within Rocket.js, checks if keyDownF is pressed.
 *      If it is, the text appears on screen. On hit or miss, the text disappears.
 * 20 pts total
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

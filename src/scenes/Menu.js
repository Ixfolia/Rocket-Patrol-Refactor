class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create(){
        // this.add.text(20, 20, "Rocket Patrol Menu");
        // this.scene.start("playScene");
        
        // Title Display
        this.add.text(game.config.width/2, game.config.height/2 - 64, "Rocket Patrol Refactored", {fontFamily: "Courier", fontSize: "40px", color: "#FAC898"}).setOrigin(0.5);

        // Instruction to start game
        this.startText = this.add.text(game.config.width/2, game.config.height/2, "Press T to Start", {fontFamily: "Courier", fontSize: "24px", color: "#FAC898"}).setOrigin(0.5);

        // Have T as input to start game
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update() {
        // Check if the T key has been pressed
        if (Phaser.Input.Keyboard.JustDown(this.keyT)) {
            // Start the play scene
            this.scene.start("playScene");
        }
    }
}
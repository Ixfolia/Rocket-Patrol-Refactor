// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 3;
        if (texture === "special_spaceship"){
            this.moveSpeed = 5;
        }
    }
    update(){
        // move spaceship left
        this.x -= this.moveSpeed;

        // wrapping around from left edge to right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    // position reset
    reset(){
        this.x = game.config.width;
    }
}
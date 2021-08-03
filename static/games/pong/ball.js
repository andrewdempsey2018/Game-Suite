class Ball extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, "ballImage");
        this.xSpeed = 5;
        this.ySpeed = 5;
        config.scene.add.existing(this);
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.y >= 592) {
            this.reverseYSpeed();
        }

        if(this.y <= 8) {
            this.reverseYSpeed();
        }
    }

    reverseXSpeed() {
        this.xSpeed = this.xSpeed * -1;
    }

    reverseYSpeed() {
        this.ySpeed = this.ySpeed * -1;
    }
}

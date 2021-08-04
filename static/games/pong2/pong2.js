var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('paddle', 'static/games/pong2/paddle.png');
    this.load.image('ball', 'static/games/pong2/ball.png');
    this.load.image('bg', 'static/games/pong2/bg.png');
}

function create() {
    bg = this.physics.add.sprite(400, 300, 'bg');
    paddle = this.physics.add.sprite(400, 570, 'paddle');
    ball = this.physics.add.sprite(400, 300, 'ball');
    

    //this.physics.add.collider(paddle, ball);

    ball.setBounce(1.0);
    ball.setCollideWorldBounds(true);

    ball.setVelocityX(200);
    ball.setVelocityY(200);

    keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

}

function update() {

    if (keyLeft.isDown) {
        paddle.x -= 10;
    }

    if (keyRight.isDown) {
        paddle.x += 10;
    }

    if (keySpace.isDown) {

    }
}
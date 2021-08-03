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
}

function create() {
    paddle = this.add.sprite(16, 236, 'paddle');
    ball = this.physics.add.sprite(400, 300, 'ball');

    ball.setBounce(1.0);
    ball.setCollideWorldBounds(true);

    ball.setVelocityX(200);
    ball.setVelocityY(200);

}

function update() {
}
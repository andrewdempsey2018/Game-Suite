var config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var ball, player1, player2;
var keyA, keyZ, keyUp, keyDown;
var ballSpeed = 3;

function preload() {

    this.load.image('paddle', 'static/games/pong/paddle.png');
    this.load.image('ballImage', 'static/games/pong/ball.png');
    this.load.image('area', 'static/games/pong/area.png');

    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
}

function create() {
    this.add.sprite(400, 300, "area");
    ball = new Ball({ scene: this, x: 400, y: 300 });
    player1 = this.add.sprite(24, 300, "paddle");
    player2 = this.add.sprite(752, 300, "paddle");
}

function update() {

    if (keyA.isDown) {
        player1.y -= 5;
        player2.y -= 5; //debug
    }

    if (keyZ.isDown) {
        player1.y += 5;
        player2.y += 5; //debug
    }

    if (keyUp.isDown) {
        player2.y -= 2;
    }

    if (keyDown.isDown) {
        player2.y += 2;
    }

    ball.move();

    if (collision(ball, player1) || collision(ball, player2)) {
        ball.reverseXSpeed();
    }
}

function collision(sprite1, sprite2) {
    if (sprite1.x < sprite2.x + sprite2.width &&
        sprite1.x + sprite1.width > sprite2.x &&
        sprite1.y < sprite2.y + sprite2.height &&
        sprite1.y + sprite1.height > sprite2.y) {

        return true;
    }
}
var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
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
    //this.load.image('bg', 'static/games/flappyghost/bg.png');

    /*this.load.spritesheet('player',
        'static/games/flappyghost/player.png',
        { frameWidth: 32, frameHeight: 32 
    );}*/

    cursors = this.input.keyboard.createCursorKeys();

}

function create() {
    //player = this.physics.add.sprite(400, 200, 'player');

    /*this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
});*/

}

function update() {

    //player.setVelocityX(120);

    //player.anims.play('left', true);
}
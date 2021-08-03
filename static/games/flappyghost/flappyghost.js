var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
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
var vec;

function preload() {
    this.load.image('bg', 'static/games/flappyghost/bg.png');
    this.load.image('block', 'static/games/flappyghost/block.png');
    this.load.image('grass', 'static/games/flappyghost/grass.png');
    this.load.image('stem', 'static/games/flappyghost/stem.png');
    this.load.image('flower', 'static/games/flappyghost/flower.png');
    this.load.json('levelData', 'static/games/flappyghost/level2.json');

    this.load.spritesheet('player',
        'static/games/flappyghost/player.png',
        { frameWidth: 32, frameHeight: 32 }
    );

    cursors = this.input.keyboard.createCursorKeys();

}

function create() {
    //this.add.image(400, 300, 'bg');
    bg = this.add.sprite(400, 300, 'bg');
    player = this.physics.add.sprite(400, 200, 'player');



    platforms = this.physics.add.staticGroup();
    //this.physics.add.collider(player, platforms);

    let levelData = this.cache.json.get('levelData');

    let level = levelData.objects.map(block => platforms.create(block.x, block.y, block.name))

    //platforms.create(400, 400, 'block');

    vec = new Phaser.Math.Vector2(400, 300);
    this.cameras.main.startFollow(vec);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

}

function update() {

    /*if (cursors.left.isDown && player.body.touching.down) {
        player.setVelocityY(-230);
    }*/

    if (cursors.left.isDown) {
        player.setVelocityY(-250);
    }

    if (cursors.right.isDown) {
        player.x = 50;
        player.y = 350;
        player.setVelocityY(-250);
    }

    vec.x = player.x;

    bg.x = player.x;

    player.setVelocityX(120);

    player.anims.play('left', true);
}
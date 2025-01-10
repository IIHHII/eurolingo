import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('player', 'assets/player.png'); // Placeholder player sprite
    this.load.image('map', 'assets/map.png');       // Placeholder map background
  }

  create() {
    this.add.image(400, 300, 'map'); // Add map background
    this.player = this.physics.add.sprite(400, 300, 'player'); // Add player sprite

    // Enable arrow key movement
    this.input.keyboard!.on('keydown', (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          this.player.y -= 10;
          break;
        case 'ArrowDown':
          this.player.y += 10;
          break;
        case 'ArrowLeft':
          this.player.x -= 10;
          break;
        case 'ArrowRight':
          this.player.x += 10;
          break;
      }
    });
  }

  update() {
    // Add game logic or animations here
  }
}

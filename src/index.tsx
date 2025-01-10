import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
};

new Phaser.Game(gameConfig);

ReactDOM.render(<App />, document.getElementById('root'));

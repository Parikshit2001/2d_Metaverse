import Phaser from 'phaser';
import { Player } from './Player';

export class InputManager {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  player: Player;

  constructor(scene: Phaser.Scene, player: Player) {
    this.player = player;
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    const velocity = 160;

    if (this.cursors.left?.isDown) {
      this.player.setVelocityX(-velocity);
    } else if (this.cursors.right?.isDown) {
      this.player.setVelocityX(velocity);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursors.up?.isDown) {
      this.player.setVelocityY(-velocity);
    } else if (this.cursors.down?.isDown) {
      this.player.setVelocityY(velocity);
    } else {
      this.player.setVelocityY(0);
    }
  }
}

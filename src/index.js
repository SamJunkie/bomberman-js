import Phaser from "phaser"
import { IntroScene } from "./intro.scene"
import { GameScene } from "./game.scene"
import { MenuScene } from "./menu.scene"
import {MenuOptionsScene} from "./menu-options.scene"

const SCREEN = {
  width: 240,
  height: 240
}

let config = {
  type: Phaser.AUTO,
  width: SCREEN.width * 2,
  height: SCREEN.height * 2,
  scene: [ IntroScene, MenuScene, MenuOptionsScene, GameScene],
  backgroundColor: "#43434F",
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  pixelArt: true
}

let game = new Phaser.Game(config)

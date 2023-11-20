// Exercise 05: Tiny Tween Chain
// Name: Sean Eric So
// Date: 20 November, 2023

// CODE ARMOR
'use strict'

// define game object
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    pixelArt: true,
    width: 800,
    height: 600,
    scene: [ Basics ]
}

const game = new Phaser.Game(config)

// global
let cursors = null
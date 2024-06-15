<template>
  <canvas id="gameCanvas"></canvas>
</template>

<script>
import { init, loadImage, SpriteSheet } from "kontra";
import { Sprite, GameLoop } from "kontra";
import playerSprite from "~/assets/player.png";

export default {
  mounted() {
    let { canvas } = init("gameCanvas");
    loadImage(playerSprite).then(function (image) {
      let spriteSheet = SpriteSheet({
        image: image,
        frameWidth: 24, // Adjust based on your spritesheet frame size
        frameHeight: 24, // Adjust based on your spritesheet frame size
        animations: {
          // Define animations
          walkRight: {
            frames: "4..9", // Example frames, adjust according to your sheet
            frameRate: 7,
          },
          // Add more animations as needed
        },
      });
      let player = Sprite({
        height: canvas.height / 4,
        width: canvas.width / 8,
        animations: spriteSheet.animations,
        anchor: { x: 0.5, y: 0.5 },
        x: canvas.width / 2,
        y: canvas.height / 1.5,
      });

      let loop = GameLoop({
        update: function () {
          // Example of changing animation based on interaction or time
          player.playAnimation("walkRight");
          player.update();
        },
        render: function () {
          player.render();
        },
      });

      loop.start();
    });
  },
};
</script>

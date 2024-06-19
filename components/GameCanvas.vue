<template>
  <canvas id="gameCanvas"></canvas>
</template>

<script>
import { init, loadImage, SpriteSheet } from "kontra";
import { Sprite, GameLoop } from "kontra";
import walkSprite from "~/assets/cat/spritesheet.png";

var state;
export default {
  setup() {
    const { characterState } = useCharacterState();
    state = characterState;
  },
  mounted() {
    let player;
    let { canvas } = init("gameCanvas");
    loadImage(walkSprite).then(function (image) {
      let walkSheet = SpriteSheet({
        image: image,
        frameWidth: 40,
        frameHeight: 40,
        animations: {
          Walk: {
            frames: "0..7",
            frameRate: 8,
          },
          Dead: {
            frames: "8..15",
            frameRate: 8,
            loop: false,
          },
          Sit: {
            frames: "16..23",
            frameRate: 8,
          },
        },
      });
      player = Sprite({
        height: canvas.height / 4,
        width: canvas.width / 8,
        animations: walkSheet.animations,
        anchor: { x: 0.5, y: 0.5 },
        x: canvas.width / 2,
        y: canvas.height / 1.5,
      });

      player.context.canvas.classList.add("pixelate");

      let loop = GameLoop({
        update: function () {
          player.playAnimation(state.value);
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

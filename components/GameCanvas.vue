<template>
  <canvas id="gameCanvas"></canvas>
</template>

<script>
import { init, loadImage, SpriteSheet } from "kontra";
import { Sprite, GameLoop } from "kontra";
import walkSprite from "~/assets/cat/cat01_walk_strip8.png";
import ImageContainer from "./ImageContainer.vue";

var state;
export default {
  setup() {
    const {characterState} = useCharacterState();
    state = characterState;
  },
  mounted() {
    let { canvas } = init("gameCanvas");
    loadImage(walkSprite).then(function (image) {
      image.imageSmoothingEnabled = false;
      image.classList.add("pixelate");
      let walkSheet = SpriteSheet({
        image: image,
        frameWidth: 40,
        frameHeight: 40,
        animations: {
          walkRight: {
            frames: "0..7",
            frameRate: 8,
          },
        },
      });
      let player = Sprite({
        height: canvas.height / 4,
        width: canvas.width / 8,
        animations: walkSheet.animations,
        anchor: { x: 0.5, y: 0.5 },
        x: canvas.width / 2,
        y: canvas.height / 1.5,
      });

      let loop = GameLoop({
        update: function () {
          // Example of changing animation based on interaction or time
          console.log(state.value)
          player.playAnimation(state.value == "Walk" ? "walkRight": "dead");
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

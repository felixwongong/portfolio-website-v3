import { init, loadImage, SpriteSheet } from "kontra";

export const useSpriteSheet = (sprite, config) => {
  return loadImage(sprite).then(function (image) {
    return SpriteSheet({
      image: image,
      frameWidth: config.frameWidth,
      frameHeight: config.frameHeight,
      animations: config.animations,
    });
  }
  );
}

import { createCanvas, loadImage } from 'canvas';
import fetch from 'node-fetch';

export interface DecodeBlindWatermarkOptions {
  url: string;
  fillColor: string;
  compositeOperation: string;
  mode: string;
}

export const decodeBlindWatermark = async (props: DecodeBlindWatermarkOptions) => {
  const options = Object.assign(
    {
      url: '',
      fillColor: '#000',
      compositeOperation: 'color-burn',
      mode: 'canvas',
    },
    props
  );
  if (!options.url) {
    return;
  }
  const response = await fetch(options.url);
  const arrayBuffer = await response.arrayBuffer();
  let resultImage = '';
  await loadImage(Buffer.from(arrayBuffer)).then((img) => {
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.globalCompositeOperation = options.compositeOperation as any;
    ctx.fillStyle = options.fillColor;
    ctx.fillRect(0, 0, img.width, img.height);
    resultImage = canvas.toDataURL();
  });
  return resultImage;
};

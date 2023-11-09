import { createCanvas, GlobalCompositeOperation, loadImage } from 'canvas';
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs';

export interface DecodeBlindWatermarkOptions {
  url: string;
  fillColor?: string;
  compositeOperation?: string;
  mode?: string;
  compositeTimes?: number;
}

export const decode = async (props: DecodeBlindWatermarkOptions) => {
  const options = Object.assign(
    {
      url: '',
      fillColor: '#000',
      compositeOperation: 'color-burn',
      mode: 'canvas',
      compositeTimes: 3,
    },
    props
  );
  if (!options.url) {
    return;
  }
  let imageBuffer: Buffer;
  if (/^\./.test(options.url)) {
    const imagePath = path.resolve(options.url);
    imageBuffer = fs.readFileSync(imagePath);
  } else {
    const response = await fetch(options.url);
    imageBuffer = Buffer.from(await response.arrayBuffer());
  }

  let resultImage = '';
  await loadImage(imageBuffer).then((img) => {
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.globalCompositeOperation = options.compositeOperation as GlobalCompositeOperation;
    ctx.fillStyle = options.fillColor;
    for (let i = 0; i < options.compositeTimes; i++) {
      ctx.fillRect(0, 0, img.width, img.height);
    }
    resultImage = canvas.toDataURL();
  });
  return resultImage;
};

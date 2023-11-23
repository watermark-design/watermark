import { createCanvas, GlobalCompositeOperation, loadImage } from 'canvas';
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs';

export interface DecodeBlindWatermarkOptions {
  url: string;
  fillColor?: string;
  compositeOperation?: string;
  compositeTimes?: number;
}

export const decode = async ({
  url = '',
  fillColor = '#000',
  compositeOperation = 'color-burn',
  compositeTimes = 3,
}: DecodeBlindWatermarkOptions) => {
  if (!url) {
    return;
  }
  let imageBuffer: Buffer;
  if (/^\./.test(url) || path.isAbsolute(url)) {
    const imagePath = path.isAbsolute(url) ? url : path.resolve(url);
    imageBuffer = fs.readFileSync(imagePath);
  } else {
    const response = await fetch(url);
    imageBuffer = Buffer.from(await response.arrayBuffer());
  }

  let resultImage = '';
  await loadImage(imageBuffer).then((img) => {
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.globalCompositeOperation = compositeOperation as GlobalCompositeOperation;
    ctx.fillStyle = fillColor;
    for (let i = 0; i < compositeTimes; i++) {
      ctx.fillRect(0, 0, img.width, img.height);
    }
    resultImage = canvas.toDataURL();
  });
  return resultImage;
};

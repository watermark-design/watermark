import { createCanvas, loadImage, GlobalCompositeOperation } from 'canvas';
import fetch from 'node-fetch';
import path from 'path';
import fs from 'fs/promises';

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
}: DecodeBlindWatermarkOptions): Promise<string> => {
  if (!url) {
    return '';
  }

  let imageBuffer: Buffer;

  if (/^\./.test(url) || path.isAbsolute(url)) {
    const imagePath = path.isAbsolute(url) ? url : path.resolve(url);
    imageBuffer = await fs.readFile(imagePath);
  } else {
    const response = await fetch(url);
    imageBuffer = Buffer.from(await response.arrayBuffer());
  }

  const img = await loadImage(imageBuffer);
  const { width, height } = img;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0, width, height);
  ctx.globalCompositeOperation = compositeOperation as GlobalCompositeOperation;
  ctx.fillStyle = fillColor;

  for (let i = 0; i < compositeTimes; i++) {
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL();
};

import type { DecodeBlindWatermarkOptions, WatermarkOptions } from '@watermark-design/core';
import { isFunction } from '@watermark-design/shared';
import { Watermark } from './watermark';
import { WatermarkCanvas, convertImage } from '@watermark-design/core';

/**
 * BlindWatermark class
 */
class BlindWatermark extends Watermark {
  /**
   * BlindWatermark constructor
   * @param props - blind watermark options
   */
  constructor(props: Partial<WatermarkOptions> = {}) {
    props.globalAlpha = 0.005;
    props.mode = 'blind';
    super(props);
  }

  /**
   * Decode blind watermark.
   * @param props - decode options
   */
  static decode(props: Partial<DecodeBlindWatermarkOptions>) {
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
    if (options.mode === 'canvas') {
      const img = new Image();
      img.src = options.url;
      img.onload = () => {
        const { width, height } = img;
        const canvas = WatermarkCanvas.createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        if (ctx === null) {
          throw new Error('get context error');
        }
        ctx.drawImage(img, 0, 0, width, height);
        ctx.globalCompositeOperation = options.compositeOperation as any;
        ctx.fillStyle = options.fillColor;
        for (let i = 0; i < options.compositeTimes; i++) {
          ctx.fillRect(0, 0, width, height);
        }
        const resultImage = convertImage(canvas);
        if (options.onSuccess && isFunction(options.onSuccess)) {
          options.onSuccess?.(resultImage);
        }
      };
    }
  }
}

export { BlindWatermark };

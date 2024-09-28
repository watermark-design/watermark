import { isUndefined, isString } from '@watermark-design/shared';
import type { CustomContentSVGType, WatermarkOptions } from '../types';

export const loadImage = (
  url: string,
  width: number | undefined = undefined,
  height: number | undefined = undefined
): Promise<HTMLImageElement> => {
  const image = new Image();
  image.setAttribute('crossOrigin', 'Anonymous');
  !isUndefined(width) && (image.width = <number>width);
  !isUndefined(height) && (image.height = <number>height);
  image.src = url;
  return new Promise((resolve) => {
    image.onload = () => {
      resolve(image);
    };
  });
};

export const convertSVGToImage = (svg: Element): string => {
  const richContent = svg.outerHTML
    .replace(/<img(.*?)>/g, '<img$1/>')
    .replace(/\n/g, '')
    .replace(/\t/g, '')
    .replace(/#/g, '%23');
  return `data:image/svg+xml;charset=utf-8,${richContent}`;
};

export const createSVGElement = (
  tagName: string,
  attrs: { [key: string]: string } = {},
  namespaceURI = 'http://www.w3.org/2000/svg'
): Element => {
  const element = document.createElementNS(namespaceURI, tagName);
  for (const attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
  return element;
};

export const createCustomContentSVG = async (
  ctx: CanvasRenderingContext2D,
  options: WatermarkOptions
): Promise<CustomContentSVGType> => {
  const svgElement = createSVGElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
  });
  const bodyElement = document.createElement('div');
  bodyElement.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  bodyElement.style.cssText = `
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: ${ctx.font};
  color: ${options.fontColor};
`;
  bodyElement.innerHTML = `<div class="rich-text-content">${options.content}</div>`;
  document.body.appendChild(bodyElement);
  // convert all images to base64
  await convertImgToBase64(bodyElement);
  const rect = bodyElement.querySelector('.rich-text-content')?.getBoundingClientRect();
  const rectWidth = rect?.width;
  const rectHeight = rect?.height;
  document.body.removeChild(bodyElement);
  const width = options.richTextWidth || rectWidth || options.width;
  const height = options.richTextHeight || rectHeight || options.height;
  svgElement.setAttribute('width', width.toString());
  svgElement.setAttribute('height', height.toString());
  const foreignObjectElement = createSVGElement('foreignObject', {
    width: width.toString(),
    height: height.toString(),
  });
  foreignObjectElement.appendChild(bodyElement);
  svgElement.appendChild(foreignObjectElement);
  return {
    element: svgElement,
    width,
    height,
  };
};

export const convertImgToBase64 = async (bodyElement: HTMLElement) => {
  const imgElements = bodyElement.querySelectorAll('img');

  for (const img of Array.from(imgElements)) {
    const src = img.getAttribute('src');
    if (src) {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const imgData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
        if (isString(imgData)) {
          img.setAttribute('src', imgData as string);
        }
      } catch (error) {
        console.error(`Error converting ${src} to base64:`, error);
      }
    }
  }
};

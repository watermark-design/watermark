export const convertImage = (canvas: HTMLCanvasElement): string => {
  return canvas.toDataURL('image/png', 1);
};

export const getMultiLineData = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] => {
  const result: string[] = [];
  let str = '';
  let word = '';
  for (let i = 0, len = text.length; i < len; i++) {
    word = text.charAt(i);
    if (word === '\n') {
      result.push(str);
      str = '';
      continue;
    }
    str += word;
    if (ctx.measureText(str).width > maxWidth) {
      result.push(str.substring(0, str.length - 1));
      str = '';
      i--;
    }
  }
  result.push(str);
  return result;
};

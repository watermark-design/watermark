export const convertImage = (canvas: HTMLCanvasElement): string => {
  return canvas.toDataURL('image/png', 1);
};

export const getMultiLineData = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
  const result: string[] = [];
  let str = '';
  for (let i = 0, len = text.length; i < len; i++) {
    str += text.charAt(i);
    if (ctx.measureText(str).width > maxWidth) {
      result.push(str.substring(0, str.length - 1));
      str = '';
      i--;
    }
  }
  result.push(str);
  return result;
};

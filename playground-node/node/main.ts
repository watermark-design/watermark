import * as watermark from '../../packages/node/src/main';

watermark.blind
  .decodeBlindWatermark({
    url: 'https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/blind-watermark-test-bxEJgQ.png',
    fillColor: '#000',
    compositeOperation: 'color-burn',
    mode: 'canvas',
  })
  .then((res) => {
    console.log(res);
  });

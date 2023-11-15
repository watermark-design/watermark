import * as watermark from '../../packages/node/src/main';

watermark.blind
  .decode({
    // url: 'https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/blind-watermark-test-bxEJgQ.png',
    url: './assets/blind-watermark.png',
    // url: '/Users/watermark/Downloads/blind-watermark.png',
    // fillColor: '#000',
    // compositeOperation: 'color-burn',
    // mode: 'canvas',
  })
  .then((res) => {
    console.log(res);
  });

import 'virtual:uno.css';
import '../../packages/style/src/index.scss';
import { Watermark } from '../../packages/dom/src/main';
const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
  rotate: 22,
  layout: 'grid',
  gridLayoutOptions: {
    rows: 2,
    cols: 2,
    gap: [20, 20],
    matrix: [
      [1, 0],
      [0, 1],
    ],
  },
  advancedStyle: {
    type: 'linear',
    colorStops: [
      {
        offset: 0,
        color: 'red',
      },
      {
        offset: 1,
        color: 'blue',
      },
    ],
  },
  onSuccess: () => {
    // success callback
  },
});

watermark.create()

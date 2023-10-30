import 'virtual:uno.css';
import '../../packages/style/src/index.scss';
import { Watermark } from '../../packages/dom/src/main';
const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
});

watermark.create()

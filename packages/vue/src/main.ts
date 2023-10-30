import type { App } from 'vue-demi';
import watermark from './watermark';
import teleport from './teleport';

export default {
  install(app: App) {
    app.component(watermark.name, watermark);
    app.component(teleport.name, teleport);
  },
};

export { watermark, teleport };

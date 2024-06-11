import type { App } from 'vue-demi';
import watermark from './watermark';
import blind from './blind';

export default {
  install(app: App) {
    app.component(watermark.name!, watermark);
    app.component(blind.name!, blind);
  },
};

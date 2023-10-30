import { Vue2 } from 'vue-demi';
import App from './app.vue';
import WatermarkDesign from '../../packages/vue/src/main';
import 'virtual:uno.css';
import '../../packages/style/src/index.scss';

Vue2.use(WatermarkDesign);

Vue2.config.productionTip = false;

new Vue2({
  render: (h) => h(App),
}).$mount('#app');

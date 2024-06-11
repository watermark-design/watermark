import { Vue2 } from 'vue-demi';
import App from './app.vue';
import 'virtual:uno.css';
import WatermarkDesign from '../../packages/vue/src/main';
Vue2.config.productionTip = false;
Vue2.use(WatermarkDesign);

new Vue2({
  render: (h) => h(App),
}).$mount('#app');

import { createApp } from 'vue-demi';
import 'virtual:uno.css';
import ElementPlus from 'element-plus'
import WatermarkDesign from '../../packages/vue/src/main';
import App from './app.vue';
import 'element-plus/dist/index.css'
import '../../packages/style/src/index.scss';

const app = createApp(App);
app.use(ElementPlus)
app.use(WatermarkDesign);
app.mount('#app');

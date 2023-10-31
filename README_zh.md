<p align="center">
  <a href="https://watermark-design.github.io/watermark/" target="_blank" rel="noopener noreferrer">
    <img width="300" src="https://watermark-design.github.io/watermark/logo-text.png" alt="watermark design">
  </a>
</p>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/watermark-design/watermark/deploy.yml?branch=main">
  <img alt="GitHub" src="https://img.shields.io/github/license/watermark-design/watermark">
  <a href="https://discord.gg/89xaVqpV"><img src="https://img.shields.io/discord/1143015541175496777" alt="Join the chat"></a>
</p>

# watermark-design

同时支持 Vue 2、Vue 3和React。

## 用法

### Vue

<a href="https://npmjs.com/package/@watermark-design/vue"><img src="https://badgen.net/npm/v/@watermark-design/vue" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/vue">

```ts
import WatermarkDesign from '@watermark-design/vue';
app.use(WatermarkDesign);
```

```vue
<Watermark content="hello watermark" :width="200" :height="200">
  <div style="height: 400px"></div>
</Watermark>
```

### React

<a href="https://npmjs.com/package/@watermark-design/react"><img src="https://badgen.net/npm/v/@watermark-design/react" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/react">

```ts
import { Watermark } from '@watermark-design/react';
```

```jsx
<Watermark width={200} height={200} content={inputValue}>
  <div style={{ height: 400 }}></div>
</Watermark>
```

### Dom

<a href="https://npmjs.com/package/@watermark-design/dom"><img src="https://badgen.net/npm/v/@watermark-design/dom" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/dom">

```ts
import { Watermark } from '@watermark-design/dom';

const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
});
watermark.create();
```

## 文档

要了解更多，请查看[文档](https://watermark-design.github.io/watermark/)

## License

[MIT](LICENSE).

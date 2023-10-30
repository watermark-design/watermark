<p align="center">
  <a href="https://watermark-design.github.io/watermark/" target="_blank" rel="noopener noreferrer">
    <img width="300" src="https://watermark-design.github.io/watermark/logo-text.png" alt="company ui">
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

```ts
import '@watermark-design/style';
import WatermarkDesign from '@watermark-design/vue';
app.use(WatermarkDesign);
```

```vue
<Watermark :width="200" :height="200" content="hello watermark" />
```

[//]: # (### React)

[//]: # ()
[//]: # (```ts)

[//]: # (import '@watermark-design/style';)

[//]: # (import { Watermark } from '@watermark-design/react';)

[//]: # (```)

[//]: # ()
[//]: # (```jsx)

[//]: # (<Watermark)

[//]: # (  content="hello my watermark")

[//]: # (  width={200})

[//]: # (  height={200})

[//]: # (>)

[//]: # (</Watermark>)

[//]: # (```)

### Dom

```ts
import '@watermark-design/style';
import { Watermark } from '@watermark-design/dom';

const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
  onSuccess: () => {
    // success callback
  }
});
```

## 文档

要了解更多，请查看[文档](https://watermark-design.github.io/watermark/)

## License

[MIT](LICENSE).

<p align="center">
  <a href="https://watermark-design.github.io/watermark/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://watermark-design.github.io/watermark/full-logo.png" alt="company ui">
  </a>
</p>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/watermark-design/watermark/deploy.yml?branch=main">
  <img alt="GitHub" src="https://img.shields.io/github/license/watermark-design/watermark">
  <a href="https://discord.gg/89xaVqpV"><img src="https://img.shields.io/discord/1143015541175496777" alt="Join the chat"></a>
</p>

# Watermark

Works with both Vue 2 , Vue 3 And React.

## Translations

- [中文文档](README_zh.md)

## Usage

### Vue

<a href="https://npmjs.com/package/@watermark-design/vue"><img src="https://badgen.net/npm/v/@watermark-design/vue" alt="npm package"></a>
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/vue">

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
[//]: # (<a href="https://npmjs.com/package/@watermark-design/react"><img src="https://badgen.net/npm/v/@watermark-design/react" alt="npm package"></a>)

[//]: # (<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/react">)

[//]: # ()
[//]: # (```ts)

[//]: # (import '@watermark-design/style';)

[//]: # (import { AutoComplete } from '@watermark-design/react';)

[//]: # (```)

[//]: # ()
[//]: # (```jsx)

[//]: # (<AutoComplete)

[//]: # (  popupAppendToBody={false})

[//]: # (  defaultValue={inputValue})

[//]: # (  value={inputValue})

[//]: # (  onChange={setInputValue})

[//]: # (></AutoComplete>)

[//]: # (```)

### Dom

<a href="https://npmjs.com/package/@watermark-design/dom"><img src="https://badgen.net/npm/v/@watermark-design/dom" alt="npm package"></a>
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/dom">

```ts
import '@watermark-design/style';
import { Watermark } from '@watermark-design/dom';

const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
});
```

## Documentation

To learn more, check [its documentation](https://watermark-design.github.io/watermark/).

## License

[MIT](LICENSE).

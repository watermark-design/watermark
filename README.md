<p align="center">
  <a href="https://watermark-design.github.io/watermark/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://watermark-design.github.io/watermark/full-logo.png" alt="watermark design">
  </a>
</p>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/watermark-design/watermark/deploy.yml?branch=main">
  <img alt="GitHub" src="https://img.shields.io/github/license/watermark-design/watermark">
  <a href="https://discord.gg/V5msNXCE"><img src="https://img.shields.io/discord/1170204572254474300" alt="Join the chat"></a>
</p>

# Watermark

Works with both Vue 2 , Vue 3 And React.

## Translations

- [中文文档](README_zh.md)

## Usage

### Vue

<a href="https://npmjs.com/package/@watermark-design/vue"><img src="https://badgen.net/npm/v/@watermark-design/vue" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/vue"> <img alt="npm download week" src="https://img.shields.io/npm/dw/@watermark-design/vue">

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

<a href="https://npmjs.com/package/@watermark-design/react"><img src="https://badgen.net/npm/v/@watermark-design/react" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/react"> <img alt="npm download week" src="https://img.shields.io/npm/dw/@watermark-design/react">

```ts
import { Watermark } from '@watermark-design/react';
```

```jsx
<Watermark width={200} height={200} content={inputValue}>
  <div style={{ height: 400 }}></div>
</Watermark>
```

### Dom

<a href="https://npmjs.com/package/@watermark-design/dom"><img src="https://badgen.net/npm/v/@watermark-design/dom" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/dom"> <img alt="npm download week" src="https://img.shields.io/npm/dw/@watermark-design/dom">

```ts
import { Watermark } from '@watermark-design/dom';

const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
});
watermark.create();
```

## Documentation

To learn more, check [its documentation](https://watermark-design.github.io/watermark/).

## Maintainers

[@zhensherlock](https://github.com/zhensherlock).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/watermark-design/watermark/issues/new/choose) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/watermark-design/watermark/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=watermark-design/watermark" />
</a>

## License

[MIT](LICENSE) © MichaelSun

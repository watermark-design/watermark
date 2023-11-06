<p align="center">
  <a href="https://watermark-design.github.io/watermark/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://watermark-design.github.io/watermark/full-logo.png" alt="watermark design">
  </a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@watermark-design/dom"><img src="https://badgen.net/npm/v/@watermark-design/dom" alt="npm package"></a>
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/watermark-design/watermark/deploy.yml?branch=main">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/dom">
  <img alt="npm download week" src="https://img.shields.io/npm/dw/@watermark-design/dom">
  <img alt="GitHub" src="https://img.shields.io/github/license/watermark-design/watermark">
  <a href="https://discord.gg/V5msNXCE"><img src="https://img.shields.io/discord/1170204572254474300" alt="Join the chat"></a>
</p>

# `@watermark-design/dom`

Works with both Vue 2 , Vue 3 And React.

## Installing

```bash
# or pnpm or yarn
npm install @watermark-design/dom
```

## Usage

### General

```ts
import { Watermark } from '@watermark-design/dom';

const watermark = new Watermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
  onSuccess: () => {
    // success callback
  },
});
watermark.create();
```

## Documentation

To learn more, check [its documentation](https://watermark-design.github.io/watermark/).

## License

[MIT](LICENSE).

<p align="center">
  <a href="https://watermark-design.github.io/watermark/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://watermark-design.github.io/watermark/full-logo.png" alt="watermark design">
  </a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@watermark-design/shared"><img src="https://badgen.net/npm/v/@watermark-design/node" alt="npm package"></a>
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/watermark-design/watermark/deploy.yml?branch=main">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@watermark-design/node">
  <img alt="npm download week" src="https://img.shields.io/npm/dw/@watermark-design/node">
  <img alt="GitHub" src="https://img.shields.io/github/license/watermark-design/watermark">
  <a href="https://discord.gg/V5msNXCE"><img src="https://img.shields.io/discord/1170204572254474300" alt="Join the chat"></a>
</p>

# `@watermark-design/node`

## Installing

```bash
# or pnpm or yarn
npm install @watermark-design/node
```

## Usage

```ts
import * as watermark from '@watermark-design/node';
watermark.blind
  .decode({
    url: 'https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/blind-watermark-test-bxEJgQ.png',
  })
  .then((res) => {
    console.log(res); // image base64 after decryption
  });
```

## Documentation

To learn more, check [its documentation](https://watermark-design.github.io/watermark/).

## License

[MIT](LICENSE).

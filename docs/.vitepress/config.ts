// @ts-ignore
import { version } from '../../package.json';
import zh_CN from './locales/zh-CN';

export default {
  title: 'Watermark Design',
  description: 'A watermark design library',
  base: '/watermark/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/watermark/favicons/favicon-64x64.png' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/watermark/favicons/apple-touch-icon.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-this', activeMatch: '/guide/' },
      {
        text: 'Components',
        activeMatch: '/components/',
        items: [
          {
            text: 'Vue',
            link: '/components/vue/overview',
          },
          {
            text: 'React',
            link: '/components/react/overview',
          },
          {
            text: 'Dom',
            link: '/components/dom/overview',
          },
        ],
      },
      {
        text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/watermark-design/watermark/blob/main/packages/core/CHANGELOG.md',
          },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/watermark-design/watermark' }],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduce', link: '/guide/what-is-this' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
        },
      ],
      '/components/vue/': [
        { text: 'Vue Overview', link: '/components/vue/overview' },
        {
          text: 'Component',
          items: [{ text: 'Watermark', link: '/components/vue/watermark' }],
        },
      ],
      '/components/react/': [
        { text: 'React Overview', link: '/components/react/overview' },
        {
          text: 'Component',
          items: [{ text: 'Watermark', link: '/components/react/watermark' }],
        },
      ],
      '/components/dom/': [
        { text: 'Dom Overview', link: '/components/dom/overview' },
        {
          text: 'Component',
          items: [{ text: 'Watermark', link: '/components/dom/watermark' }],
        },
      ],
    },
    algolia: {
      appId: 'V6CF28P0PS',
      apiKey: '692752b7b3c6f794997d8ae22aed79fa',
      indexName: 'watermark-design',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Michael Sun',
    },
    localeLinks: {
      text: 'English',
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh/' },
      ],
    },
  },
  markdown: {
    // lineNumbers: true
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: zh_CN,
    },
  },
};

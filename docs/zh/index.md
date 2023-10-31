---
layout: home
sidebar: false
title: Watermark Design
titleTemplate: false

hero:
  name: Watermark Design
  text: 强大的水印插件
  tagline: 简易、强大、高性能。
  image:
    src: /full-logo.png
    alt: watermark design
  actions:
    - theme: brand
      text: 开始 👆
      link: /zh/guide/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/watermark-design/watermark

features:
  - icon: 🛠️
    title: 丰富的功能
    details: 支持众多功能。
  - icon: 🔑
    title: 完全类型化的API
    details: 灵活的 API 和完整的 TypeScript 类型。
  - icon: 🔩
    title: 通用的插件
    details: 可用于vue 2, vue 3和react。
---

<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  const image = document.querySelector('.VPHero .VPImage.image-src');
  image.classList.add('blur');
  setTimeout(() => {
    image.classList.remove('blur');
    image.classList.add('animation');
  }, 500)
});
</script>

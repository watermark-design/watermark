---
layout: home
sidebar: false
title: Watermark Design
titleTemplate: false

hero:
  name: Watermark Design
  text: Advanced watermark plugin
  tagline: Simple, powerful, and performant.
  image:
    src: /full-logo.png
    alt: watermark-design
  actions:
    - theme: brand
      text: Get Started 👆
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/watermark-design/watermark

features:
  - icon: 🛠️
    title: Rich Features
    details: Supports many functions.
  - icon: 🔑
    title: Fully Typed APIs
    details: Flexible programmatic APIs with full TypeScript typing..
  - icon: 🔩
    title: Universal Plugins
    details: Works with both Vue 2 , Vue 3 And React.
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

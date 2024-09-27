import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import commonjs from 'vite-plugin-commonjs';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import UnoCss from 'unocss/vite';
// import babel from 'vite-plugin-babel';
import DefineOptions from 'unplugin-vue-define-options/vite';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'vue-demi', '@watermark-design/dom', '@watermark-design/core'],
      input: ['./src/main.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.mjs',
          // preserveModules: true,
          exports: 'named',
          dir: 'es',
        },
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          // preserveModules: true,
          exports: 'named',
          dir: 'lib',
        },
        {
          format: 'umd',
          name: 'WatermarkDesign',
          entryFileNames: 'index.full.js',
          sourcemap: true,
          exports: 'named',
          dir: 'dist',
        },
        // prod
        {
          format: 'umd',
          name: 'WatermarkDesign',
          entryFileNames: 'index.full.prod.js',
          sourcemap: true,
          exports: 'named',
          dir: 'dist',
          plugins: [terser()],
        },
      ],
    },
    lib: {
      entry: './src/main.ts',
      name: 'WatermarkDesign',
    },
  },
  plugins: [
    commonjs(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      // exclude: /node_modules|style/,
    }),
    // babel(),
    vue(),
    DefineOptions(),
    dts({
      entryRoot: './src',
      outDir: ['es/types', 'lib/types'],
    }),
    UnoCss(),
  ],
});

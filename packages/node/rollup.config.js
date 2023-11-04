import filesize from 'rollup-plugin-filesize';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import strip from '@rollup/plugin-strip';

const output = [
  {
    format: 'esm',
    file: 'dist/index.esm.js',
    sourcemap: true,
    inlineDynamicImports: true,
  },
  {
    format: 'cjs',
    file: 'dist/index.cjs.js',
    sourcemap: true,
    inlineDynamicImports: true,
  },
  // prod
  {
    format: 'esm',
    file: 'dist/index.esm.prod.js',
    sourcemap: true,
    plugins: [terser()],
    inlineDynamicImports: true,
  },
  {
    format: 'cjs',
    file: 'dist/index.cjs.prod.js',
    sourcemap: true,
    plugins: [terser()],
    inlineDynamicImports: true,
  },
];

export default [
  {
    input: 'src/main.ts',
    output,
    plugins: [
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**'],
        exclude: ['node_modules/**', 'src/style/**'],
      }),
      resolve(),
      strip(),
      typescript(),
      commonjs(),
      babel({
        exclude: /node_modules/,
      }),
      filesize(),
    ],
    external: ['node-fetch', 'canvas'],
  },
];

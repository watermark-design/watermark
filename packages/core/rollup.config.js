import filesize from 'rollup-plugin-filesize';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import strip from '@rollup/plugin-strip';
import pkg from './package.json';
import { generateOutputs } from '../../build/output';

const name = 'WatermarkDesignCore';
const plugins = [
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: /src/,
    exclude: /node_modules/,
  }),
  resolve(),
  strip(),
  typescript(),
  commonjs(),
  babel({
    // babelHelpers: 'runtime',
    exclude: /node_modules/,
  }),
  filesize(),
];

export default [
  {
    input: 'src/main.ts',
    output: generateOutputs(name, pkg),
    plugins,
  },
];

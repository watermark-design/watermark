import terser from '@rollup/plugin-terser';
import { generateBanner } from './banner.js';

export const generateOutputs = (name, packageJson, section = '') => {
  const path = section === '' ? 'dist' : `dist/${section}`;
  return [
    {
      name,
      format: 'esm',
      file: `${path}/index.esm.js`,
      sourcemap: true,
      banner: generateBanner(packageJson),
    },
    {
      name,
      format: 'umd',
      file: `${path}/index.umd.js`,
      sourcemap: true,
      banner: generateBanner(packageJson),
    },
    {
      name,
      format: 'iife',
      file: `${path}/index.iife.js`,
      sourcemap: true,
      banner: generateBanner(packageJson),
    },
    {
      name,
      format: 'cjs',
      file: `${path}/index.cjs.js`,
      sourcemap: true,
      banner: generateBanner(packageJson),
    },
    // prod
    {
      name,
      format: 'esm',
      file: `${path}/index.esm.prod.js`,
      sourcemap: true,
      plugins: [terser()],
    },
    {
      name,
      format: 'umd',
      file: `${path}/index.umd.prod.js`,
      sourcemap: true,
      plugins: [terser()],
    },
    {
      name,
      format: 'iife',
      file: `${path}/index.iife.prod.js`,
      sourcemap: true,
      plugins: [terser()],
    },
    {
      name,
      format: 'cjs',
      file: `${path}/index.cjs.prod.js`,
      sourcemap: true,
      plugins: [terser()],
    },
  ];
};

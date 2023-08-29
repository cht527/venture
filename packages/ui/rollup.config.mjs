import path from 'path';
import fs from 'fs';

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json' assert { type: 'json' };

/** @type {import('rollup').OutputOptions} */
const commonOutputOptions = {
  preserveModules: true,
  preserveModulesRoot: 'src',
  exports: 'named',
  interop: 'auto',
};

/** @type {import('rollup').RollupOptions} */
export default {
  input: ['src/hooks/index.ts', 'src/icons/index.ts', 'src/index.ts'],
  output: [
    { ...commonOutputOptions, dir: 'lib', format: 'cjs' },
    { ...commonOutputOptions, dir: 'es', format: 'esm' },
  ],
  treeshake: {
    moduleSideEffects(id, external) {
      if (external) {
        return true;
      }

      // 将 icons 目录标记为没有副作用，避免其中的 forwardRef 导致无法抖树
      return !/src\/icons\//.test(id);
    },
  },
  preserveSymlinks: true,
  external: [
    'react/jsx-runtime',
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies),
  ],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    postcss({
      extract: true,
      autoModules: false,
      modules: {
        generateScopedName: 'vcpe-ui-[folder]-[local]-[contenthash:base64:5]',
      },
      onExtract(data) {
        fs.writeFileSync(path.resolve('./index.css'), data().code);
        return false;
      },
    }),
  ],
};

import typescript from 'rollup-plugin-typescript2';
import * as packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: Object.keys(packageJson.dependencies),
};

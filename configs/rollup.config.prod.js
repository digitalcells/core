import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'Cell',
      exports: 'named'
    }
  ],
  plugins: [del({ targets: 'dist/*', verbose: true }), typescript()]
};

import { terser } from 'rollup-plugin-terser';

export default {
  input: [
    'dot-grid.js',
    'dot-grid-worklet.js'
  ],

  output: {
    dir: 'dist',
    format: 'esm'
  },

  plugins: [
    terser()
  ]
};

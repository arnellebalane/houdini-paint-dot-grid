import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'dot-grid.js',
  output: [{
    file: 'dist/dot-grid.esm.js',
    format: 'esm'
  }, {
    file: 'dist/dot-grid.umd.js',
    format: 'umd'
  }],
  plugins: [
    terser()
  ]
}, {
  input: 'dot-grid-worklet',
  output: {
    file: 'dist/dot-grid-worklet.js',
    format: 'esm'
  },
  plugins: [
    terser()
  ]
}];

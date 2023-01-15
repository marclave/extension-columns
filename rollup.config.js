import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs';


const config = [ {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript(),
    commonjs(),
  ]
}
  ,
  {
    // path to your declaration files root
    input: './dist/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default config

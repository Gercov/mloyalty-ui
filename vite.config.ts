import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import ueSetupExtend from 'vite-plugin-vue-setup-extend';
import typescript2 from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({ vueTsc: true }),
    svgLoader(),
    ueSetupExtend(),
    typescript2({
      check: false,
      include: [
        'src/components/*/*.ts',
        'src/components/*/*.vue',
        'src/components/index.ts',
        'src/index.ts',
      ],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ['vite.config.ts', 'main.ts'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'Mloyalty-UI',
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

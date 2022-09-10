import type { App } from 'vue';
import '@/assets/css/index.scss';
import * as components from '@/components';

export default {
  install: (app: App) => {
    for (const componentKey in components) {
      app.use((components as any)[componentKey]);
    }
  },
};

export * from '@/components';

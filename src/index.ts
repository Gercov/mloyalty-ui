import type { App } from 'vue';
import '@/assets/css/index.scss';
import { MlButton, MlIcon } from '@/components';

export default {
  install: (app: App) => {
    app.component(MlButton.name, MlButton);
    app.component(MlIcon.name, MlIcon);
  },
};

export { MlButton, MlIcon };

import type { App, Plugin } from 'vue';

import MlButton from './index.vue';

export default {
  install(Vue: App) {
    Vue.component(MlButton.name, MlButton);
  },
} as Plugin;

export { MlButton };

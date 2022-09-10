import type { App, Plugin } from 'vue';

import MlIcon from './index.vue';

export default {
  install(Vue: App) {
    Vue.component(MlIcon.name, MlIcon);
  },
} as Plugin;

export { MlIcon };

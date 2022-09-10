import type { App } from "vue";
import { MlButton, MlIcon } from "./components";
import "@/assets/css/index.scss";

export default {
  install: (app: App) => {
    app.component("MlButton", MlButton);
    app.component("MlIcon", MlIcon);
  },
};

export { MlButton };

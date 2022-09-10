import type { App } from "vue";
import { MlButton } from "./components";
import "@/assets/css/index.scss";

export default {
  install: (app: App) => {
    app.component("MlButton", MlButton);
  },
};

export { MlButton };

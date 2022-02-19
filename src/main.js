import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";

const app = createApp(App);

components.forEach((component) => {
  //Global components registration
  app.component(component.name, component);
});

app.mount("#app");

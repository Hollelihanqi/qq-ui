import { createApp } from "vue";

import QButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'
const app = createApp(JSXButton)

app.mount("#app")
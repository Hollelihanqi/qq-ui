import { createApp } from "vue";

import QButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'
import HqUI from './entry'
const app = createApp({
    template:`
        <div>
            <QButton>普通按钮</QButton>
        </div>
    `
})
app.use(HqUI)
app.mount("#app")
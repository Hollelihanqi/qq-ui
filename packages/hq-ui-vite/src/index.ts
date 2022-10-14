import { createApp } from "vue";

// import QButton from './button/index'
// import SFCButton from './SFCButton.vue'
// import JSXButton from './JSXButton'
import HqUI from "./entry";
const app = createApp({
  template: `
        <div style="display:flex;flex-direction:column;gap:16px">
            <div>
                <QButton color="blue">普通按钮</QButton>
                <QButton color="red">普通按钮1</QButton>
                <QButton color="yellow">普通按钮2</QButton>
                <QButton color="pink">普通按钮3</QButton>
                <QButton color="green">普通按钮4</QButton>
                <QButton color="purple">普通按钮5</QButton>
            </div>
            <div>
                <QButton color="purple" icon="search">ICON BTN</QButton>
                <QButton color="green" icon="edit">ICON BTN</QButton>
                <QButton color="pink" icon="check">ICON BTN</QButton>
                <QButton color="yellow" icon="message">ICON BTN</QButton>
                <QButton color="red" icon="delete">ICON BTN</QButton>
            </div>
            <div>
                <QButton color="purple" icon="search" round plain></QButton>
                <QButton color="green" icon="edit" round plain></QButton>
                <QButton color="pink" icon="check" round plain></QButton>
                <QButton color="yellow" icon="message" round plain></QButton>
                <QButton color="red" icon="delete" round plain></QButton>
            </div>
            <div>
                <QButton color="purple" size="small" icon="search" round plain>small</QButton>
                <QButton color="green" size="medium" icon="edit" round plain>medium</QButton>
                <QButton color="pink" size="large" icon="check" round plain>large</QButton>
            </div>
            <div>
                <QButton color="purple" size="small" icon="search" >small</QButton>
                <QButton color="green" size="medium" icon="edit" >medium</QButton>
                <QButton color="pink" size="large" icon="check" >large</QButton>
            </div>
        </div>
    `,
});
app.use(HqUI);
app.mount("#app");

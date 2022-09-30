import {defineConfig} from 'vite'
import vueJsx from "@vitejs/plugin-vue-jsx"
import {presetUno,presetAttributify,presetIcons} from 'unocss'
import Unocss from 'unocss/vite'
import {safelist} from '../config/unocss'

export default defineConfig({
    plugins:[
        vueJsx(),
        Unocss(
            {
                safelist,
                presets: [presetUno(), presetAttributify(), presetIcons()],
              }
        )
    ]
})
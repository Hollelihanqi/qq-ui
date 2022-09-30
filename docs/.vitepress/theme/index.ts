import DefaultTheme from 'vitepress/theme'
import HqUI from '../../../src/entry'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

export default {
    ...DefaultTheme,
    enhanceApp({app}){
        app.use(HqUI)
        registerComponents(app)
    }
}
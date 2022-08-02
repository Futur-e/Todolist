import { createApp } from 'vue'
import App from './App'
import {mixin1} from "@/mixin";

createApp(App).config.productionTip = false
createApp(App).mixin(mixin1)
createApp(App).mount('#app')
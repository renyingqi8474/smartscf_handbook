import { defineClientConfig } from 'vuepress/client'
import banner from './layouts/banner.vue'

export default defineClientConfig({
    layouts: {
        banner,
    },
})

import { defineClientConfig } from 'vuepress/client'
import banner from './layouts/banner.vue'
import NotFound from './layouts/NotFound.vue'

export default defineClientConfig({
    layouts: {
        banner,
        NotFound
    },
})

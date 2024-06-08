import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { zhNavbar, enNavbar, } from './navbar/switch.js'
import { zhSidebar, enSidebar, } from './sidebar/switch.js'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default defineUserConfig({
  lang: 'zh-CN',
  // 默认站点语言为英文
  // lang: 'en-US',

  locales: {
    '/': {
      selectLanguageName: '简体中文',
      title: '彗星文档',
      description: '繁星似海 熠熠生辉',
    },
    '/en/': {
      selectLanguageName: 'English',
      title: 'Comet documents',
      description: 'my book',
    },
  },

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  plugins: [
    searchProPlugin({
      indexContent: true,
      hotReload: true,
    }),
    autoprefixer({
      overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
    })
  ],

  theme: defaultTheme({
    logo: 'comet.png', //文件在public文件夹内
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: zhNavbar,
        sidebar: zhSidebar,
        notFound: ['没找到', '网页走丢了'],
        backToHome: '返回首页'
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: enNavbar,
        sidebar: enSidebar
      }
    },
  }),

  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            autoprefixer({
              overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
            }),
            tailwindcss()
          ]
        }
      }
    }
  }),
})

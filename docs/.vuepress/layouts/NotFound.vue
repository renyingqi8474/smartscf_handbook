<script setup lang="ts">
import { useThemeLocaleData } from '@theme/useThemeData'
import { RouteLink, useRouteLocale } from 'vuepress/client'

const routeLocale = useRouteLocale()
const themeLocale = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
    messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
</script>

<template>
    <main class="container">
        <img src="../public/1.jpg" />
        <hgroup>
            <h1>{{ getMsg() }}</h1>
            <p>
                <RouteLink :to="homeLink">{{ homeText }}</RouteLink>
            </p>
        </hgroup>
    </main>
</template>

<style lang="scss">
.container {
    width: 100%; //图片的宽度适配整个界面
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        position: absolute;
        z-index: 0;
    }

    hgroup {
        position: absolute;
        top: 0;
        left: var(--sidebar-width);
        z-index: 1;
        text-align: center;
        color: white;

        h1 {
            font-size: 6rem;
        }
        p {
            font-size: 3rem;
        }
    }
}
</style>


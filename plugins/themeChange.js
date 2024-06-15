import {themeChange} from "theme-change";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', () => {
        themeChange(false)
    })
})

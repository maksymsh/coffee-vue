import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../../../../lang/en'
import ru from '../../../../lang/ru'
import uk from '../../../../lang/uk'

const loadedLanguages = ['en']

Vue.use(VueI18n)

const messages = {
    en: {

    },
    ru: {

    },
    uk: {

    }
}



function setI18nLanguage (lang) {
    i18n.locale = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export function loadLanguageAsync (lang) {
    if (i18n.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
            return import(`../../../../lang/${lang}`).then(msgs => {
                i18n.setLocaleMessage(lang, msgs.default)
                loadedLanguages.push(lang)
                return setI18nLanguage(lang)
            })
        }
        return Promise.resolve(setI18nLanguage(lang))
    }
    return Promise.resolve(lang)
}

export const i18n = new VueI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
})
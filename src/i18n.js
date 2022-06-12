import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import translationEN from './locales/en/translation.json'
import translationVI from './locales/vi/translation.json'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
}

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        lng: "en",
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });


export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '/src/locales/en/translation.json';
import el from '/src/locales/el/translation.json';

const resources = {
    en: {
        translation: en
    },
    el: {
        translation: el
    }
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true
    });


export default i18n;
import {useEffect} from 'react';
import en from '../../shared/i18n/locales/en.json';
import ru from '../../shared/i18n/locales/ru.json';
import * as RNLocalize from 'react-native-localize';

import { useState } from 'react'

const translations = { en, ru } 

export const useLocalization = () => {
    const [currentLanguage, changeLanguage] = useState('ru');

    useEffect(() => {
        const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
        changeLanguage(deviceLanguage === 'ru' ? 'ru' : 'en');
    }, [])

    const t = (key) => {
        return translations[currentLanguage][key];
    }

    return { t, currentLanguage, changeLanguage }
}
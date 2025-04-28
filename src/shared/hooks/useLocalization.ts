import {useEffect} from 'react';
import en from '../../shared/i18n/locales/en.json';
import ru from '../../shared/i18n/locales/ru.json';
import de from '../../shared/i18n/locales/de.json';
import * as RNLocalize from 'react-native-localize';

import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const translations = { en, ru, de } 

export const useLocalization = () => {
    const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
    const [currentLanguage, setCurrentLanguage] = useState('ru');

    useEffect(() => {
        changeLanguage()        
    }, [])

    const changeLanguage = async (key?) => {
        
        const savedLanguage = await AsyncStorage.getItem('language');
        const lang = key || savedLanguage || deviceLanguage;
       
        setCurrentLanguage(lang);
        key && await AsyncStorage.setItem('language', lang);
        
    }

    const t = (key: string): any => {
        return translations[currentLanguage][key];
    }

    return { t, currentLanguage, changeLanguage }
}
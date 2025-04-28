import { useLocalization } from '../../shared/hooks/useLocalization';
import React, { useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import LoginImage from './assets/login-image.svg';
import { LANGUAGES } from '../../shared/constants/languages';

const LoginScreen = () => {

    const { t, currentLanguage, changeLanguage } = useLocalization();

    const handleChangeLanguage = useCallback((value) => {
        changeLanguage(value);
    }, [])

    return (
        <View style={styles.mainLayout}>
            <View style={styles.languagesList}>
                {Object.keys(LANGUAGES).map((item, index) => {
                    return (
                        <Pressable
                            key={index}
                            style={styles.toggleLanguage}
                            onPress={() => handleChangeLanguage(item)}>
                                <Text style={[styles.toggleLanguageText, item === currentLanguage && styles.selectedLanguageText]}>
                                   {LANGUAGES[item]}
                                </Text>
                        </Pressable>
                    )
                })}
            </View>
            
            <LoginImage style={styles.loginImage} />
            <Text style={styles.welcomeText}>{t('welcome back')}</Text>

            <View style={styles.sendForm}>
                <Text style={styles.loginTip}>{t('welcome tip')}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={t('your email')}
                    placeholderTextColor='#fff' />
                <TextInput
                    style={styles.input}
                    placeholder={t('your password')}
                    placeholderTextColor='#fff' />

                <Pressable style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>{t('log in')}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default React.memo(LoginScreen);

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0A0171',
    },
    languagesList: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    toggleLanguage: {
       padding: 5
    },
    toggleLanguageText: {
        color: '#fff',
        fontSize: 20
    },
    selectedLanguageText: {
        color: 'yellow'
    },
    sendForm: {
        alignContent: 'stretch',
        paddingHorizontal: 36
    },
    welcomeText: {
        color: '#fff',
        marginBottom: 27,
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'capitalize',
        alignSelf: 'center'
    },
    loginImage: {
        width: 100,
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        alignSelf: 'center',
        marginBottom: 24
    },
    loginTip: {
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 14,
        height: 50,
        marginBottom: 20
    },
    input: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 12,
        marginBottom: 0,
        color: '#fff',
        paddingHorizontal: 20,
        fontSize: 16
    },
    sendButton: {
        marginTop: 20,
        backgroundColor: '#2BC990',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    }
})
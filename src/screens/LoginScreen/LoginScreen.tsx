import { useLocalization } from '../../shared/hooks/useLocalization';
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import LoginImage from './assets/login-image.svg';

const LoginScreen = () => {

    const { t, currentLanguage, changeLanguage } = useLocalization();

    const handleChangeLanguage = () => {
        changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
    }

    return (
        <View style={styles.mainLayout}>
            <Pressable style={styles.toggleLanguage}onPress={handleChangeLanguage}>
                <Text style={styles.toggleLanguageText}>ru|en</Text>
            </Pressable>
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

export default LoginScreen;

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0A0171',
    },
    toggleLanguage: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    toggleLanguageText: {
        color: '#fff',
        fontSize: 20
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
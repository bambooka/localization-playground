import { useLocalization } from '../../shared/hooks/useLocalization';
import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
    const { t } = useLocalization();
    return (
        <View>
            <Text>{t('welcome')}</Text>
        </View>
    )
}

export default HomeScreen;
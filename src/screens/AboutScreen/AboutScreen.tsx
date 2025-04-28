import { useLocalization } from '../../shared/hooks/useLocalization';
import React from 'react';
import { View, Text } from 'react-native';

const AboutScreen = () => {

    const { t } = useLocalization();

    return(
        <View>
            <Text>{t('about')}</Text>
        </View>
    )
}

export default AboutScreen
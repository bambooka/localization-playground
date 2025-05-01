import { useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../shared/hooks/redux';
import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
    const route = useRoute()
    const {users} = useAppSelector(state => state.user)

    const data = users.find((u) => u.id === route.params.id)
    return (
        <View>
            <Text>{data?.name}</Text>
        </View>
    )
}

export default ProfileScreen;
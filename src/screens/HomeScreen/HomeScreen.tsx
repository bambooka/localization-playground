import React from 'react';
import {View} from 'react-native';
import TodoList from '@entities/Todo/ui/TodoList';

const HomeScreen = () => {

    return (
        <View>
            <TodoList />
        </View>
    )
}

export default HomeScreen;
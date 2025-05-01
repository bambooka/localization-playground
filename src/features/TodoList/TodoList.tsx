import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux';
import { getAllTodos } from '../../app/reducers/TodosActionCreators';
import TodoItem from './components';

const TodoList = () => {

    const dispatch = useAppDispatch();
    const { isLoading, todos, error } = useAppSelector(state => state.todos)

    useEffect(() => {
        dispatch(getAllTodos())
    }, []);

    if (isLoading) {
        return <Text>loading..</Text>
    }

    if (error) return <Text>smth went wrong</Text>

    return (
        <ScrollView style={styles.todoListWrapper}>
            {todos.map((item) => (
                <TodoItem key={item.id} data={item} />
            ))}
        </ScrollView>
    )
}

export default TodoList;

const styles = StyleSheet.create({
    todoListWrapper: {
        paddingHorizontal: 20
    }
})
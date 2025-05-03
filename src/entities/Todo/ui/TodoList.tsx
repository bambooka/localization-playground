import { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { getAllTodos } from '@entities/Todo/model/TodosActionCreators';
import TodoItem from '@entities/Todo/ui/TodoItem';
import { useNavigation } from '@react-navigation/native';
import PlusIcon from '@shared/assets/svg/plus.svg'
import { useGetTodosQuery } from '../../../features/add-todo/api/todoApi';

const TodoList = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const {isLoading, data, error} = useGetTodosQuery()


    useEffect(() => {
        dispatch(getAllTodos())
    }, []);

    const handleCreateTodo = () => {
        navigation.navigate('TodoScreen')
    }

    if (isLoading) {
        return <Text>loading..</Text>
    }

    if (error) return <Text>smth went wrong</Text>

    return (
        <View>
            <ScrollView style={styles.todoList}>
                {data.map((item) => (
                    <TodoItem key={item.id} data={item} />
                ))}
            </ScrollView>
            <Pressable
                style={styles.createButton}
                onPress={handleCreateTodo}
            >
                <PlusIcon fill='#fff' />
            </Pressable>
        </View>
        
    )
}

export default TodoList;

const styles = StyleSheet.create({
    todoList: {
        paddingHorizontal: 20
    },
    createButton: {
        position: 'absolute',
        backgroundColor: 'blue',
        bottom: '5%',
        right: '10%',
        padding: 15,
        borderRadius: 100
    }
})
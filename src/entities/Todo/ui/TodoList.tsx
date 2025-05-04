import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import TodoItem from '@entities/Todo/ui/TodoItem';
import { useNavigation } from '@react-navigation/native';
import PlusIcon from '@shared/assets/svg/plus.svg'
import { useGetTodosQuery } from '../../../features/add-todo/api/todoApi';

const TodoList = () => {
    const navigation = useNavigation();
    const {isLoading, data, error} = useGetTodosQuery()


    const handleCreateTodo = () => {
        navigation.navigate('TodoScreen', {isEdit: false})
    }

    if (isLoading) {
        return <Text>loading..</Text>
    }

    if (error) return <Text>{error}</Text>

    return (
        <View style={{position: 'relative'}}>
            <ScrollView style={styles.todoList}>
                {data.map((item) => (
                    <TodoItem key={`todo-item-${item.id}`} data={item} />
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
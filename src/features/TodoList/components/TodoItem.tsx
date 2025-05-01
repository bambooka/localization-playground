import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useAppDispatch } from '../../../shared/hooks/redux';
import { deleteTodo, editTodo } from '../../../app/reducers/TodosActionCreators';

const TodoItem: FC = ({data}) => {

    const dispatch = useAppDispatch();
    const {navigate} = useNavigation();

    const handleDeleteTodo = () => {
        console.log('delete')
        dispatch(deleteTodo(data.id))
    };

    const handleEditTodo = () => {
        console.log('edit');
        const updated = { title: 'new'}
        dispatch(editTodo({id: data.id, data: updated}))
    };

    return(
        <View style={styles.todoItem}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.todoItemText}>{data.title}</Text>
            <Pressable onPress={handleDeleteTodo} style={[styles.button,styles.deleteButton]}>
                <Text>X</Text>
            </Pressable>
            <Pressable onPress={handleEditTodo} style={[styles.button,styles.editButton]}>
                <Text>P</Text>
            </Pressable>
        </View>
    )
}

export default TodoItem;

const styles = StyleSheet.create({
    todoItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        marginVertical: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#123885',
        borderWidth: 1

    },
    todoItemText: {
        color: '#123885',
        flexGrow: 1,
        maxWidth: '85%',
    },
    button: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
        borderRadius: 10,

    },
    deleteButton: {
        backgroundColor: 'red'
    },
    editButton: {
        backgroundColor: 'yellow'
    }
})
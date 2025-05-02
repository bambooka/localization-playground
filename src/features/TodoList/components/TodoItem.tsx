import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppDispatch } from '@shared/hooks/redux';
import { deleteTodo } from '../../../app/reducers/TodosActionCreators';
import Button from '@shared/components/Button';
import EditIcon from '../../../shared/assets/svg/edit.svg';
import DeleteIcon from '../../../shared/assets/svg/delete.svg';

const TodoItem: FC = ({data}) => {

    const dispatch = useAppDispatch();
    const {navigate} = useNavigation();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(data.id))
    };

    const handleEditTodo = () => {
        navigate('TodoScreen', { data, isEdit: true })
    };

    return(
        <View style={styles.todoItem}>
            <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                style={styles.todoItemText}>
                    {data.title}
            </Text>
            <Button
                handlePress={handleDeleteTodo}
                styles={{button: {...styles.button, ...styles.deleteButton}}}>
                    <DeleteIcon fill="#fff" width='24' height='24' />
                </Button>
            <Button
                handlePress={handleEditTodo}
                styles={{button: { ...styles.button, ...styles.editButton}}}>
                    <EditIcon fill="#fff" width='24' height='24' />
                </Button>
        </View>
    )
}

export default React.memo(TodoItem);

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
        maxWidth: '70%',
    },
    button: {
        paddingHorizontal: 8,
        marginHorizontal: 5,
        borderRadius: 10,

    },
    deleteButton: {
        backgroundColor: '#ff1100'
    },
    editButton: {
        backgroundColor: '#09ddaa'
    }
})
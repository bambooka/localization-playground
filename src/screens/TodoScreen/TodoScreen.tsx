import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoForm from '@features/todo-form/ui/TodoForm';

const TodoScreen = () => {
    return (
        <View style={styles.todoForm}>
            <TodoForm />
        </View>
    )
}

export default TodoScreen;

const styles = StyleSheet.create({
    todoForm: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    title: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#123885',
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    todoActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 36,
        paddingVertical: 8,
        borderRadius: 5,
        marginTop: 8

    },
    buttonText: {
        color: '#fff',
    },
    saveButton: {
        backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'blue'
    }
})
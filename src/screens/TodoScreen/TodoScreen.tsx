import { createTodo, editTodo } from '../../app/reducers/TodosActionCreators';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppDispatch } from '../../shared/hooks/redux';
import { useNavigation, useRoute } from '@react-navigation/native';

const TodoScreen = () => {
    const dispatch = useAppDispatch();
    const route = useRoute();
    const { goBack } = useNavigation()
    const inputTitleRef = useRef<TextInput>();
    const data = route.params;
    const isEdit = data?.isEdit;

    const [inputValue, setInputValue] = useState('')

    const initForm = () => {
        if (isEdit) {
            setInputValue(route.params.data.title);
            inputTitleRef.current?.focus();
        } 
    }

    const handleSubmit = async () => {
        isEdit ? update() : create();
        goBack()
    }

    const update = () => {
        const updated = { title: inputValue}
        dispatch(editTodo({id: data.id, data: updated}))
    }

    const create = () => {
        dispatch(createTodo({title: inputValue, userId: 1}))
    }

    useLayoutEffect(() => {
        initForm()
    }, [])

    const handleChange = (text) => {
        setInputValue(text);
    }

    return (
        <View style={styles.todoForm}>
            <Text style={styles.title}>{isEdit ? 'Edit todo' : 'Create new todo'}</Text>
            <TextInput
                style={styles.textInput}
                ref={inputTitleRef}
                value={inputValue}
                placeholder='input your todos title'
                onChangeText={handleChange}    
            />
            <View style={styles.todoActionContainer}>
                <Pressable style={[styles.button, styles.cancelButton]} onPress={goBack}>
                    <Text style={[styles.buttonText]}>cancel</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.saveButton]} onPress={handleSubmit}>
                    <Text style={[styles.buttonText]}>save</Text>
                </Pressable>
            </View>
            
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
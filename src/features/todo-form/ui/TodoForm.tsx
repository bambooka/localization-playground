import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from '@shared/components/Button'
import { useRoute, useNavigation } from "@react-navigation/native";
import { useRef, useState, useLayoutEffect } from "react";
import { useAddTodoMutation } from "../../../features/add-todo/api/todoApi";

const TodoForm = () => {
    const { goBack } = useNavigation()
    const inputTitleRef = useRef<TextInput>();
    const route = useRoute();
    const { isEdit, data } = route.params;
   
    const [addTodo] = useAddTodoMutation();

    const [inputValue, setInputValue] = useState('')

    const initForm = () => {
        if (isEdit) {
            setInputValue(data.title);
            inputTitleRef.current?.focus();
        }
    }

    const handleSubmit = async () => {
        await addTodo({ title: inputValue }).unwrap()
        console.log('call in component')
        goBack()
    }

    useLayoutEffect(() => {
        initForm()
    }, [])

    const handleChange = (text: string) => {
        setInputValue(text);
    }

    return (
        <View>

            <TextInput
                style={styles.textInput}
                ref={inputTitleRef}
                value={inputValue}
                placeholder='input your todos title'
                onChangeText={handleChange}
            />
            <View style={styles.todoActionContainer}>
                <Button
                    handlePress={goBack}
                    styles={{ button: { ...styles.button, ...styles.cancelButton } }}>
                    <Text style={styles.buttonText}>cancel</Text>
                </Button>
                <Button
                    disabled={inputValue.length === 0}
                    handlePress={handleSubmit}
                    styles={{ button: { ...styles.button, ...styles.saveButton } }}>
                    <Text style={styles.buttonText}>save</Text>
                </Button>

            </View>
        </View>
    )
}

export default TodoForm;

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
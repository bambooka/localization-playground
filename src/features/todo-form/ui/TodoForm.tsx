import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from '@shared/components/Button'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRef, useState, useLayoutEffect } from "react";

const TodoForm = ({ onSubmit }) => {
    const route = useRoute();
    const data = route.params.data;
    const { goBack } = useNavigation()
    const inputTitleRef = useRef<TextInput>();
    const isEdit = Boolean(data)

    const [inputValue, setInputValue] = useState('')

    const initForm = () => {
        isEdit && setInputValue(data?.title);
        inputTitleRef.current?.focus();
    
    }
    const handlePress = async () => {
        const queryData = isEdit ? { todoId: data.id, updateValue: inputValue} : inputValue
        
        try {
            await onSubmit(queryData);
        } catch (e) {
            console.log('submit error', e)
        }
    };
    

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
                    disabled={inputValue?.length === 0}
                    handlePress={handlePress}
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
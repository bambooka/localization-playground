import { useNavigation } from "@react-navigation/native";
import { useAddTodoMutation } from "../../../entities/Todo/model/todoApi";
import TodoForm from "../../todo-form/ui/TodoForm";

const AddTodoForm = () => {
    const { goBack } = useNavigation()
    const [addTodo] = useAddTodoMutation();

    const handleSubmit = async (inputValue: string) => {
        try {
            await addTodo({ title: inputValue });
            goBack()
        } catch (err) {
            console.log(err);
        }
        
    }

    return (
        <TodoForm onSubmit={handleSubmit} />
    )
}

export default AddTodoForm;
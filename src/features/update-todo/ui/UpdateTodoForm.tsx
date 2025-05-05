import { useNavigation } from "@react-navigation/native";
import { useUpdateTodoMutation } from "../../../entities/Todo/model/todoApi";
import TodoForm from "../../todo-form/ui/TodoForm";


const UpdateTodoForm = () => {
    const { goBack } = useNavigation();
    const [updateTodo] = useUpdateTodoMutation();
    const handleUpdate = async ({ todoId, updateValue }) => {
        console.log('olo', { todoId: todoId, title: updateValue})
        await updateTodo({ todoId: todoId, title: updateValue}).unwrap();
        goBack()
    }

    return (
        <TodoForm onSubmit={handleUpdate} />
    )
}

export default UpdateTodoForm;
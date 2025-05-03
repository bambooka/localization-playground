import { createTodo } from "@entities/Todo/model/TodosActionCreators"
import { useAppDispatch } from "@shared/hooks/redux"

export const useAddTodo = () => {
    const dispatch = useAppDispatch()

    const addTodo = ({ id, title }) => {
        dispatch(createTodo({ title, userId: id }))
    }

    return { addTodo }
}
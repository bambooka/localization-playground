import api from "../axios"

export class ToDoEndpoint {
    static getAllTodos = () => {
        return api.get('/todos?userId=1');
    };
    static getTodo = (id: string) => {
        return api.get(`todos/${id}`);
    }
    static deleteTodo = (id: number) => {
        return api.delete(`todos/${id}`);
    }
    static editTodo = ({id, data}) => {
        return api.patch(`/todos/${id}`, data)
    }
    static createTodo = (data) => {
        return api.post('/todos', data);
    }
}
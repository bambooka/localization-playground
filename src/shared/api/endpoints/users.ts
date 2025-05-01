import api from "../axios"

export class UsersEndpoint {
    static getAllUsers = () => {
        return api.get<IUser[]>('/users')
    }
}
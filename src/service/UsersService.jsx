import { baseService } from "./baseService";

export class UsersService extends baseService {
    constructor() {
        super();
    }

    login = (user) => {
        return this.post(`users/login`, user)
    }

    register = (user)=>{
        return this.post('users/register', user)
    }

    getAllUsers =()=>{
        return this.get('users/get-all-user')
    }

    editTypeUser = (id, user)=>{
        return this.put(`users/edit-type-user/${id}`, user)
    }

    deleteUser=(id)=>{
        return this.delete(`users/delete-user/${id}`)
    }
}

export const usersService = new UsersService();
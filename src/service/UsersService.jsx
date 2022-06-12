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

    editUserClient=(user)=>{
        return this.put('users/edit-userName', user)
    }

    uploadAvatar =(avatar)=>{
        return this.post('users/upload-avatar', avatar)
    }

    deleteAccount=(id)=>{
        return this.delete(`users/delete-account/${id}`)
    }
}

export const usersService = new UsersService();
import { baseService } from "./baseService";

export class CommandService extends baseService {
    constructor() {
        super()
    }

    getAllCommand = (key) => {
        return this.get(`commands/get-all-command?setup=${key}`)
    }

    createCommand = (command) => {
        return this.post(`/commands/create-command`, command)
    }

    editCommand=(id, command)=>{
        return this.put(`commands/edit-command/${id}`, command)
    }

    deleteCommand=(id)=>{
        return this.delete(`commands/delete-command/${id}`)
    }
}

export const commandService = new CommandService()
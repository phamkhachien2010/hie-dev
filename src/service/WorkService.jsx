import { baseService } from "./baseService";

export class WorkService extends baseService {

    constructor() {
        super();
    }

    createWork = (work) => {
        return this.post('works/create-work', work)
    }

    getAllWork = ()=>{
        return this.get('works/get-all-works')
    }

    ediWork =(id, workEdit)=>{
        return this.put(`/works/edit-work/${id}`, workEdit)
    }

    deleteWork=(id)=>{
        return this.delete(`works/delete-work/${id}`)
    }
}

export const workService = new WorkService()
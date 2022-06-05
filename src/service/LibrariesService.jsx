import { baseService } from "./baseService";


export class LibrariesService extends baseService {
    constructor() {
        super();
    }

    getAllLibraries = (key) => {
        return this.get(`libraries/get-all-libraries?description=${key}`)
    }

    createLibrary = (library)=>{
        return this.post('libraries/create-library', library)
    }

    editLibrary = (id, library)=>{
        return this.put(`libraries/edit-libraries/${id}`, library)
    }

    deleteLibrary=(id)=>{
        return this.delete(`/libraries/delete-libraries/${id}`)
    }
}

export const librariesService = new LibrariesService();
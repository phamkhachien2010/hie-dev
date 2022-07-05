import { baseService } from "./baseService";

export class LodashService extends baseService {
    constructor() {
        super();
    }

    getAllLodashMethods = (description) => {
        return this.get(`lodash/get-all-lodash-methods?description=${description}`)
    }
}

export const lodashService = new LodashService()
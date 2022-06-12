import { baseService } from "./baseService";


export class CommentService extends baseService{
    constructor(){
        super();
    }

    sendComment =(comment)=>{
        return this.post('comments/send-comment', comment)
    }

    getAllComment =()=>{
        return this.get('comments/get-all-comment')
    }

    deleteComment=(id)=>{
        return this.delete(`comments/delete-comment/${id}`)
    }
}

export const commentService = new CommentService()
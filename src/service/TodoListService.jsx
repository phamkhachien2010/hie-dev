import { baseService } from "./baseService";

export class TodoListService extends baseService{

    constructor() {
        super();
    }

    createTodo=(todo)=>{
        return this.post('todo/create-todo',todo)
    }

    getallTodoLists = ()=>{
        return this.get('todo/get-all-todo')
    }

    editTodoList = (id, todoList)=>{
        return this.put(`todo/edit-todo/${id}`, todoList)
    }

    deleteTodoList = (id)=>{
        return this.delete(`todo/delete-todo/${id}`)
    }
}

export const todoListService = new TodoListService()
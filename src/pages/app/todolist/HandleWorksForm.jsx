import { Button, Form, Input, Select } from 'antd'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_WORK } from '../../../redux/constant/ConstantSaga';


const { Option } = Select;

export default function HandleWorksForm() {
    const { userLogin } = useSelector(state => state.UserReducer);
    const { listTodo } = useSelector(state => state.TodoListReducer);

    const dispatch = useDispatch();

    const handleChangeSelect = (name) => {
        return (value) => {
            fomikWork.setFieldValue(name, value)
        }
    }

    const fomikWork = useFormik({
        initialValues: {
            name: '',
            description: '',
            work: ''
        },
        onSubmit: values => {
            const { name, description, work } = values;
            const listTodo = getListTodoByUserId();
            const todo = listTodo.filter((todo) => todo.title === work);
            const todoListId = todo[0]?.id
            dispatch({
                type: CREATE_WORK,
                work: {
                    name,
                    description,
                    todoListId
                }
            })
        }
    })


    const rederMucCanLam = () => {
        return getListTodoByUserId()?.map((todo, index) => {
            const todoListId = todo.id
            return <Option key={index} id={todoListId} value={todo.title}>{todo.title}</Option>
        })
    }


    const getListTodoByUserId = () => {
        const { id } = userLogin;
        const listTodoByUserId = listTodo.filter((todo) => todo.userId === id);
        return listTodoByUserId
    }

    return (
        <Form
            onSubmitCapture={fomikWork.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 18,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >

            <Form.Item
                name="title"
                label="Mục cần làm"
                rules={[
                    {
                        required: true,
                        message: 'Thêm mục cần làm!',
                    },
                ]}
            >
                <Select name='work' onChange={handleChangeSelect('work')} placeholder="Chọn mục cần làm">
                    {rederMucCanLam()}
                </Select>
            </Form.Item>

            <Form.Item
                label="Tên việc cần làm"
                name="work"
                rules={[
                    {
                        required: true,
                        message: 'Nhập việc cần làm!',
                    },
                ]}
            >
                <Input name='name' onChange={fomikWork.handleChange} placeholder='Thêm việc cần làm' />
            </Form.Item>

            <Form.Item
                label="Ghi chú"
                name="desc"
            >
                <Input.TextArea name='description' onChange={fomikWork.handleChange} placeholder='Nhập ghi chú' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 20,
                    span: 2,
                }}
            >
                <Button type="primary" htmlType="submit" >
                    Thêm việc
                </Button>
            </Form.Item>
        </Form>
    )
}

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

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 7,
            },
            lg: {
                span: 4
            }
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
            lg: {
                span: 18
            }
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 12,
                offset: 12,
            },
            sm: {
                span: 12,
                offset: 12,
            },
        },
    };

    return (
        <Form
            onSubmitCapture={fomikWork.handleSubmit}
            {...formItemLayout}
            autoComplete="off"
        >

            <Form.Item
                name="title"
                label="M???c c???n l??m"
                rules={[
                    {
                        required: true,
                        message: 'Th??m m???c c???n l??m!',
                    },
                ]}
            >
                <Select name='work' onChange={handleChangeSelect('work')} placeholder="Ch???n m???c c???n l??m">
                    {rederMucCanLam()}
                </Select>
            </Form.Item>

            <Form.Item
                label="T??n vi???c c???n l??m"
                name="work"
                rules={[
                    {
                        required: true,
                        message: 'Nh???p vi???c c???n l??m!',
                    },
                ]}
            >
                <Input name='name' onChange={fomikWork.handleChange} placeholder='Th??m vi???c c???n l??m' />
            </Form.Item>

            <Form.Item
                label="Ghi ch??"
                name="desc"
            >
                <Input.TextArea name='description' onChange={fomikWork.handleChange} placeholder='Nh???p ghi ch??' />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" >
                    Th??m vi???c
                </Button>
            </Form.Item>
        </Form>
    )
}

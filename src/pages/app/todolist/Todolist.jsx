import React, { useEffect } from 'react';
import { Button, DatePicker, Dropdown, Form, Input, Menu, Select } from 'antd';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import date from 'date-and-time'
import { CREATE_TODOLIST, GET_ALL_TODOLIST_SAGA } from '../../../redux/constant/ConstantSaga';
import HandleWorksForm from './HandleWorksForm';
import { SET_LIST_TODO_BY_ID } from '../../../redux/constant/ConstantReducer';
import styleTodoList from './todoList.module.css'
import { TOKEN, USER_LOGIN } from '../../../util/setting/config';
import { history } from '../../../App'


const { RangePicker } = DatePicker;

export default function Todolist() {

    const { userLogin } = useSelector(state => state.UserReducer);
    const { listTodo } = useSelector(state => state.TodoListReducer);
    const dispatch = useDispatch();

    const getListtoDoById = () => {
        return listTodo?.filter((todo) => todo.userId === userLogin.id);
    }

    const listTodoById = getListtoDoById()

    useEffect(() => {

        dispatch({
            type: GET_ALL_TODOLIST_SAGA
        })

        return () => {

        }
    }, [])


    const handleChangRangePicker = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            rangePicker: '',
        },
        onSubmit: values => {
            const { id } = userLogin
            const { title, rangePicker } = values
            const from = date.format(rangePicker[0]._d, 'YYYY/MM/DD');
            const to = date.format(rangePicker[1]._d, 'YYYY/MM/DD');
            const todo = {
                title,
                from,
                to,
                userId: id
            }
            dispatch({
                type: CREATE_TODOLIST,
                todo
            })
        },
    });


    const menu = () => {
        return <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <span className='cursor-default bg-stone-500 p-2'>
                            {userLogin.userName}
                        </span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to='/profile' >
                            Quản lý tài khoản
                        </NavLink>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <div className='hover:underline' onClick={() => {
                            localStorage.setItem(TOKEN, '');
                            localStorage.setItem(USER_LOGIN, '')
                            history.push('/')
                        }}>
                            Đăng xuất
                        </div>
                    ),
                },
            ]}
        />
    }

    const rangeConfig = {
        rules: [
            {
                type: 'array',
            },
        ],
    };

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

    const bgTodoList = require('../../../assets/img/bg-todolist.jpg')

    return (
        <div className={styleTodoList.todoList__content}>
            <div className='' style={{ backgroundImage: `url(${bgTodoList})`, backgroundSize: '100%' }}>
                <div className="w-4/5 m-auto todolist__form h-full relative" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h1 className='text-2xl lg:text-5xl text-center text-white font-bold pt-4'>TodoList</h1>

                    <div className={styleTodoList.user_avatar}>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <div>
                                <img src={userLogin.avatar} className={styleTodoList.user_avatar_img} alt="" />
                            </div>
                        </Dropdown>
                    </div>

                    <h2 className='text-xl lg:text-3xl text-center text-white font-bold'>Thêm việc lớn cần làm</h2>
                    <Form
                        {...formItemLayout}
                        name="basic"
                        onSubmitCapture={formik.handleSubmit}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên mục cần làm"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập mục cần làm!',
                                },
                            ]}
                        >
                            <Input name='title' onChange={formik.handleChange} placeholder='Thêm mục cần làm' />
                        </Form.Item>

                        <Form.Item
                            label="Thời gian thực hiện"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thêm thời gian làm!',
                                },
                            ]}
                            {...rangeConfig}>
                            <RangePicker name="rangePicker" onChange={handleChangRangePicker('rangePicker')} />
                        </Form.Item>


                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Thêm việc
                            </Button>
                        </Form.Item>
                    </Form>

                    <h2 className='text-xl lg:text-2xl text-center text-white font-bold pt-2'>Thêm những việc nhỏ cần làm</h2>
                    <HandleWorksForm />

                    <div className='text-right pr-5 pt-2' onClick={() => {
                        dispatch({
                            type: SET_LIST_TODO_BY_ID,
                            listTodoById
                        })
                    }} >
                        <NavLink className='text-sm md:text-xl' to='/app/todolist-manager'>Xem danh sách việc <i className="fa fa-arrow-right"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

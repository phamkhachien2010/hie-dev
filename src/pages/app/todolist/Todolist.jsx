import React, { useEffect } from 'react';
import { Button, DatePicker, Dropdown, Form, Input, Menu, Select } from 'antd';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import date from 'date-and-time'
import { CREATE_TODOLIST, GET_ALL_TODOLIST_SAGA } from '../../../redux/constant/ConstantSaga';
import HandleWorksForm from './HandleWorksForm';
import { SET_LIST_TODO_BY_ID } from '../../../redux/constant/ConstantReducer';

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
                        <NavLink rel="noopener noreferrer" to="/">
                            Quản lý tài khoản
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink rel="noopener noreferrer" to="/">
                            Đăng xuất
                        </NavLink>
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

    const bgTodoList = require('../../../assets/img/bg-todolist.jpg')

    return (
        <div style={{ paddingTop: '112px' }}>
            <div className='h-screen' style={{ backgroundImage: `url(${bgTodoList})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                <div className="container todolist__form h-full relative" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h1 className='text-5xl text-center text-white font-bold pt-4'>TodoList</h1>

                    <div className='absolute top-5 right-52'>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <div>
                                <img src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" className='rounded-full' style={{ width: '50px' }} alt="" />
                            </div>
                        </Dropdown>
                    </div>

                    <h2 className='text-3xl text-center text-white font-bold pt-2'>Thêm việc lớn cần làm</h2>
                    <Form
                        name="basic"
                        onSubmitCapture={formik.handleSubmit}
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

                        <Form.Item label="Thời gian thực hiện" {...rangeConfig}>
                            <RangePicker name="rangePicker" onChange={handleChangRangePicker('rangePicker')} />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 20,
                                span: 2,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Thêm việc
                            </Button>
                        </Form.Item>
                    </Form>

                    <h2 className='text-2xl text-center text-white font-bold pt-2'>Thêm những việc nhỏ cần làm</h2>
                    <HandleWorksForm />

                    <div className='text-right pr-5 pt-5' onClick={() => {
                        dispatch({
                            type: SET_LIST_TODO_BY_ID,
                            listTodoById
                        })
                    }} >
                        <NavLink className='text-xl' to='/app/todolist-manager'>Xem danh sách việc <i className="fa fa-arrow-right"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

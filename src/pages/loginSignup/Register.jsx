import { Button, Checkbox, Form, Input } from 'antd'
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { REGISTER_API } from '../../redux/constant/ConstantSaga';


const logoImg = require('../../assets/img/logo-dark.png')

export default function Register() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            dispatch({
                type: REGISTER_API,
                user: values
            })
        },
    });

    return (
        <div className='flex flex-col justify-center py-5'>
            <div className='text-center mb-5'>
                <img src={logoImg} className='rounded-full inline-block' style={{ width: '100px' }} alt="logo" />
            </div>
            <div className='w-1/2 m-auto p-5' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <h1 className='text-white font-bold text-center text-2xl mb-3'>REGISTER</h1>
                <h2 className='text-center mb-3'>If you do not already have an account! <i className="fa fa-arrow-down"></i></h2>
                <Form
                    onSubmitCapture={formik.handleSubmit}
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Username"
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name='userName' onChange={formik.handleChange} placeholder='Input your userName' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name='passWord'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password name="password" onChange={formik.handleChange} placeholder='Input your password' />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['passWord']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('passWord') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password name="confirmPassword" onChange={formik.handleChange} placeholder='Retype your password' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 4,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div className='text-center'>
                    <h2>If you already have an account?</h2>
                    <NavLink className='inline-block hover:text-white' to='/login'>Login here</NavLink>
                </div>
            </div>
        </div>
    )
}
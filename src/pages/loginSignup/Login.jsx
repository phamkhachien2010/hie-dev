import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { LOGIN_API } from '../../redux/constant/ConstantSaga';



const logoImg = require('../../assets/img/logo-dark.png')
export default function Login() {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: values => {
            dispatch({
                type: LOGIN_API,
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
                <h1 className='text-white font-bold text-center text-2xl mb-3'>LOGIN</h1>
                
                <Form
                    onSubmitCapture={formik.handleSubmit}
                    name="basic"
                    labelCol={{
                        span: 4,
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
                        <Input onChange={formik.handleChange} name='userName' placeholder='Input your userName' />
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
                        <Input.Password onChange={formik.handleChange} name='password' placeholder='Input your password' />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 4,
                            span: 8,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 4,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div className='text-center'>
                    <h2>Are you have an account?</h2>
                    <NavLink className='inline-block hover:text-white' to='/register'>Register here</NavLink>
                </div>
            </div>
        </div>
    )
}
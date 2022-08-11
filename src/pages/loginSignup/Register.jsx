import { Button, Form, Input } from 'antd'
import { useFormik } from 'formik';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { REGISTER_API } from '../../redux/constant/ConstantSaga';
import styleLogin from './loginSignup.module.css'


const logoImg = require('../../assets/img/logo-dark.png')

export default function Register() {
    const dispatch = useDispatch();
    const { t } = useTranslation()

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
                span: 16,
            },
            lg: {
                span: 18
            }
        },
    };


    return (
        <div className='flex flex-col justify-center py-5'>
            <div className='text-center mb-5'>
                <img src={logoImg} className={styleLogin.hie_logo} alt="logo" />
            </div>
            <div className={`w-3/4 lg:w-1/2 m-auto ${styleLogin.login}`} style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <h1 className='text-white font-bold text-center text-2xl mb-3'>{t('register')}</h1>
                <h2 className='text-center text-xs md:text-base mb-3'>{t('do not account')} <i className="fa fa-arrow-down"></i></h2>
                <Form
                    onSubmitCapture={formik.handleSubmit}
                    name="basic"
                    {...formItemLayout}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label={t('userName')}
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: t('nameValid'),
                            },
                        ]}
                    >
                        <Input name='userName' onChange={formik.handleChange} placeholder={t('input userName')} />
                    </Form.Item>

                    <Form.Item
                        label={t('password')}
                        name='passWord'
                        rules={[
                            {
                                required: true,
                                message: t('password valid'),
                            },
                        ]}
                    >
                        <Input.Password name="password" onChange={formik.handleChange} placeholder={t('input password')} />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label={t('confirm password')}
                        dependencies={['passWord']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: t('confirm pass notifi'),
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('passWord') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error(t('confirm pass valid')));
                                },
                            }),
                        ]}
                    >
                        <Input.Password name="confirmPassword" onChange={formik.handleChange} placeholder={t('input confirm pass')} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 4,
                        }}
                    >
                        <Button className={styleLogin.register_login_here} type="primary" htmlType="submit">
                            <span className='text-base'>
                                {t('register')}
                            </span>
                        </Button>
                    </Form.Item>
                </Form>
                <div className='text-center'>
                    <h2>{t('already have account')}</h2>
                    <NavLink className='inline-block bg-teal-500 hover:text-white px-2 py-2 hover:no-underline' to='/login'>{t('login here')}</NavLink>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { LOGIN_API } from '../../redux/constant/ConstantSaga';
import styleLogin from './loginSignup.module.css'
import { useTranslation } from 'react-i18next';



const logoImg = require('../../assets/img/logo-dark.png')
export default function Login() {

    const dispatch = useDispatch()
    const { t } = useTranslation()

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

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
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
                <h1 className='text-white font-bold text-center text-2xl mb-3'>{t('login')}</h1>

                <Form
                    onSubmitCapture={formik.handleSubmit}
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
                        <Input onChange={formik.handleChange} name='userName' placeholder={t('input userName')} />
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
                        <Input.Password onChange={formik.handleChange} name='password' placeholder={t('input password')} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 4,
                        }}
                    >
                        <Button className={styleLogin.register_login_here} type="primary" htmlType="submit">
                            <span className='text-base'>
                                {t('login')}
                            </span>
                        </Button>
                    </Form.Item>
                </Form>
                <div className='text-center'>
                    <h2>{t('have an account')}</h2>
                    <NavLink className='px-2 py-2 inline-block bg-teal-500 hover:text-white hover:no-underline' to='/register'>{t('register here')}</NavLink>
                </div>
            </div>
        </div>
    )
}

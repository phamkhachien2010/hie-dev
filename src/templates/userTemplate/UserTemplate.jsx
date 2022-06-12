import { Select } from 'antd';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { history } from '../../App'
import { USER_LOGIN } from '../../util/setting/config';
import Swal from 'sweetalert2';

const { Option } = Select

export default function UserTemplate(props) {


    useEffect(() => {
        window.scroll(0, 0)

        return () => {

        }
    }, [])

    const { t, i18n } = useTranslation()


    const { Component, ...restProps } = props;
    const bgLogin = require('../../assets/img/login-background.jpg');
    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }

    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} className='h-screen relative'>

                <div className="items-center flex-shrink-0 hidden sm:flex absolute right-52 top-28">
                    <Select defaultValue="en" style={{ width: 70 }} onChange={handleChange}>
                        <Option value="en">Eng</Option>
                        <Option value="vi">Vie</Option>
                    </Select>
                </div>

                <Component {...propsRoute} />

                <div className='absolute w-100 bottom-10'>
                    <div className='w-1/3 m-auto flex justify-around'>
                        <div>
                            <NavLink className='inline-block' to='/'><i className="fa fa-home"></i></NavLink>
                        </div>
                        <div onClick={() => {
                            if (!localStorage.getItem(USER_LOGIN)) {
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Bạn chưa đăng nhập',
                                    icon: 'error',
                                    confirmButtonText: 'Cool'
                                })
                                history.push('/')                            }
                            
                        }}>
                            <NavLink className='inline-block' to='/app/todolist'>{t('back to todolist')}</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        }}></Route>
    )
}

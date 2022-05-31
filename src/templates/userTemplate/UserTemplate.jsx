import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function UserTemplate(props) {


    useEffect(() => {
        window.scroll(0, 0)

        return () => {

        }
    }, [])


    const { Component, ...restProps } = props;
    const bgLogin = require('../../assets/img/login-background.jpg')

    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} className='h-screen relative'>

                <Component {...propsRoute} />

                <div className='absolute w-100 bottom-10'>
                    <div className='w-1/3 m-auto flex justify-around'>
                        <div>
                            <NavLink className='inline-block' to='/'><i className="fa fa-home"></i></NavLink>
                        </div>
                        <div>
                            <NavLink className='inline-block' to='/about'>About me</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        }}></Route>
    )
}

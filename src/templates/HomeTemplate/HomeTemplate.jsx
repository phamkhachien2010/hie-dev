import React,{ useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function HomeTemplate(props) {


    useEffect(() => {
        window.scroll(0, 0)
    
        return () => {
    
        }
      }, [])
    

    const { Component, ...restProps } = props;

    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div className='dark'>
                <Header {...propsRoute} />

                <Component {...propsRoute} />

                <Footer />

            </div>
        }}></Route>
    )
}

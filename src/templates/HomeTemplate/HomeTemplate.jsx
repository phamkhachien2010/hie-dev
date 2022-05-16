import React from 'react'
import { Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function HomeTemplate(props) {

    const { Component, ...restProps } = props;

    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div className='dark'>
                <Header />

                <Component {...propsRoute} />

                <Footer />

            </div>
        }}></Route>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import styleFooter from "./Footer.module.css";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="px-4 dark:bg-gray-800 dark:text-gray-100">
            <h3 className={`text-white text-center py-3 ${styleFooter.footer__h3}`}>{t('thankyou')}!</h3>
            <div className="w-100 m-auto flex flex-col pb-4 lg:flex-row border-b-2 border-white">
                <div className="lg:w-1/3 m-auto hidden sm:block">
                    <NavLink rel="noopener noreferrer" to="/" className='ml-5 inline-block'>
                        <img style={{ width: '100px' }} src={require('../../../assets/img/logo-dark.png')} alt="logo" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-2 text-sm lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className={`tracking-wide uppercase dark:text-gray-50 ${styleFooter.ul_heading}`}>Dev</h3>
                        <ul className='text-center'>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/dev/frontend">Front-end</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/dev/backend">Back-end</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className={`tracking-wide uppercase dark:text-gray-50 ${styleFooter.ul_heading}`}>{t('app')}</h3>
                        <ul className='text-center'>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/app/todolist">Todo list</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/">Link</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className={`tracking-wide uppercase dark:text-gray-50 ${styleFooter.ul_heading}`}>{t('tech')}</h3>
                        <ul className='text-center'>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/tech/reactjs">ReactJS</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/tech/nodejs">NodeJs</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className={styleFooter.footer_link} to="/tech/github">Git</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className={`uppercase ${styleFooter.ul_heading} dark:text-gray-50`}>{t('social')}</div>
                        <div className="flex justify-center space-x-3 mt-0">
                            <a rel="noopener noreferrer" href='https://www.facebook.com/hien.phamkhac.1656/' target='_blank' title="Facebook" style={{ textDecoration: 'none' }} className="flex items-center p-1">
                                <i className="fab fa-facebook text-lg"></i>
                            </a>
                            <a rel="noopener noreferrer" href="https://github.com/phamkhachien2010" target='_blank' title="Github" style={{ textDecoration: 'none' }} className="flex items-center p-1">
                                <i className="fab fa-github text-lg"></i>
                            </a>
                            <NavLink rel="noopener noreferrer" to="/" title="Linkedin" style={{ textDecoration: 'none' }} className="flex items-center p-1">
                                <i className="fab fa-linkedin-in text-lg"></i>
                            </NavLink>
                            <a className='p-1' rel="noopener noreferrer" href="mailTo:phamkhachien17@gmail.com"><i className="fa fa-envelope text-lg"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">
                © 2022 Copyright by
                <NavLink to='/about' className='text-purple-200 hover:text-purple-200 hover:underline'>
                    Pham Khac Hien.
                </NavLink>
                <span className='text-white ml-2'><i className="fa fa-phone"> 0971948634</i></span>
            </div>
        </footer>
    )
}

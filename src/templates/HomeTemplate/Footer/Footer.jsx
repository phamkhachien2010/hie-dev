import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="px-4 dark:bg-gray-800 dark:text-gray-100">
            <h3 className='text-white text-xl text-center py-3'>Cảm ơn bạn đã dành chút thời gian quý báu của mình để xem hết trang web !</h3>
            <div className="container flex flex-col justify-around py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 border-b-2 border-white">
                <div className="lg:w-1/3 m-auto">
                    <NavLink rel="noopener noreferrer" to="/" className='ml-5 inline-block'>
                    <img style={{ width: '100px' }} src={require('../../../assets/img/logo-dark.png')} alt="logo" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h3 className="tracking-wide text-lg uppercase dark:text-gray-50">Dev</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink rel="noopener noreferrer" className='text-white' to="/dev/frontend">Front-end</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className='text-white' to="/dev/backend">Back-end</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className='text-white' to="/dev/fullstack">Fullstack</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide text-lg uppercase dark:text-gray-50">Ứng dụng</h3>
                        <ul className="space-y-1">
                            <li>
                                <NavLink rel="noopener noreferrer" className='text-white' to="/">Todo list</NavLink>
                            </li>
                            <li>
                                <NavLink rel="noopener noreferrer" className='text-white' to="/">Link</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-lg dark:text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <NavLink rel="noopener noreferrer" to="/" title="Facebook" style={{textDecoration:'none'}} className="flex items-center p-1">
                                <i className="fab fa-facebook text-lg"></i>
                            </NavLink>
                            <NavLink rel="noopener noreferrer" to="/" title="Github" style={{textDecoration:'none'}} className="flex items-center p-1">
                                <i className="fab fa-github text-lg"></i>
                            </NavLink>
                            <NavLink rel="noopener noreferrer" to="/" title="Instagram" style={{textDecoration:'none'}} className="flex items-center p-1">
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

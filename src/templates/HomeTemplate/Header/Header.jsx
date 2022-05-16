import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Space } from 'antd';

const { Search } = Input;

export default function Header() {

    const onSearch = value => console.log(value);

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 w-100">

            <div className="container flex justify-around h-16 mx-auto">
                <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img style={{ width: '50px' }} src="./img/logo-dark.png" alt="logo" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" style={{ textDecoration: 'none' }} className="flex items-center px-4 -mb-1 hover:text-emerald-300 focus:border-b-2">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/frontend" style={{ textDecoration: 'none' }} className="flex items-center px-4 -mb-1 hover:text-emerald-300 focus:border-b-2">Front-end</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/backend" style={{ textDecoration: 'none' }} className="flex items-center px-4 -mb-1 hover:text-emerald-300 focus:border-b-2">Back-end</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/library" style={{ textDecoration: 'none' }} className="flex items-center px-4 -mb-1 hover:text-emerald-300 focus:border-b-2">Library</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Space direction="vertical">
                        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 250 }} />
                    </Space>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>

    )
}

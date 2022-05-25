import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Menu, Dropdown, Space } from 'antd';


export default function Header(props) {

    const [blockHidden, setBlockHidden] = useState('hidden');
    const onSearch = value => console.log(value);

    const activeHeaderHomepage = (path) => {
        const pathFind = props.match.path.indexOf(path)
        if (pathFind !== -1) {
            return 'lg:border-b-2 text-emerald-400 border-b-0'

        }
        return ''
    }

    const menuDev = (
        <Menu
            items={[
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/dev/frontend">Front-end</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/dev/backend">Back-end</NavLink>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
            ]}
        />
    );

    const menuApp = (
        <Menu
            items={[
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/app/todolist">Todo list</NavLink>,
                    key: '0',
                },
                
                {
                    type: 'divider',
                },
            ]}
        />
    );
    const menuTech = (
        <Menu
            items={[
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/reactjs">ReactJs</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/nodejs">NodeJs</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/github">Github</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/mysql">MySQL</NavLink>,
                    key: '0',
                },
                
                {
                    type: 'divider',
                },
            ]}
        />
    );
    const menuOther = (
        <Menu
            items={[
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/cau-hinh-folder-react">Folder reactJs</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/cau-hinh-folder-nodejs">Folder nodeJs</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/library">Library</NavLink>,
                    key: '0',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/lenh-thuong-dung">Lệnh thường dùng</NavLink>,
                    key: '0',
                },
                
                {
                    type: 'divider',
                },
            ]}
        />
    );

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 w-100 fixed z-10">

            <div className="container flex lg:justify-around justify-between h-16 mx-auto">
                <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img style={{ width: '50px' }} src={require('../../../assets/img/logo-dark.png')} alt="logo" />
                </NavLink>
                <ul className={`items-stretch ${blockHidden} space-x-3 lg:flex`}>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" style={{ textDecoration: 'none' }} className={`flex items-center px-4 -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/home')}`}>Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/about" style={{ textDecoration: 'none' }} className={`flex items-center px-4 -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/about')}`}>About me</NavLink>
                    </li>
                    <li className="flex">
                        <Dropdown overlay={menuDev} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center px-4 -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/dev')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    DEV
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>
                    </li>
                    <li className="flex">
                    <Dropdown overlay={menuApp} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center px-4 -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/app')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Ứng dụng
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>                        
                    </li>
                    <li className="flex">
                    <Dropdown overlay={menuTech} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center px-4 -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/tech')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Công nghệ
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>                        
                    </li>
                    <li className="flex">
                    <Dropdown overlay={menuOther} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center px-4 -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/other')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Khác
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>                        
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {/* <Space direction="vertical">
                        <Search placeholder="input search text" onSearch={onSearch} allowClear style={{ width: 250 }} />
                    </Space> */}
                </div>
                <button className="p-4 lg:hidden" onClick={() => {
                    if (blockHidden === 'block') {
                        setBlockHidden('hidden')
                    } else {
                        setBlockHidden('block')
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>

    )
}

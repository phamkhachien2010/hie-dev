import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Space, Select } from 'antd';
import { TOKEN, USER_LOGIN } from '../../../util/setting/config';
import { history } from '../../../App';
import { useTranslation } from 'react-i18next';
import styleHeader from './header.module.css'
import { useSelector } from 'react-redux';


const { Option } = Select
export default function Header(props) {

    const { userLogin } = useSelector(state => state.UserReducer);

    const { t, i18n } = useTranslation()

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
                    label: <div onClick={() => {
                        if (!localStorage.getItem(USER_LOGIN)) {
                            history.push('/login')
                        }
                    }}> <NavLink className="dropdown-item bg-cyan-50 text-black" to="/app/todolist">Todo list</NavLink></div>,
                    key: '0',
                },
                {
                    label: <div> <a className="dropdown-item bg-cyan-50 text-black" href='https://gamepokemon-hie.vercel.app/' target='_blank'>Game Pokemon</a></div>,
                    key: '1',
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
                    key: '1',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/nodejs">NodeJs</NavLink>,
                    key: '2',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/github">Github</NavLink>,
                    key: '3',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/tech/mysql">MySQL</NavLink>,
                    key: '4',
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
                    key: '1',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/cau-hinh-folder-nodejs">Folder nodeJs</NavLink>,
                    key: '2',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/library">Library</NavLink>,
                    key: '3',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/lenh-thuong-dung">Lệnh thường dùng</NavLink>,
                    key: '4',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/cac-phuong-thuc-mang-hay-dung">Array Methods</NavLink>,
                    key: '5',
                },
                {
                    label: <NavLink className="dropdown-item bg-cyan-50 text-black" to="/other/lodash">Lodash array</NavLink>,
                    key: '6',
                },

                {
                    type: 'divider',
                },
            ]}
        />
    );

    const menuUserLog = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <span className='cursor-default bg-stone-500 p-2'>
                            {userLogin.userName}
                        </span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink to='/profile' >
                            Quản lý tài khoản
                        </NavLink>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <div className='hover:underline' onClick={() => {
                            localStorage.setItem(TOKEN, '');
                            localStorage.setItem(USER_LOGIN, '');
                            history.push('/');
                            window.location.reload();
                        }}>
                            Đăng xuất
                        </div>
                    ),
                },
            ]}
        />
    );

    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }

    const renderStockHead = () => {
        if (userLogin.type === 'SUPER_ADMIN') {
            return <li className="flex">
                <NavLink rel="noopener noreferrer" to="/stock" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/stock')}`}>
                    Stock
                </NavLink>
            </li>
        }
        return
    }

    const renderUserLog = () => {
        if (!localStorage.getItem(TOKEN)) {
            return <div>
                <NavLink rel="noopener noreferrer" to="/login" style={{ textDecoration: 'none' }} className={`${styleHeader.headerLink} px-2 py-1 border-2 rounded-lg mr-2`}>
                    {t('login')}
                </NavLink>
                <NavLink rel="noopener noreferrer" to="/register" style={{ textDecoration: 'none' }} className={`${styleHeader.headerLink} px-2 py-1 border-2 rounded-lg mr-2`}>
                    {t('register')}
                </NavLink>
            </div>
        }
        return <div>
            <Dropdown overlay={menuUserLog} className='cursor-pointer'>
                <Space className='mr-2'>
                    <img style={{ width: '50px', borderRadius: '50%' }} src={userLogin.avatar} alt="" />
                </Space>
            </Dropdown>
        </div>

    }

    return (
        <header className="lg:p-5 sm:p-3 dark:bg-gray-800 dark:text-gray-100 w-100 fixed z-10">

            <div className={styleHeader.header__content}>
                <div className="sm:flex items-center p-2 hidden justify-center lg:pb-4">
                    <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" >
                        <img className='rounded-lg' style={{ width: '50px' }} src={require('../../../assets/img/logo-dark.png')} alt="logo" />
                    </NavLink>
                </div>
                <div className="items-center flex-shrink-0 hidden sm:flex absolute right-5">
                    {renderUserLog()}

                    <Select defaultValue="en" style={{ width: 70 }} onChange={handleChange}>
                        <Option value="en">Eng</Option>
                        <Option value="vi">Vie</Option>
                    </Select>
                </div>

                <ul className={`items-stretch space-x-3 flex justify-center`}>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/home')}`}>
                            {t('home')}
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/about" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/about')}`}>
                            {t('about me')}
                        </NavLink>
                    </li>
                    <li className="flex">
                        <Dropdown overlay={menuDev} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/dev')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    DEV
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>
                    </li>
                    <li className="flex">
                        <Dropdown overlay={menuApp} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/app')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {t('app')}
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>
                    </li>
                    <li className="flex">
                        <Dropdown overlay={menuTech} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/tech')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {t('tech')}
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>
                    </li>
                    <li className="flex">
                        <Dropdown overlay={menuOther} trigger={['click']}>
                            <NavLink rel="noopener noreferrer" to="#" style={{ textDecoration: 'none' }} className={`flex items-center ${styleHeader.headerLink} -mb-1 hover:text-emerald-300 ${activeHeaderHomepage('/other')}`} onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {t('other')}
                                    <i className="fa fa-angle-down"></i>
                                </Space>
                            </NavLink>
                        </Dropdown>
                    </li>
                    {renderStockHead()}
                </ul>

            </div>
        </header>

    )
}

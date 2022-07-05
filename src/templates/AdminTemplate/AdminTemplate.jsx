import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Route } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
    UserOutlined,
    BookOutlined,
    HomeOutlined,
    CommentOutlined
} from '@ant-design/icons';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { history } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { SUPER_ADMIN } from '../../util/setting/config';


const { Header, Sider, Content } = Layout;


export default function AdminTemplate(props) {
    const dispatch = useDispatch();
    const { userLogin } = useSelector(state => state.UserReducer);

    if (userLogin.type !== SUPER_ADMIN) {
        Swal.fire({
            title: 'Error!',
            text: 'Bạn không có quyền truy cập trang này!',
            icon: 'error',
            confirmButtonText: 'Cool!'
        })
        history.push('/login')
    }

    useEffect(() => {

        return () => {

        }
    }, [])


    const [collapsed, setCollapsed] = useState(false);

    const { Component, ...restProps } = props;

    return (
        <>
            <Route {...restProps} render={(propsRoute) => {
                return <Layout className='h-screen'>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['-1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: 'User todolist',
                                    onClick: () => {
                                        history.push('/admin/user-manager-todolist')
                                    }
                                },
                                {
                                    key: '2',
                                    icon: <BookOutlined />,
                                    label: 'Library',
                                    onClick: () => {
                                        history.push('/admin/library-manager')
                                    }
                                },
                                {
                                    key: '3',
                                    icon: <CommentOutlined />,
                                    label: 'Info take back',
                                    onClick: () => {
                                        history.push('/admin/info-takeback-manager')
                                    }
                                },
                                {
                                    key: '4',
                                    icon: <InfoCircleOutlined />,
                                    label: 'Terminal command',
                                    onClick: () => {
                                        history.push('/admin/terminal-command')
                                    }
                                },
                            ]}
                        />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background grid grid-cols-10" style={{ padding: 0, }} >

                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger text-left ',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                            <div className='flex justify-around items-center col-span-9'>
                                <NavLink className='text-sky-900 text-2xl' to='/' ><HomeOutlined /></NavLink>
                                <NavLink className='text-sky-900 hover:no-underline' to='/about' >About me</NavLink>
                            </div>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <Component {...propsRoute} />
                        </Content>
                    </Layout>
                </Layout>
            }}></Route>

        </>
    )
}

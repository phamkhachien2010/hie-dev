import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import TodoListDetail from './TodoListDetail';
const { Header, Sider, Content } = Layout;



export default function TodoListManager(props) {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div style={{ paddingTop: '112px' }}>

            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        className="site-layout-background relative"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <TodoListDetail />

                        <div className='absolute right-0 bottom-0 p-2'>
                            <button className='bg-green-400 hover:bg-green-500 px-2 py-1 rounded-lg mr-3 text-white font-bold'>Sửa việc</button>
                            <button className='bg-red-400 hover:bg-red-500 px-2 py-1 rounded-lg mr-3 font-bold'>Xóa việc</button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>

    )
}

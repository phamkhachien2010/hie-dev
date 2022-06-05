import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import { Layout, Menu, Popconfirm } from 'antd';
import TodoListDetail from './TodoListDetail';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TITLE_TODO } from '../../../redux/constant/ConstantReducer';
import { GET_ALL_TODOLIST_SAGA } from '../../../redux/constant/ConstantSaga';
const { Header, Sider, Content } = Layout;


export default function TodoListManager(props) {
    const { userLogin } = useSelector(state => state.UserReducer);
    const { listTodo } = useSelector(state => state.TodoListReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: GET_ALL_TODOLIST_SAGA
        })
        return () => {

        }
    }, [])

    const getListtoDoById = () => {
        return listTodo?.filter((todo) => todo.userId === userLogin.id);
    }

    const listTodoById = getListtoDoById()


    const [collapsed, setCollapsed] = useState(false);

    const createItemsMenu = () => {
        return listTodoById?.map((todo, index) => {
            const title = todo.title
            return {
                key: { index },
                label: { title }
            }
        })
    }

    const renderMenu = () => {
        const itemsMenu = createItemsMenu()
        return itemsMenu.map((item, index) => {
            return {
                key: index,
                icon: <InfoCircleOutlined />,
                label: item.label.title,
                onClick: () => {
                    dispatch({
                        type: SET_TITLE_TODO,
                        titleTodoClick: item.label.title
                    })
                }
            }
        })
    }

    return (
        <div style={{ paddingTop: '112px' }}>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['-1']}
                        items={renderMenu()}
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

                    </Content>
                </Layout>
            </Layout>
        </div>

    )
}

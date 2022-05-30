import React from 'react';
import { Button, DatePicker, Dropdown, Form, Input, Menu, Select } from 'antd';
import { NavLink } from 'react-router-dom';


const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Todolist() {

    const menu = () => {
        return <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <NavLink rel="noopener noreferrer" to="/">
                            Quản lý tài khoản
                        </NavLink>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <NavLink rel="noopener noreferrer" to="/">
                            Đăng xuất
                        </NavLink>
                    ),
                },
            ]}
        />
    }

    const rangeConfig = {
        rules: [
            {
                type: 'array',
            },
        ],
    };

    const bgTodoList = require('../../../assets/img/bg-todolist.jpg')

    return (
        <div style={{ paddingTop: '112px' }}>
            <div className='h-screen' style={{ backgroundImage: `url(${bgTodoList})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                <div className="container todolist__form h-full relative" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h1 className='text-5xl text-center text-white font-bold pt-4'>TodoList</h1>

                    <div className='absolute top-5 right-52'>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <div>
                                <img src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" className='rounded-full' style={{ width: '50px' }} alt="" />
                            </div>
                        </Dropdown>
                    </div>

                    <h2 className='text-3xl text-center text-white font-bold pt-2'>Thêm việc lớn cần làm</h2>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tên mục cần làm"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập mục cần làm!',
                                },
                            ]}
                        >
                            <Input placeholder='Thêm mục cần làm' />
                        </Form.Item>

                        <Form.Item name="range-picker" label="Thời gian thực hiện" {...rangeConfig}>
                            <RangePicker />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 20,
                                span: 2,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Thêm việc
                            </Button>
                        </Form.Item>
                    </Form>

                    <h2 className='text-2xl text-center text-white font-bold pt-2'>Thêm những việc nhỏ cần làm</h2>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >

                        <Form.Item
                            name="title"
                            label="Mục cần làm"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thêm mục cần làm!',
                                },
                            ]}
                        >
                            <Select placeholder="Chọn mục cần làm">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Tên việc cần làm"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập việc cần làm!',
                                },
                            ]}
                        >
                            <Input placeholder='Thêm việc cần làm' />
                        </Form.Item>

                        <Form.Item
                            label="Ghi chú"
                            name="description"
                        >
                            <Input.TextArea placeholder='Nhập ghi chú' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 20,
                                span: 2,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Thêm việc
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className='text-right pr-5 pt-5'>
                        <NavLink className='text-xl' to='/app/todolist-manager'>Xem danh sách việc <i className="fa fa-arrow-right"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

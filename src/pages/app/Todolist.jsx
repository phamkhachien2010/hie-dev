import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Todolist() {

    const bgTodoList = require('../../assets/img/bg-todolist.jpg')

    return (
        <div style={{ paddingTop: '112px' }}>
            <div className='h-screen' style={{ backgroundImage: `url(${bgTodoList})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                <div className="container todolist__form h-full" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <h1 className='text-5xl text-center text-white font-bold pt-4'>TodoList</h1>

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
                            label="Tên việc cần làm"
                            name="username"
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
                            name="password"
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
                </div>
            </div>
        </div>
    )
}

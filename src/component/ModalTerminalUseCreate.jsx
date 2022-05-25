import React from 'react';
import { Button, Modal, Select, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL_TEMINAL_USE } from '../redux/constant/ConstantReducer';

const { Option } = Select;

export default function ModalTerminalUseCreate() {

    const { showModalTerminal } = useSelector(state => state.TerminalInUseReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch({
            type: CLOSE_MODAL_TEMINAL_USE
        })
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_MODAL_TEMINAL_USE
        })
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <Modal title="Basic Modal" visible={showModalTerminal} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên lệnh"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tên lệnh!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Cú pháp"
                        name="cuPhap"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập cú pháp!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mô tả"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mô tả!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="gender" label="Dùng trong" rules={[{ required: true }]}>
                        <Select
                            placeholder="Chọn môi trường dùng"
                            allowClear
                        >
                            <Option value="front-end">Front-end</Option>
                            <Option value="back-end">Back-end</Option>
                            <Option value="both">Cả 2</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

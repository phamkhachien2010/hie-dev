import React from 'react';
import { Button, Modal, Select, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL_TEMINAL_USE } from '../redux/constant/ConstantReducer';
import { useFormik } from 'formik';
import { CREATE_COMMAND_API } from '../redux/constant/ConstantSaga';

const { Option } = Select;

export default function ModalTerminalUseCreate() {

    const { showModalTerminal } = useSelector(state => state.TerminalInUseReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
        formik.handleSubmit()
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_MODAL_TEMINAL_USE
        })
    };

    const handleChaneSelect = (name) => {
        return value => {
            formik.setFieldValue(name, value)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            setup: '',
            description: '',
            type: ''
        },
        onSubmit: values => {
            dispatch({
                type: CREATE_COMMAND_API,
                command: values
            })
        }
    })



    return (
        <>
            <Modal title="Thêm lệnh" visible={showModalTerminal} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên lệnh"
                        name="commandName"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tên lệnh!',
                            },
                        ]}
                    >
                        <Input name='name' onChange={formik.handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Cú pháp"
                        name="commandSetup"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập cú pháp!',
                            },
                        ]}
                    >
                        <Input name='setup' onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Mô tả"
                        name="commandDescription"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mô tả!',
                            },
                        ]}
                    >
                        <Input.TextArea name='description' onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item name="gender" label="Dùng trong" rules={[{ required: true }]}>
                        <Input name='type' onChange={formik.handleChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

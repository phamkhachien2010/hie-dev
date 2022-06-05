import React from 'react'
import { Modal, Select, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL_TEMINAL_EDIT } from '../redux/constant/ConstantReducer';
import { useFormik } from 'formik';
import { EDIT_COMMAND_API } from '../redux/constant/ConstantSaga';

const { Option } = Select;

export default function ModalEditTerminalUse() {

    const { showModalTerminalEdit, commandEdit } = useSelector(state => state.TerminalInUseReducer);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch({
            type: CLOSE_MODAL_TEMINAL_EDIT
        })
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: commandEdit.name,
            setup: commandEdit.setup,
            description: commandEdit.description,
            type: commandEdit.type
        },
        onSubmit: values => {
            const { id } = commandEdit;
            dispatch({
                type: EDIT_COMMAND_API,
                id,
                command: values
            })
        }
    })

    return (
        <>
            <Modal title="Sửa lệnh" visible={showModalTerminalEdit} onOk={formik.handleSubmit} onCancel={handleCancel}>
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
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tên lệnh!',
                            },
                        ]}
                    >
                        <Input name='name' value={formik.values.name} onChange={formik.handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Cú pháp"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập cú pháp!',
                            },
                        ]}
                    >
                        <Input name='setup' value={formik.values.setup} onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Mô tả"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập mô tả!',
                            },
                        ]}
                    >
                        <Input.TextArea name='description' value={formik.values.description} onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="Dùng trong" rules={[{ required: true }]}>
                        <Input name='type' value={formik.values.type} onChange={formik.handleChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

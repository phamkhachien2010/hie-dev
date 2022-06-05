import { Form, Input, Modal, Select } from 'antd'
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_USER_MODAL_EDIT } from '../../redux/constant/ConstantReducer';
import { EDIT_TYPE_USER_API } from '../../redux/constant/ConstantSaga';

const { Option } = Select;

export default function EditUserModal() {

    const { showModalEditUser, userEdit } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    const handleOk = () => {
        formik.handleSubmit()
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_USER_MODAL_EDIT
        })
    };

    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            userName: userEdit.userName,
            type: userEdit.type,
        },
        onSubmit: values => {
            const { id } = userEdit
            dispatch({
                type: EDIT_TYPE_USER_API,
                id,
                user:{
                    type: values.type
                }
            })
        },
    });

    return (
        <Modal title="Chỉnh sửa type of user" visible={showModalEditUser} onOk={handleOk} onCancel={handleCancel}>
            <Form
                onSubmitCapture={formik.handleSubmit}
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
                    label="Tên user"
                    rules={[
                        {
                            required: true,
                            message: 'Nhập tên user!',
                        },
                    ]}
                >
                    <Input name='userName' disabled value={formik.values.userName} onChange={formik.handleChange} />
                </Form.Item>


                <Form.Item label="Type of user" rules={[{ required: true }]}>
                    <Select
                        placeholder="Choose type"
                        allowClear
                        name='type'
                        value={formik.values.type}
                        onChange={handleChangeSelect('type')}
                    >
                        <Option value="Client">Client</Option>
                        <Option value="SUPER_ADMIN">SUPER_ADMIN</Option>
                        <Option value="ADMIN">ADMIN</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

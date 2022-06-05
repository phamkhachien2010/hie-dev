import React from 'react'
import { Modal, Select, Form, Input } from 'antd';
import { CLOSE_WORK_MODAL_EDIT } from '../../redux/constant/ConstantReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { EDIT_WORK_API } from '../../redux/constant/ConstantSaga';

const { Option } = Select;



export default function ModalEditWork() {
    const { showEditWorkModal, workEdit } = useSelector(state => state.WorkReducer);

    const dispatch = useDispatch()

    const handleOk = () => {
        formik.handleSubmit()
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_WORK_MODAL_EDIT
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
            name: workEdit.name,
            description: workEdit.description,
            type: workEdit.type,
        },
        onSubmit: values => {
            const { id } = workEdit
            dispatch({
                type: EDIT_WORK_API,
                id,
                workEdit: values
            })
        },
    });

    return (
        <Modal title="Sửa Works" visible={showEditWorkModal} onOk={handleOk} onCancel={handleCancel}>
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
                    label="Tên Works"
                    rules={[
                        {
                            required: true,
                            message: 'Nhập tên work!',
                        },
                    ]}
                >
                    <Input name='name' value={formik.values.name} onChange={formik.handleChange} />
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
                <Form.Item label="Trạng thái" rules={[{ required: true }]}>
                    <Select
                        placeholder="Chọn trạng thái"
                        allowClear
                        name='type'
                        value={formik.values.type}
                        onChange={handleChangeSelect('type')}
                    >
                        <Option value="DONE">DONE</Option>
                        <Option value="WILL_DO">WILL_DO</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

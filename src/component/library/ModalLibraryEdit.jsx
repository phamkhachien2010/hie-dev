import React from 'react';
import { Modal, Select, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_LIBRARY_MODAL_EDIT } from '../../redux/constant/ConstantReducer';
import { useFormik } from 'formik';
import { EDIT_LIBRARY_API } from '../../redux/constant/ConstantSaga';

const { Option } = Select;

export default function ModalLibraryEdit() {

    const { showLibraryModalEdit, libraryEdit } = useSelector(state => state.LibraryReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
        formik.handleSubmit()
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_LIBRARY_MODAL_EDIT
        })
    };

    const handleSelect = (name) => {
        return value => {
            formik.setFieldValue(name, value)
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: libraryEdit.name,
            setup: libraryEdit.setup,
            description: libraryEdit.description,
            link: libraryEdit.link,
            type: libraryEdit.type,
            tutorial: libraryEdit.tutorial
        },
        onSubmit: values => {
            const { id } = libraryEdit
            dispatch({
                type: EDIT_LIBRARY_API,
                id,
                library: values
            })
        }
    })

    return (
        <>
            <Modal title="Sửa thư viện" visible={showLibraryModalEdit} onOk={handleOk} onCancel={handleCancel}>
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
                        label="Tên thư viện"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tên thư viện!',
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
                    <Form.Item name="gender" label="Dùng trong" rules={[{ required: true }]}>
                        <Select
                            placeholder="Chọn môi trường dùng"
                            allowClear
                            name='type'
                            onChange={handleSelect('type')}
                            value={formik.values.type}
                        >
                            <Option value="front-end">Front-end</Option>
                            <Option value="back-end">Back-end</Option>
                            <Option value="front-back-end">Cả 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Link thư viện"
                    >
                        <Input name='link' value={formik.values.link} onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Link hướng dẫn"
                    >
                        <Input name='tutorial' value={formik.values.tutorial} onChange={formik.handleChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

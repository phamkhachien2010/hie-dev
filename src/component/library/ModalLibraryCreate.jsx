import React from 'react'
import { Modal, Select, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_LIBRARY_MODAL_CREATE } from '../../redux/constant/ConstantReducer';
import { useFormik } from 'formik';
import { CREATE_LIBRARY_API } from '../../redux/constant/ConstantSaga';

const { Option } = Select;

export default function ModalLibraryCreate() {

    const { showLibraryModalCreate } = useSelector(state => state.LibraryReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
       formik.handleSubmit()
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_LIBRARY_MODAL_CREATE
        })
    };

    const handleSelect = (name) => {
        return value => {
            formik.setFieldValue(name, value)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            setup: '',
            description: '',
            link: '',
            type: '',
            tutorial: ''
        },
        onSubmit: values => {
            dispatch({
                type: CREATE_LIBRARY_API,
                library: values
            })
        }
    })

    return (
        <>
            <Modal title="Thêm thư viện" visible={showLibraryModalCreate} onOk={handleOk} onCancel={handleCancel}>
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
                        name="LibreryName"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tên thư viện!',
                            },
                        ]}
                    >
                        <Input name='name' onChange={formik.handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Cú pháp"
                        name="setup"
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
                        name="description"
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
                        <Select
                            placeholder="Chọn môi trường dùng"
                            allowClear
                            name='type'
                            onChange={handleSelect('type')}
                        >
                            <Option value="front-end">Front-end</Option>
                            <Option value="back-end">Back-end</Option>
                            <Option value="front-back-end">Cả 2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Link thư viện"
                        name="lybraryLink"
                    >
                        <Input name='link' onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Link hướng dẫn"
                        name="libTutorial"
                    >
                        <Input name='tutorial' onChange={formik.handleChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

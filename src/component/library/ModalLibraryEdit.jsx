import React from 'react';
import {  Modal, Select, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_LIBRARY_MODAL_EDIT } from '../../redux/constant/ConstantReducer';

const { Option } = Select;

export default function ModalLibraryEdit() {

    const {showLibraryModalEdit} = useSelector(state=>state.LibraryReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
       dispatch({
           type: CLOSE_LIBRARY_MODAL_EDIT
       })
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_LIBRARY_MODAL_EDIT
        })
    };

  return (
    <>
    <Modal title="Sửa thư viện" visible={showLibraryModalEdit} onOk={handleOk} onCancel={handleCancel}>
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
                label="Tên thư viện"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Nhập tên thư viện!',
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

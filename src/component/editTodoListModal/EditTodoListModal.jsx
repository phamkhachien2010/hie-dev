import { DatePicker, Form, Input, Modal, Select } from 'antd';
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_FORM_EDIT_TODOLIST } from '../../redux/constant/ConstantReducer';
import date from 'date-and-time'
import { EDIT_TODOLIST_SAGA } from '../../redux/constant/ConstantSaga';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function EditTodoListModal() {
    const { showEditFormTodoList, todoListEdit } = useSelector(state => state.TodoListReducer);

    const dispatch = useDispatch()

    const handleOk = () => {
        formik.handleSubmit()
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_FORM_EDIT_TODOLIST
        })
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: todoListEdit.title,
            rangePicker: '',
            type: todoListEdit.type
        },
        onSubmit: values => {
            const { title, rangePicker, type } = values
            const from = date.format(rangePicker[0]._d, 'YYYY/MM/DD');
            const to = date.format(rangePicker[1]._d, 'YYYY/MM/DD');
            const {id} = todoListEdit
            const todoList = {
                title,
                from,
                to,
                type
            }
            dispatch({
                type: EDIT_TODOLIST_SAGA,
                todoList,
                id
            })
        },
    });

    const handleChangRangePicker = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const rangeConfig = {
        rules: [
            {
                type: 'array',
            },
        ],
    };
    return (
        <Modal title="Sửa TodoLists" visible={showEditFormTodoList} onOk={handleOk} onCancel={handleCancel}>
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
                    label="Tên TodoList"
                    rules={[
                        {
                            required: true,
                            message: 'Nhập tên TodoList!',
                        },
                    ]}
                >
                    <Input name='title' value={formik.values.title} onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Thời gian" {...rangeConfig}>
                    <RangePicker name="rangePicker" onChange={handleChangRangePicker('rangePicker')} />
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

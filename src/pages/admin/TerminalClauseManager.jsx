import React, { useEffect } from 'react';
import { Input, Popconfirm, Table } from 'antd';
import ModalTerminalUseCreate from '../../component/ModalTerminalUseCreate';
import ModalEditTerminalUse from '../../component/ModalEditTerminalUse';
import { OPEN_MODAL_TEMINAL_EDIT, OPEN_MODAL_TEMINAL_USE } from '../../redux/constant/ConstantReducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DELETE_COMMAND_API, GET_ALL_COMMAND_API } from '../../redux/constant/ConstantSaga';
import { useFormik } from 'formik';

const { Search } = Input;

export default function TerminalClauseManager() {

    const { listCommand } = useSelector(state => state.TerminalInUseReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: GET_ALL_COMMAND_API,
            key: ''
        })

        return () => {

        }
    }, [])



    const columns = [
        {
            title: 'Tên lệnh',
            dataIndex: 'name',
            sorter: (a, b) => {
                const name1 = a.name;
                const name2 = b.name;
                if (name1 > name2) {
                    return 1
                }
                return -1
            },
            width: '10%',
            align: 'center'
        },
        {
            title: 'Lệnh',
            dataIndex: 'setup',
            sorter: (a, b) => {
                const setup1 = a.setup;
                const setup2 = b.setup;
                if (setup1 > setup2) {
                    return 1
                }
                return -1
            },
            width: '15%',
            align: 'center'
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            width: '20%',
        },
        {
            title: 'Dùng trong',
            dataIndex: 'type',
            width: '15%',
            align: 'center'
        },
        {
            title: 'Khác',
            dataIndex: 'action',
            width: '10%',
            render: (text, recode, index) => {
                return <div key={index}>
                    <button className='text-xl mr-3 text-blue-500 border-0 focus:outline-none' onClick={() => {
                        dispatch({
                            type: OPEN_MODAL_TEMINAL_EDIT,
                            commandEdit: recode
                        })

                    }}><i className="fa fa-edit"></i></button>
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => {
                            dispatch({
                                type: DELETE_COMMAND_API,
                                id: recode.id
                            })
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className='text-xl text-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
                    </Popconfirm>
                </div>
            },
            align: 'center'
        },
    ];

    const formik = useFormik({
        initialValues: {
            setup: ''
        },
        onSubmit: values => {
            dispatch({
                type: GET_ALL_COMMAND_API,
                key: values.setup
            })
        }
    })
    return (
        <div>
            <div className="container relative">
                <h1 className='text-center text-xl font-bold py-4'>Các lệnh terminal thường dùng</h1>
                <button className='px-3 py-2 bg-green-500 rounded-full text-white hover:bg-green-600 hover:font-bold absolute top-10 right-10 focus:outline-none' onClick={() => {
                    dispatch({
                        type: OPEN_MODAL_TEMINAL_USE
                    })
                }}>Thêm lệnh</button>
                <Search name='setup' onChange={formik.handleChange} placeholder="input search text" onSearch={formik.handleSubmit} enterButton />
                <Table columns={columns} dataSource={listCommand} />
            </div>
            <ModalTerminalUseCreate />
            <ModalEditTerminalUse />
        </div>
    )
}

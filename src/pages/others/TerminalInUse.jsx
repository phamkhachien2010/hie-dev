import React, { useEffect } from 'react';
import { Input, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_COMMAND_API } from '../../redux/constant/ConstantSaga';
import { useFormik } from 'formik';
import styleOther from './other.module.css'

const { Search } = Input;

export default function TerminalInUse() {

    const { listCommand } = useSelector(state => state.TerminalInUseReducer);

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
            width: '15%',
            align: 'center'
        },
        {
            title: 'Lệnh',
            dataIndex: 'setup',
            sorter: (a, b) => a.age - b.age,
            width: '25%',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            width: '30%',
        },
        {
            title: 'Dùng trong',
            dataIndex: 'type',
            width: '20%',
            align: 'center'
        },

    ];

    const formik = useFormik({
        initialValues: {
            setup: ''
        },
        onSubmit: values => {
            const key = values.setup;
            dispatch({
                type: GET_ALL_COMMAND_API,
                key
            })
        }
    })

    return (
        <div className={styleOther.other}>
            <div className="w-4/5 m-auto relative">
                <h1 className='text-center text-xl md:text-2xl lg:text-4xl font-bold py-3' >Các lệnh terminal thường dùng</h1>
                <Search name='setup' onChange={formik.handleChange} placeholder="Nhập từ khoá" onSearch={formik.handleSubmit} enterButton />
                <Table columns={columns} dataSource={listCommand} />
            </div>
        </div>
    )
}

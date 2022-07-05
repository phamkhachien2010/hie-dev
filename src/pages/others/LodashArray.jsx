import { Table, Input } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_LODASH_METHOD_API } from '../../redux/constant/ConstantSaga';
import { useFormik } from 'formik';
import styleOher from './other.module.css'

const { Search } = Input;

export default function LodashArray() {

    const dispatch = useDispatch();
    const { listLodashMethods } = useSelector(state => state.LodashReducer);

    useEffect(() => {
        dispatch({
            type: GET_ALL_LODASH_METHOD_API,
            description: ''
        })

        return () => {

        }
    }, [])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '10%'
        },
        {
            title: 'Cú pháp',
            dataIndex: 'command',
            key: 'command',
            width: '20%'
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
    ];

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        onSubmit: values => {
            const { description } = values;
            dispatch({
                type: GET_ALL_LODASH_METHOD_API,
                description
            })
        }
    })

    return (
        <div className={`${styleOher.other} w-4/5 m-auto text-xs md:text-md lg:text-base`}>
            <h1 className='text-2xl lg:text-4xl font-bold text-center py-3'>Những hàm thường dùng của thư viện lodash</h1>
            <p>Lodash là 1 thư viện giúp xử lý mảng và chuỗi được nhiều người sử dụng</p>
            <a className='text-blue-500' href="https://lodash.com/" target='_blank'>Xem tất cả các hàm lodash tại đây</a>

            <h2 className='text-xl lg:text-3xl font-bold text-center py-3'>Các hàm thường dùng của lodash</h2>

            <Search name='description' onChange={formik.handleChange} placeholder="Nhập chức năng muốn tìm" onSearch={formik.handleSubmit} enterButton />

            <Table dataSource={listLodashMethods} columns={columns} />
        </div>
    )
}

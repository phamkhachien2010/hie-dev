import React from 'react';
import { Table } from 'antd';
import ModalTerminalUseCreate from '../../component/ModalTerminalUseCreate';
import ModalEditTerminalUse from '../../component/ModalEditTerminalUse';
import { OPEN_MODAL_TEMINAL_EDIT, OPEN_MODAL_TEMINAL_USE } from '../../redux/constant/ConstantReducer';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function TerminalClauseManager() {

    const dispatch = useDispatch();

    const columns = [
        {
            title: 'Tên lệnh',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Category 1',
                    value: 'Category 1',
                    children: [
                        {
                            text: 'Yellow',
                            value: 'Yellow',
                        },
                        {
                            text: 'Pink',
                            value: 'Pink',
                        },
                    ],
                },
                {
                    text: 'Category 2',
                    value: 'Category 2',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value),
            width: '10%',
            align: 'center'
        },
        {
            title: 'Lệnh',
            dataIndex: 'setup',
            sorter: (a, b) => a.age - b.age,
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
            render: () => {
                return <div>
                    <button className='text-xl mr-3 text-blue-500 border-0 focus:outline-none' onClick={() => {
                        dispatch({
                            type: OPEN_MODAL_TEMINAL_EDIT
                        })

                    }}><i className="fa fa-edit"></i></button>
                    <button className='text-xl text-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
                </div>
            },
            align: 'center'
        },
    ];

    const data = [
        {
            key: '1',
            name: 'start',
            setup: 'npm start',
            description: 'Start ứng dụng',
            type: 'front-end',
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div>
            <div className="container relative">
                <h1 className='text-center text-xl font-bold py-4'>Các lệnh terminal thường dùng</h1>
                <button className='px-3 py-2 bg-green-500 rounded-full text-white hover:bg-green-600 hover:font-bold absolute top-10 right-10 focus:outline-none' onClick={() => {
                    dispatch({
                        type: OPEN_MODAL_TEMINAL_USE
                    })
                }}>Thêm lệnh</button>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
            <ModalTerminalUseCreate />
            <ModalEditTerminalUse />
        </div>
    )
}

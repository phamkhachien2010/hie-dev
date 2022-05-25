import React from 'react';
import { Table } from 'antd';
import ModalTerminalUseCreate from '../../component/ModalTerminalUseCreate';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL_TEMINAL_USE } from '../../redux/constant/ConstantReducer';



export default function TerminalInUse() {

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
            width: '15%',
            align: 'center'
        },
        {
            title: 'Lệnh',
            dataIndex: 'cuPhap',
            sorter: (a, b) => a.age - b.age,
            width: '25%',
        },
        {
            title: 'Mô tả',
            dataIndex: 'desc',
            width: '30%',
        },
        {
            title: 'Dùng trong',
            dataIndex: 'type',
            width: '20%',
        },
        {
            title: 'Khác',
            dataIndex: 'action',
            width: '10%',
            render: () => {
                return <div>
                    <button className='text-xl mr-3 text-blue-500'><i className="fa fa-edit"></i></button>
                    <button className='text-xl text-red-500'><i className="fa fa-trash-alt"></i></button>
                </div>
            }
        },
    ];
    const data = [
        {
            key: '1',
            name: 'start',
            cuPhap: 'npm start',
            desc: 'Start ứng dụng',
            type: 'front-end',
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div style={{ paddingTop: '112px' }}>
            <div className="container relative">
                <h1 className='text-center text-4xl font-bold pt-5 pb-3' >Các lệnh terminal thường dùng</h1>
                <button className='px-3 py-2 bg-green-500 rounded-full text-white hover:bg-green-600 hover:font-bold absolute top-10 right-10' onClick={()=>{
                    dispatch({
                        type: OPEN_MODAL_TEMINAL_USE
                    })
                }}>Thêm lệnh</button>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
            <ModalTerminalUseCreate />
        </div>
    )
}

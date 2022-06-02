import React from 'react';
import { Table } from 'antd';
import ModalTerminalUseCreate from '../../component/ModalTerminalUseCreate';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL_TEMINAL_EDIT, OPEN_MODAL_TEMINAL_USE } from '../../redux/constant/ConstantReducer';
import ModalEditTerminalUse from '../../component/ModalEditTerminalUse';



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
            align: 'center'
        },
        {
            title: 'Mô tả',
            dataIndex: 'desc',
            width: '30%',
            align: 'center'
        },
        {
            title: 'Dùng trong',
            dataIndex: 'type',
            width: '20%',
            align: 'center'
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
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
            <ModalTerminalUseCreate />
            <ModalEditTerminalUse/>
        </div>
    )
}

import { Table } from 'antd';
import React from 'react'

export default function InfoTakeBack() {

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      width: '20%',
      align: 'center'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '20%',
      align: 'center'
    },
    {
      title: 'Phản hồi',
      dataIndex: 'comment',
      width: '50%',      
    },
  ];

  const data = [
    {
      key: '1',
      name: 'start',
      email: 'npm start',
      comment: 'Start ứng dụng',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      <h1 className='text-center text-xl font-bold py-4'>Phản hồi</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

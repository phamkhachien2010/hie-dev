import React from 'react';
import { Input, Table } from 'antd';

const { Search } = Input;

export default function LibraryManager() {

  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'userName',
      width: '30%',
      align: 'center'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      align: 'center'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (user) => {
        return <div>
          <button className='bg-sky-400 px-3 py-2 rounded-lg hover:bg-sky-500 mr-2 focus:outline-none'><i className="fa fa-edit"></i></button>
          <button className='bg-red-400 px-3 py-2 rounded-lg hover:bg-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
        </div>
      },
      width: '40%',
      align: 'center'
    },
  ];

  const data = [
    {
      key: '1',
      userName: 'John Brown',
      type: 'Client',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      userName: 'Jim Green',
      type: 'Client',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      userName: 'Joe Black',
      type: 'Client',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      userName: 'Jim Red',
      type: 'Client',
      address: 'London No. 2 Lake Park',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1 className='text-center text-xl font-bold py-4'>LIBRARY MANAGEMENT</h1>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

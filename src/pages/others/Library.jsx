import { Table } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Library() {


  const columns = [
    {
      title: 'Tên thư viện',
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
      title: 'Lệnh cài đặt',
      dataIndex: 'cuPhap',
      sorter: (a, b) => a.age - b.age,
      width: '15%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'desc',
      width: '20%',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      width: '20%',
    },
    {
      title: 'Dùng trong',
      dataIndex: 'type',
      width: '15%',
    },
    {
      title: 'Hướng dẫn',
      dataIndex: 'tutorial',
      width: '10%',
    },

  ];
  const data = [
    {
      key: '1',
      name: 'start',
      cuPhap: 'npm start',
      desc: 'Start ứng dụng',
      link: 'cbs',
      type: 'front-end',
    },
    {
      key: '2',
      name: 'sequelize',
      cuPhap: 'npm i sequelize',
      desc: 'Viết code database trong NodeJs',
      link: 'cbs',
      type: 'back-end',
      tutorial: <NavLink to='/' className='text-black'>link</NavLink>
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div style={{ paddingTop: '112px' }}>
      <div className="container relative">
        <h1 className='text-center text-4xl font-bold pt-5 pb-3' >Các thư viện thường dùng</h1>

        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>

    </div>
  )
}

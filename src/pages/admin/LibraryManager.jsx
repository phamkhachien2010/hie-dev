import React from 'react';
import { Input, Table } from 'antd';
import ModalLibraryCreate from '../../component/library/ModalLibraryCreate';
import ModalLibraryEdit from '../../component/library/ModalLibraryEdit';
import { OPEN_LIBRARY_MODAL_CREATE, OPEN_LIBRARY_MODAL_EDIT } from '../../redux/constant/ConstantReducer';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

export default function LibraryManager() {

  const dispatch = useDispatch()


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
      width: '30%',
    },
    {
      title: 'Link library',
      dataIndex: 'link',
      width: '10%',
      align: 'center'
    },
    {
      title: 'Use',
      dataIndex: 'type',
      width: '10%',
      align: 'center'
    },
    {
        title: 'Tutorial',
        dataIndex: 'tutorial',
        width: '10%',
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
              type: OPEN_LIBRARY_MODAL_EDIT
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
      link: <a href="" target='_blank' className='text-black'>Link</a>,
      type: 'front-end',
    },
    {
      key: '2',
      name: 'start',
      setup: 'npm start',
      description: 'Start ứng dụng',
      type: 'front-end',
      tutorial:<NavLink to='/' className='text-black'>Link</NavLink>
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div className="container relative">
        <h1 className='text-center text-xl font-bold py-4'>Các thư viện thường dùng</h1>
        <button className='px-3 py-2 bg-green-500 rounded-full text-white hover:bg-green-600 hover:font-bold absolute top-10 right-10 focus:outline-none' onClick={() => {
          dispatch({
            type: OPEN_LIBRARY_MODAL_CREATE
          })
        }}>Thêm Thư viện</button>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <ModalLibraryCreate />
      <ModalLibraryEdit />
    </div>
  )
}

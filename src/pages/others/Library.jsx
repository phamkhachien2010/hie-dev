import { Input, Table } from 'antd'
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GET_ALL_LIBRARIES_API } from '../../redux/constant/ConstantSaga';
import styleOther from './other.module.css'

const { Search } = Input;
export default function Library() {

  const { listLibraries } = useSelector(state => state.LibraryReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_ALL_LIBRARIES_API,
      key: ''
    })

    return () => {

    }
  }, [])


  const columns = [
    {
      title: 'Tên thư viện',
      key: 'name',
      dataIndex: 'name',
      width: '15%',
      align: 'center'
    },
    {
      title: 'Lệnh cài đặt',
      key: 'setup',
      dataIndex: 'setup',
      sorter: (a, b) => {
        let setup1 = a.setup;
        let setup2 = b.setup;
        if (setup1 > setup2) {
          return 1
        }
        return -1
      },
      width: '15%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      width: '20%',
    },
    {
      title: 'Link',
      key: 'link',
      dataIndex: 'link',
      render: (text, record, index) => {
        return <a className='text-blue-400' target='_blank' key={index} href={record.link}>Link Library</a>
      },
      align: 'center',
      width: '20%',
    },
    {
      title: 'Dùng trong',
      key: 'type',
      dataIndex: 'type',
      width: '15%',
    },
    {
      title: 'Hướng dẫn',
      key: 'tutorial',
      dataIndex: 'tutorial',
      render: (text, record, index) => {
        if (record.tutorial) {
          return <NavLink className='text-blue-400' target='_blank' key={index} to={record.tutorial}>Link tutorial</NavLink>
        }
        return
      },
      width: '10%',
    },

  ];


  const formik = useFormik({
    initialValues: {
      description: ''
    },
    onSubmit: values => {
      const key = values.description;
      dispatch({
        type: GET_ALL_LIBRARIES_API,
        key
      })
    }
  })

  return (
    <div className={styleOther.other}>
      <div className="w-4/5 m-auto relative">
        <h1 className='text-center text-xl md:text-2xl lg:text-4xl font-bold py-3' >Các thư viện thường dùng</h1>
        <Search name='description' onChange={formik.handleChange} placeholder="input search text" onSearch={formik.handleSubmit} enterButton />

        <Table columns={columns} dataSource={listLibraries}  />
      </div>

    </div>
  )
}

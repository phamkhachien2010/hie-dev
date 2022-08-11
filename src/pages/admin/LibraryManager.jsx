import React, { useEffect } from 'react';
import { Input, Popconfirm, Table } from 'antd';
import ModalLibraryCreate from '../../component/library/ModalLibraryCreate';
import ModalLibraryEdit from '../../component/library/ModalLibraryEdit';
import { OPEN_LIBRARY_MODAL_CREATE, OPEN_LIBRARY_MODAL_EDIT } from '../../redux/constant/ConstantReducer';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_LIBRARY_API, GET_ALL_LIBRARIES_API } from '../../redux/constant/ConstantSaga';
import { useFormik } from 'formik';

const { Search } = Input;

export default function LibraryManager() {

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
      dataIndex: 'name',
      sorter: (a, b) => {
        const name1 = a.name;
        const name2 = b.name
        if (name1 > name2) {
          return 1
        }
        return -1
      },
      width: '10%',
      align: 'center'
    },
    {
      title: 'Lệnh',
      dataIndex: 'setup',
      sorter: (a, b) => {
        const setup1 = a.setup;
        const setup2 = b.setup
        if (setup1 > setup2) {
          return 1
        }
        return -1
      },
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
      render: (text, record, index) => {
        return <div key={index}>
          <button className='text-xl mr-3 text-blue-500 border-0 focus:outline-none' onClick={() => {
            dispatch({
              type: OPEN_LIBRARY_MODAL_EDIT,
              libraryEdit: record
            })
          }}><i className="fa fa-edit"></i></button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              dispatch({
                type: DELETE_LIBRARY_API,
                id: record.id
              })
            }}
            okText="Yes"
            cancelText="No"
          >
            <button className='text-xl text-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
          </Popconfirm>
        </div>
      },
      align: 'center'
    },
  ];

  const formik = useFormik({
    initialValues: {
      description: ''
    },
    onSubmit: values => {
      dispatch({
        type: GET_ALL_LIBRARIES_API,
        key: values.description
      })
    }
  })


  return (
    <div>
      <div className="container relative">
        <h1 className='text-center text-xl font-bold py-4'>Các thư viện thường dùng</h1>
        <button className='px-3 py-2 bg-green-500 rounded-full text-white hover:bg-green-600 hover:font-bold absolute top-10 right-10 focus:outline-none' onClick={() => {
          dispatch({
            type: OPEN_LIBRARY_MODAL_CREATE
          })
        }}>Thêm Thư viện</button>
        <Search name='description' onChange={formik.handleChange} placeholder="input search text" onSearch={formik.handleSubmit} enterButton />
        <Table columns={columns} dataSource={listLibraries} />
      </div>
      <ModalLibraryCreate />
      <ModalLibraryEdit />
    </div>
  )
}

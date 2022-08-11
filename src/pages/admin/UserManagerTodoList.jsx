import React, { useEffect } from 'react';
import { Input, Popconfirm, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER_API, GET_ALL_USER_API } from '../../redux/constant/ConstantSaga';
import { OPEN_USER_MODAL_EDIT } from '../../redux/constant/ConstantReducer';
import EditUserModal from '../../component/editUser/EditUserModal';

const { Search } = Input;

export default function UserManagerTodoList() {

  const { listUser } = useSelector(state => state.UserReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_ALL_USER_API
    })

    return () => {

    }
  }, [])


  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: 'UserName',
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
      render: (text, recode, index) => {
        return <div key={index}>
          <button className='bg-sky-400 px-3 py-2 rounded-lg hover:bg-sky-500 mr-2 focus:outline-none' onClick={() => {
            dispatch({
              type: OPEN_USER_MODAL_EDIT,
              userEdit: recode
            })
          }} ><i className="fa fa-edit"></i></button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              dispatch({
                type: DELETE_USER_API,
                id: recode.id
              })
            }}
            okText="Yes"
            cancelText="No"
          >
            <button className='bg-red-400 px-3 py-2 rounded-lg hover:bg-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
          </Popconfirm>
        </div>
      },
      width: '40%',
      align: 'center'
    },
  ];


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1 className='text-center text-xl font-bold py-4'>USER MANAGEMENT</h1>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={listUser} onChange={onChange} />

      <EditUserModal />
    </div>
  )
}

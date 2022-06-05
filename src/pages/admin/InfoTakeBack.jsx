import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_COMMENT_API } from '../../redux/constant/ConstantSaga';

export default function InfoTakeBack() {

  const { listComment } = useSelector(state => state.CommentReducer);
  console.log(listComment);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_ALL_COMMENT_API
    })

    return () => {

    }
  }, [])


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
      <Table columns={columns} dataSource={listComment} onChange={onChange} />
    </div>
  )
}

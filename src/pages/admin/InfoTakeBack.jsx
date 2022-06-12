import { Popconfirm, Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_COMMENT_API, GET_ALL_COMMENT_API } from '../../redux/constant/ConstantSaga';

export default function InfoTakeBack() {

  const { listComment } = useSelector(state => state.CommentReducer);

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
      width: '40%',
    },
    {
      title: 'Phản hồi',
      dataIndex: '',
      render: (comment, index) => {
        return <div key={index}>
          <Popconfirm
            title="Are you sure to delete this comment?"
            onConfirm={() => {
              dispatch({
                type: DELETE_COMMENT_API,
                id: comment.id
              })
            }}
            okText="Yes"
            cancelText="No"
          >
            <button className='text-xl text-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
          </Popconfirm>
        </div>
      },
      width: '10%',
      align: 'center'
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

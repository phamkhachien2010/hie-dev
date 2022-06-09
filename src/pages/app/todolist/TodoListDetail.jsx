import { Dropdown, Menu, Space, Popconfirm, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodoListModal from '../../../component/editTodoListModal/EditTodoListModal';
import ModalEditWork from '../../../component/editWorkModal/ModalEditWork';
import { OPEN_FORM_EDIT_TODOLIST, OPEN_WORK_MODAL_EDIT } from '../../../redux/constant/ConstantReducer';
import { DELETE_TODOLIST_SAGA, DELETE_WORK_API, EDIT_WORK_API, GET_ALL_WORK_API } from '../../../redux/constant/ConstantSaga';

const WILL_DO = 'WILL_DO';
const DONE = 'DONE';

export default function TodoListDetail(props) {
  const { userLogin } = useSelector(state => state.UserReducer);
  const { titleTodoClick, listTodo, showEditFormTodoList } = useSelector(state => state.TodoListReducer);
  const { listWork } = useSelector(state => state.WorkReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_ALL_WORK_API
    })

    return () => {

    }
  }, [])

  const getTodoListById = () => {
    const listTodoGetByUser = listTodo?.filter((todo) => todo.userId === userLogin.id);
    const listTodoCurr = listTodoGetByUser?.filter((todoList) => todoList.title === titleTodoClick);
    return listTodoCurr
  }


  const getWorkByTodo = () => {
    return listWork?.filter((work) => work.TodoList.title === titleTodoClick)
  }

  const renderDescDropDown = (description) => {
    let desc = '';
    if (description) {
      desc = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <div>{description}</div>
              ),
            }
          ]}
        />
      )
    }
    return desc
  }


  const renderListWorkWillDo = () => {
    const listWorkTodo = getWorkByTodo();
    const listWorkWillDo = listWorkTodo?.filter((work) => work.type === WILL_DO)
    return listWorkWillDo.map((work, index) => {
      let desc = renderDescDropDown(work.description)

      return <Dropdown key={index} overlay={desc}>
        <Space>
          <div className='grid grid-cols-5 p-2'>
            <div className='col-span-3 lg:col-span-4'>
              <span>{work.name}</span>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <button className='bg-green-400 py-1 px-2 rounded-lg hover:bg-green-500 hover:text-white mr-2 focus:outline-none' onClick={() => {
                const { id, name, description } = work
                dispatch({
                  type: EDIT_WORK_API,
                  id,
                  workEdit: {
                    name,
                    description,
                    type: DONE
                  }
                })
              }}><i className="fa fa-check"></i></button>
              <button className='bg-blue-400 py-1 px-2 rounded-lg hover:bg-blue-500 hover:text-white mr-2 focus:outline-none' onClick={() => {
                dispatch({
                  type: OPEN_WORK_MODAL_EDIT,
                  workEdit: work
                })
              }} ><i className="fa fa-edit"></i></button>
              <Popconfirm
                title="Xoá việc này?"
                onConfirm={() => {
                  dispatch({
                    type: DELETE_WORK_API,
                    id: work.id
                  })
                  message.success('Xoá thành công')
                }}
                okText="Yes"
                cancelText="No"
              >
                <button className='bg-red-400 py-1 px-2 rounded-lg hover:bg-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
              </Popconfirm>
            </div>
          </div>
        </Space>
      </Dropdown>

    })
  }

  const renderListWorkDone = () => {
    const listWorkTodo = getWorkByTodo();
    const listWorkDone = listWorkTodo?.filter((work) => work.type === DONE)
    return listWorkDone?.map((work, index) => {
      let desc = renderDescDropDown(work.description)
      return <Dropdown key={index} overlay={desc} className='block'>
        <Space>
          <div key={index} className='grid grid-cols-5 p-2'>
            <div className='col-span-3 lg:col-span-4'>
              <span>{work.name}</span>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <button className='bg-green-400 py-1 px-2 rounded-lg hover:bg-green-500 hover:text-white mr-2 focus:outline-none' onClick={() => {
                const { id, name, description } = work
                dispatch({
                  type: EDIT_WORK_API,
                  id,
                  workEdit: {
                    name,
                    description,
                    type: WILL_DO
                  }
                })
              }} ><i className="fa fa-exchange-alt"></i></button>
              <Popconfirm
                title="Xoá việc này?"
                onConfirm={() => {
                  dispatch({
                    type: DELETE_WORK_API,
                    id: work.id
                  })
                  message.success('Xoá thành công')
                }}
                okText="Yes"
                cancelText="No"
              >
                <button className='bg-red-400 py-1 px-2 rounded-lg hover:bg-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
              </Popconfirm>
            </div>
          </div>
        </Space>
      </Dropdown>
    })
  }

  if (!titleTodoClick) {
    return <div>
      <h1 className='text-xl md:text-4xl font-bold text-center mt-5'>Click vào thanh bên để xem chi tiết todoList</h1>
    </div>
  }

  return (
    <div className='relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='border-2'>
          <h2 className='text-center text-md md:text-xl font-bold my-1'>Danh sách việc chưa làm</h2>
          <hr />
          {renderListWorkWillDo()}
        </div>

        <div className='border-2'>
          <h2 className='text-center text-md md:text-xl font-bold my-1'>Danh sách việc đã làm</h2>
          <hr />
          {renderListWorkDone()}
        </div>
      </div>
      <ModalEditWork />

      <div className='absolute mt-2 right-0'>
        <button className='bg-green-400 hover:bg-green-500 px-2 py-1 rounded-lg mr-3 text-white font-bold focus:outline-none' onClick={() => {
          const todoListEdit = getTodoListById()[0];
          dispatch({
            type: OPEN_FORM_EDIT_TODOLIST,
            todoListEdit
          })
        }}>Sửa việc</button>
        <Popconfirm
          title={`Xoá ${titleTodoClick} ?`}
          onConfirm={() => {
            const todoListDeleteId = getTodoListById()[0].id;
            dispatch({
              type: DELETE_TODOLIST_SAGA,
              id: todoListDeleteId
            })
            message.success('Xoá todolist thành công')
          }}
          okText="Yes"
          cancelText="No"
        >
          <button className='bg-red-400 hover:bg-red-500 px-2 py-1 rounded-lg mr-3 font-bold focus:outline-none'>Xóa việc</button>
        </Popconfirm>
      </div>
      <EditTodoListModal />
    </div>
  )
}

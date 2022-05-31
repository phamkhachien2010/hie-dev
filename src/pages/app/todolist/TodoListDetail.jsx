import React from 'react'

export default function TodoListDetail(props) {
  return (
    <div className='relative'>
      <div className='grid grid-cols-2 gap-5'>
        <div className='border-2'>
          <h2 className='text-center text-xl font-bold my-1'>Danh sách việc chưa làm</h2>
          <hr />
          <div className='grid grid-cols-5 p-2'>
            <div className='col-span-4'>
              <span>abcnhabcgdvahsd</span>
            </div>
            <div>
              <button className='bg-green-400 py-1 px-2 rounded-lg hover:bg-green-500 hover:text-white mr-2 focus:outline-none'><i className="fa fa-check"></i></button>
              <button className='bg-blue-400 py-1 px-2 rounded-lg hover:bg-blue-500 hover:text-white mr-2 focus:outline-none'><i className="fa fa-edit"></i></button>
              <button className='text-lg focus:outline-none text-gray-300 '><i className="fa fa-star"></i></button>
            </div>
          </div>
        </div>

        <div className='border-2'>
          <h2 className='text-center text-xl font-bold my-1'>Danh sách việc đã làm</h2>
          <hr />

          <div className='grid grid-cols-5 p-2'>
            <div className='col-span-4'>
              <span>abcnhabcgdvahsd</span>
            </div>
            <div>
              <button className='bg-green-400 py-1 px-2 rounded-lg hover:bg-green-500 hover:text-white mr-2 focus:outline-none'><i className="fa fa-exchange-alt"></i></button>
              <button className='bg-red-400 py-1 px-2 rounded-lg hover:bg-red-500 focus:outline-none'><i className="fa fa-trash-alt"></i></button>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  )
}

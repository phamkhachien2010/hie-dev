import React from 'react'

const bgAdminDefault = require('../../../assets/img/bg-admin-default.jpg')

export default function AdminPageDefault() {
    return (
        <div style={{ backgroundImage: `url(${bgAdminDefault})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='h-100 flex flex-col justify-center'>
            <div className='text-4xl text-center -pt-5 font-bold text-white'>WELCOME TO ADMIN'S MANAGER</div>
            <div className='text-2xl text-center pt-5 font-bold text-white'><i className="fa fa-arrow-left"></i> Click sidebar to manager something</div>
        </div>
    )
}

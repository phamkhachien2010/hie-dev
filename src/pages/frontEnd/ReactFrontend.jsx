import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ReactFrontend() {

  const reactImgPath = require('../../assets/img/react-img.jpeg')
  return (
    <div style={{ paddingTop: '112px' }}>
      <div className='py-5' style={{ backgroundImage: `url('${reactImgPath}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center' }}>
        <div className="container">
          <h1 className='text-4xl text-white font-bold'>Tìm hiểu về React</h1>
          <h2 className='text-2xl'><NavLink to='#reactLaGi'> React là gì</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Ứng dụng react như thế nào</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Các lỗi thường gặp khi dùng react</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Các thư viện hỗ trợ react app</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Deploy react app như thế nào</NavLink></h2>
        </div>
      </div>

      <section id='reactLaGi'>
        <h2 className='text-2xl'>React là gì</h2>
        <p>React là 1 thư việ giúp xây dựng giao diện web sử dụng ngôn ngữ lập trình JavaScript. React sử dụng 2 component chính </p>
      </section>

    </div>
  )
}

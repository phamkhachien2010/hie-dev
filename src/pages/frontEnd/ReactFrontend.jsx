import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ReactFrontend() {

  const reactImgPath = require('../../assets/img/react-img.jpeg')
  return (
    <div style={{ paddingTop: '112px' }}>
      <div className='py-5' style={{ backgroundImage: `url('${reactImgPath}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center' }}>
        <div className="container">
          <h1 className='text-4xl text-white font-bold'>Tìm hiểu về React</h1>
          <h2 className='text-2xl'><NavLink to='#reactLaGi'> React là gì?</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Ứng dụng react như thế nào?</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Các thư viện hỗ trợ react app</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Thiết kế thư mục react app</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Deploy react app như thế nào?</NavLink></h2>
          <h2 className='text-2xl'><NavLink to='#'>Các lỗi thường gặp khi dùng react</NavLink></h2>
        </div>
      </div>

      <section>
        <section id='reactLaGi' className='container'>
          <h2 className='text-2xl'>React là gì</h2>
          <p>React là 1 thư viện giúp xây dựng giao diện web sử dụng ngôn ngữ lập trình JavaScript. React sử dụng 2 component chính là React Class Component, React Functional Component.</p>
          <p>Các Components giúp chia nhỏ nội dung để dễ quản lý các thành phần của 1 trang web.</p>
          <p>React có thể tạo ra các thẻ html ngay trong components do react có thể dùng cơ chế jsx</p>
          <p>Jsx là 1 cơ chế kết hợp html với javaScript, tức là tạo ra các thẻ html ngay trong file javaScript. Lưu ý Tên commponent bắt đầu bằng chữ hoa Uppercase, sử dụng className và htmlFor thay vì class và for.</p>
          <p>React dùng nhiều đến props và state. Props và state là 2 kiểu dữ liệu trong React. State chỉ được thay đổi bên trong bản thân component. Props không bị kiểm soát bởi bản thân component.</p>
          <h3>Props</h3>
          <p>Props là viết tắt của properties. Chúng là các giá trị của component cha được truyền vào. Props chỉ được dùng để đọc và sử dụng trong component chứ không thay đổi được giá trị trong component đó. Muốn thay đổi giá trị props thì phải thay đổ ở component cha.</p>
          <h3>State</h3>
          <p>Khác với props là bất biến thì state có thể thay đổi. State được quản lý chỉ bởi duy nhất 1 component, nó cũng không thể truyền xuống cho component con.</p>
          <p>Đi kèm với state là lifecycle.</p>
          <h4>Lifecycle</h4>
          <p>Hiểu đơn giản lifecycle là vòng đời của 1 component. Vòng đời thì sẽ có tạo ra, phát triển và mất đi. Tức là trong quá trình đó sẽ có tạo ra component, update component và delete component.</p>
        </section>

<section></section>

      </section>

    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomePage(props) {
  return (
    <div className='' style={{ paddingTop: '112px' }}>
      <section className="container px-5 bg-indigo-200 text-center py-5">
        <h1 className='text-4xl font-bold'>Hello, Welcome you</h1>
        <p className='text-xl text-left'>Xin chào các bạn! Đây là blog nói về những hiểu biết của mình về lập trình từ front-end đến back-end và một số những chia sẻ đời thường mà mình tích cóp được trong thời gian đi làm.</p>
        <p className='text-left text-xl'>Không những vậy blog này còn chia sẻ những câu chuyện đời sống bình thường mà hầu như ai cũng gặp ít nhiều trong quãng thời gian sống của mình.</p>
        <p className='text-left' style={{ fontStyle: 'italic' }}>Hiện tại thì mình mới phát triển phiên bản tiếng Anh và tiếng Việt trên blog này, mong các bạn thông cảm</p>
        <p className='text-lg'>Và đây là câu châm ngôn ưa thích của mình: <span className='text-gray-500'>Đỉnh cao của hoàn hảo là sự đơn giản!</span></p>
      </section>

      <section className='container py-5' style={{ background: 'url(./img/background-hoang-hon.jpg)' }}>
        <h2 className='text-3xl font-bold text-rose-100 text-center'>About me</h2>
        <div className='text-center'>
          <h4 className='text-white text-xl'>Mình cũng chỉ llà một con người bình thường như bao người khác và cũng chẳng có gì đặc biệt. <br /> Mình viết vài dòng code xàm xàm vậy thôi <i className="fa fa-smile text-lime-300"></i></h4>
          <NavLink to='/about' className='hover:text-white hover:underline text-lg'>Bạn có thể tìm hiểu mình là ai, mình làm được những gì ở đây <i className="fa fa-arrow-right"></i></NavLink>
        </div>
      </section>

      <section className='container py-5'>
        <h2 className='text-3xl font-bold text-center'>Front-end</h2>
        <p className='text-xl'>Front-end là gì. Front-end đơn hiểu một cách đơn giản là thiết kế giao diện của 1 trang web, 1 ứng dụng nào đó. (đây là theo mình hiểu nha)</p>
      </section>

    </div>
  )
}

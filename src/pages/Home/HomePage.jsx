import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';


export default function HomePage(props) {

  useEffect(() => {
    window.scrollTo(0,0)
  
    return () => {
      
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      comment: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
      lg: {
        span: 4
      }
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
      lg: {
        span: 18
      }
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 12,
        offset: 12,
      },
      sm: {
        span: 12,
        offset: 12,
      },
    },
  };

  return (
    <div className='grid grid-cols-12' style={{ paddingTop: '112px' }}>
      <div className='col-span-11'>
        <section className="px-5 bg-indigo-200 text-center py-5">
          <div className='container'>
            <h1 className='text-4xl font-bold'>Hello, Welcome you</h1>
            <p className='text-xl text-left'>Xin chào các bạn! Đây là blog mình viết trong thời gian rảnh rỗi, nói về những kỹ năng lập trình, chủ yếu để mình có thể review lại kiến thức dễ dàng, và cũng là 1 dự án để mình đi xin việc. Những anh/chị HR preview giúp mình với ạ.</p>
            {/* <p className='text-left text-xl'>Không những vậy blog này còn chia sẻ những câu chuyện đời sống bình thường mà hầu như ai cũng gặp ít nhiều trong quãng thời gian sống của mình.</p> */}
            {/* <p className='text-left' style={{ fontStyle: 'italic' }}>Hiện tại thì mình mới phát triển phiên bản tiếng Anh và tiếng Việt trên blog này, mong các bạn thông cảm!</p> */}
            <p className='text-lg'>Và đây là câu châm ngôn ưa thích của mình: <span className='text-gray-500'>Đỉnh cao của hoàn hảo là sự đơn giản!</span></p>
          </div>
        </section>

        <section className='py-5' style={{ background: 'url(./img/background-hoang-hon.jpg)' }} id='about'>
          <div className='container'>
            <h2 className='text-3xl font-bold text-rose-100 text-center'>About me</h2>
            <div className='text-center'>
              <h4 className='text-white text-xl'>Mình cũng chỉ là một con người bình thường như bao người khác và cũng chẳng có gì đặc biệt. <br /> Mình viết vài dòng code xàm xàm vậy thôi <i className="fa fa-smile text-lime-300"></i></h4>
              <NavLink to='/about' className='hover:text-purple-500 text-purple-800 hover:underline text-lg'>Bạn có thể tìm hiểu mình là ai, mình làm được những gì ở đây <i className="fa fa-arrow-right"></i></NavLink>
            </div>
          </div>
        </section>

        <section className='container p-5' id='frontend'>
          <h2 className='text-3xl font-bold text-center'>Front-end</h2>
          <p className='text-xl'>Front-end là gì? Front-end theo mình hiểu đơn giản là thiết kế giao diện của 1 trang web, 1 ứng dụng nào đó.</p>
          <p className='text-lg'>Ở đây mình sẽ nói về những thứ cần thiết cho front-end, tạo giao diện cho 1 website cần những gì, và những điều cơ bản về <NavLink className='text-sky-800' to='/tech/reactjs' >ReactJs</NavLink></p>

          <div className='text-right w-2/3'>
            <NavLink to='/dev/frontend' className='hover:text-gray-700 text-gray-500 hover:underline text-lg'>Xem chi tiết <i className="fa fa-arrow-right"></i></NavLink>
          </div>
        </section>

        <section className='p-5 bg-lightBlue-300' id='backend'>
          <div className='container'>
            <h2 className='text-3xl font-bold text-center'>Back-end</h2>
            <p className='text-xl'>Back-end là gì? Back-end theo mình hiểu là thiết kế dữ liệu, luồng đi của dữ liệu đó khi người dùng thao tác trên giao diện của trang web.</p>
            <p className='text-lg'>Mình sẽ nói về những điều cơ bản mà mình biết về thiết kế database, thiết lập các Api, luồng đi của dữ liệu và những điều cần chú ý. Và mình cũng chủ yếu bàn về <NavLink className='text-sky-800' to='/' >NodeJs</NavLink></p>
            <div className='text-right w-2/3'>
              <NavLink to='/dev/backend' className='hover:text-gray-700 text-gray-500 hover:underline text-lg'>Xem chi tiết <i className="fa fa-arrow-right"></i></NavLink>
            </div>
          </div>
        </section>

        <section className='container p-5' id='contact'>
          <h2 className='text-3xl font-bold text-center'>Contact</h2>
          <Form
            {...formItemLayout}
            onSubmitCapture={formik.handleSubmit}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'email không hợp lệ!',
                },
                {
                  required: true,
                  message: 'Email không nên bỏ trống!',
                },
              ]}
            >
              <Input name='email' onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item
              name="name"
              label="Tên của bạn"
              rules={[
                {
                  required: true,
                  message: 'Mình muốn biết tên của bạn!',
                  whitespace: true,
                },
              ]}
            >
              <Input name='name' onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item
              name="comment"
              label="Commnent"
              rules={[
                {
                  required: true,
                  message: 'Comment ở đây nhé!',
                },
              ]}
            >
              <Input.TextArea name='comment' onChange={formik.handleChange} showCount maxLength={200} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
      <div className='col-span-1'>
        <div className='bg-gray-800 fixed w-1/12 h-screen right-0 text-center'>
          <a className='block w-100 text-lg hover:text-white hover:underline' href="#about">About</a>
          <a className='block w-100 text-lg hover:text-white hover:underline' href="#frontend">Front-end</a>
          <a className='block w-100 text-lg hover:text-white hover:underline' href="#backend">Back-end</a>
          <a className='block w-100 text-lg hover:text-white hover:underline' href="#contact">Contact</a>
        </div>
      </div>

    </div>
  )
}

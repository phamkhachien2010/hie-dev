import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { Card } from 'antd';
import styleHomePage from './homepage.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import { useDispatch } from 'react-redux';
import { SEND_COMMENT_API } from '../../redux/constant/ConstantSaga';


const hienImage = require('../../assets/img/avatar2.jpg')
const htmlCssJsimg = require('../../assets/img/html-css-js-img1.jpg')
const nodeJsimg = require('../../assets/img/nodeJS.png')
const backEndImg = require('../../assets/img/back-end-img.jpg')
const reactImg = require('../../assets/img/react-img-home.jpg')
const gitImg = require('../../assets/img/github-img.png')
const mySqlImg = require('../../assets/img/mySql.jpg')

export default function HomePage(props) {

  const dispatch = useDispatch();

  useEffect(() => {


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
      dispatch({
        type: SEND_COMMENT_API,
        comment: values
      })
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
    <div style={{ paddingTop: '112px' }}>
      <div>
        <section className="px-5 bg-indigo-200 text-center py-5">
          <div className='container'>
            <h1 className='text-4xl font-bold'>Hello, Welcome you</h1>
            <p className='text-xl text-left'>Xin chào! Đây là blog mình viết trong thời gian rảnh rỗi, nói về những kỹ năng lập trình, chủ yếu để mình có thể review lại kiến thức dễ dàng, và cũng là 1 dự án để mình đi xin việc.</p>
            {/* <p className='text-left text-xl'>Không những vậy blog này còn chia sẻ những câu chuyện đời sống bình thường mà hầu như ai cũng gặp ít nhiều trong quãng thời gian sống của mình.</p> */}
            {/* <p className='text-left' style={{ fontStyle: 'italic' }}>Hiện tại thì mình mới phát triển phiên bản tiếng Anh và tiếng Việt trên blog này, mong các bạn thông cảm!</p> */}
            {/* <p className='text-lg'>Và đây là câu châm ngôn ưa thích của mình: <span className='text-gray-500'>Đỉnh cao của hoàn hảo là sự đơn giản!</span></p> */}
          </div>
        </section>

        <section className='p-5 bg-lightBlue-300'>
          <h2 className='text-3xl font-bold text-center'>Trang web này giải quyết vấn đề gì?</h2>
          <div className='text-center' id='about__me'>
            <NavLink className={`inline-block hover:no-underline ${styleHomePage.about} ${styleHomePage.hoverAnimate}`} to='/about'>
              <Card
                title='ABOUT ME'
                headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                className='rounded-lg'
                style={{ width: '300px', padding: '10px' }}
                cover={
                  <img src={hienImage} alt='hien img' className='w-4/5' />
                }
              >
                My infomation (a simple person)
              </Card>
            </NavLink>
          </div>

          <h3 className='text-2xl font-bold text-center mt-5 mb-2'>DEV</h3>
          <div className='flex justify-center' id='dev'>
            <div className='text-center mr-5'>
              <ScrollAnimation duration={1} animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
                <NavLink className={`inline-block hover:no-underline  ${styleHomePage.hoverAnimate}`} to='/dev/frontend'>
                  <Card
                    title='FRONT-END'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className='rounded-lg'
                    style={{ width: '300px', padding: '10px' }}
                    cover={
                      <img src={htmlCssJsimg} alt='hien img' className='w-4/5' />
                    }
                  >
                    Produce about front-end
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
            <div className='text-center'>
              <ScrollAnimation duration={1} animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/dev/backend'>
                  <Card
                    title='BACK-END'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className='rounded-lg'
                    style={{ width: '300px', padding: '10px' }}
                    cover={
                      <img src={backEndImg} alt='hien img' className='w-4/5' />
                    }
                  >
                    Produce about back-end
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
          </div>

          <h3 className='text-2xl font-bold text-center mt-5 mb-2'>Công nghệ</h3>
          <div className="grid grid-cols-4">
            <div className='text-center mr-5 mb-5'>
              <ScrollAnimation duration={1} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/tech/reactjs'>
                  <Card
                    title='REACT JS'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className='rounded-lg'
                    style={{ width: '300px', padding: '10px' }}
                    cover={
                      <img src={reactImg} alt='hien img' className='w-4/5' />
                    }
                  >
                    Produce about React js
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
            <div className='text-center mr-5 mb-5'>
              <ScrollAnimation duration={1.2} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/tech/nodejs'>
                  <Card
                    title='NODE JS'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className='rounded-lg'
                    style={{ width: '300px', padding: '10px' }}
                    cover={
                      <img src={nodeJsimg} alt='hien img' className='w-4/5' />
                    }
                  >
                    Produce about NodeJs
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
            <div className='text-center mr-5 mb-5'>
              <ScrollAnimation duration={1.4} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/tech/github'>
                  <Card
                    title='GITHUB'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className='rounded-lg'
                    style={{ width: '300px', padding: '10px' }}
                    cover={
                      <img src={gitImg} alt='hien img' className='w-4/5' />
                    }
                  >
                    Produce about Github
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
            <div className='text-center mr-5 mb-5'>
              <ScrollAnimation duration={1.6} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/tech/mysql'>
                  <Card
                    title='MYSQL'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className='rounded-lg'
                    style={{ width: '300px', padding: '10px' }}
                    cover={
                      <img src={mySqlImg} alt='hien img' className='w-4/5' />
                    }
                  >
                    Produce about Mysql
                  </Card>
                </NavLink>
              </ScrollAnimation>
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

    </div>
  )
}

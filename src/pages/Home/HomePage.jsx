import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { Card } from 'antd';
import styleHomePage from './homepage.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import { useDispatch } from 'react-redux';
import { SEND_COMMENT_API } from '../../redux/constant/ConstantSaga';
import { useTranslation } from 'react-i18next';


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
        span: 4,
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
        span: 18,
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

  const { t } = useTranslation();

  return (
    <div className={styleHomePage.hompage}>
      <div>
        <section className={` bg-indigo-200 text-center ${styleHomePage.content__slog}`}>
          <div className=''>
            <h1 className='text-lg sm:text-xl lg:text-4xl font-bold'>{t('helloWelcome')}</h1>
            <p className='text-xs md:text-lg lg:text-xl text-center'>{t('slogenHomePage')}</p>

          </div>
        </section>

        <section className={`p-5 bg-lightBlue-300 `}>
          <h2 className='text-lg sm:text-xl lg:text-3xl font-bold text-center'>{t('whatProblem')}</h2>
          <div className='text-center' id='about__me'>
            <NavLink className={`inline-block hover:no-underline ${styleHomePage.about} ${styleHomePage.hoverAnimate}`} to='/about'>
              <Card
                title={t('about me')}
                headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                className={`rounded-xl ${styleHomePage.card__style}`}
                cover={
                  <img src={hienImage} alt='hien img' className='w-4/5' />
                }
              >
                <span className='text-xs lg:text-sm'> {t('myInfomation')}</span>
              </Card>
            </NavLink>
          </div>

          <h3 className='text-2xl font-bold text-center mt-5 mb-2'>DEV</h3>
          <div className='flex justify-center'>
            <div className='text-center mr-5 mb-4 lg:mb-0'>
              <ScrollAnimation duration={1} animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
                <NavLink className={`inline-block hover:no-underline  ${styleHomePage.hoverAnimate}`} to='/dev/frontend'>
                  <Card
                    title={t('fronEnd')}
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className={`rounded-xl ${styleHomePage.card__style}`}
                    cover={
                      <img src={htmlCssJsimg} alt='hien img' className='w-4/5' />
                    }
                  >
                    <span className={`text-xs lg:text-sm xl:text-xs ${styleHomePage.front__end}`}>{t('produceFrontEnd')}</span>
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
            <div className='text-center'>
              <ScrollAnimation duration={1} animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/dev/backend'>
                  <Card
                    title={t('backEnd')}
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className={`rounded-xl ${styleHomePage.card__style}`}
                    cover={
                      <img src={backEndImg} alt='hien img' className='w-4/5' />
                    }
                  >
                    <span className='text-xs lg:text-sm'>{t('produceBackEnd')}</span>
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
          </div>

          <h3 className='text-2xl font-bold text-center mt-5 mb-2'>{t('technology')}</h3>
          <div className="grid grid-cols-2 xl:grid-cols-4">
            <div className='text-center mr-5 mb-5'>
              <ScrollAnimation duration={1} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                <NavLink className={`inline-block hover:no-underline ${styleHomePage.hoverAnimate}`} to='/tech/reactjs'>
                  <Card
                    title='REACT JS'
                    headStyle={{ textAlign: 'center', fontWeight: 'bold', padding: '0' }}
                    className={`rounded-xl ${styleHomePage.card__style}`}
                    cover={
                      <img src={reactImg} alt='hien img' className='w-4/5' />
                    }
                  >
                     <span className='text-xs lg:text-sm xl:text-xs'>{t('produceReactjs')}</span>
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
                     className={`rounded-xl ${styleHomePage.card__style}`}
                    cover={
                      <img src={nodeJsimg} alt='hien img' className='w-4/5' />
                    }
                  >
                   <span className='text-xs lg:text-sm xl:text-xs'> {t('producenodejs')}</span>
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
                     className={`rounded-xl ${styleHomePage.card__style}`}
                    cover={
                      <img src={gitImg} alt='hien img' className='w-4/5' />
                    }
                  >
                   <span className='text-xs lg:text-sm'> {t('producegithub')}</span>
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
                     className={`rounded-xl ${styleHomePage.card__style}`}
                    cover={
                      <img src={mySqlImg} alt='hien img' className='w-4/5' />
                    }
                  >
                    <span className='text-xs lg:text-sm'>{t('produceMysql')}</span>
                  </Card>
                </NavLink>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className={styleHomePage.contact__content}>
          <h2 className='text-xl lg:text-3xl font-bold text-center'>{t('contact')}</h2>
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
                  message: `${t('emailValid')}`,
                },
                {
                  required: true,
                  message: `${t('emailRequire')}`,
                },
              ]}
            >
              <Input name='email' onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item
              name="name"
              label={t('name')}
              rules={[
                {
                  required: true,
                  message: `${t('nameValid')}`,
                  whitespace: true,
                },
              ]}
            >
              <Input name='name' onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item
              name="comment"
              label="Comment"
              rules={[
                {
                  required: true,
                  message: `${t('commentValid')}`,
                },
              ]}
            >
              <Input.TextArea name='comment' onChange={formik.handleChange} showCount maxLength={200} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                {t('send')}
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>

    </div>
  )
}

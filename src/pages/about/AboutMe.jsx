import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from './about.module.css'
import { Button, Form, Input, Tabs } from 'antd';
import { Carousel } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { SEND_COMMENT_API } from '../../redux/constant/ConstantSaga';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';

const { TabPane } = Tabs;

const mySkill = [
  {
    name: 'HTML/CSS',
    skills: [
      { name: <i className="fab fa-html5" /> },
      { name: <i className="fab fa-css3" /> },
      { name: <i className="fab fa-bootstrap" /> },
      { name: <i className="fab fa-sass" /> },
      { name: 'Responsive' }
    ]
  },
  {
    name: 'JavaScript',
    skills: [
      { name: 'ES5/ES6' },
      { name: 'Jquery' },
      { name: 'Axios' },
      { name: 'Restfull API' },
    ]
  },
  {
    name: 'ReactJs',
    skills: [
      { name: 'ReactJs basic' },
      { name: 'Router' },
      { name: 'React Hooks' },
    ]
  },
  {
    name: 'Back-end',
    skills: [
      { name: 'NodeJs' },
    ]
  },
  {
    name: 'Git',
    skills: [
      { name: 'Git basic' },
    ]
  },
  {
    name: 'Knowledge',
    skills: [
      { name: 'OOP' },
      { name: 'Data Structure and Algorithms' }
    ]
  },

  {
    name: 'Soft skills',
    skills: [
      { name: 'Teamwork' },
      { name: 'Self study' }
    ]
  },
  {
    name: 'Language',
    skills: [
      { name: 'English B1' },
    ]
  },
]

const myProject = [
  {
    name: "HTML/CSS Projects",
    listProject: [
      {
        projectName: 'Housing homepage',
        description: 'Homepage about homestay and travel',
        technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-housing-deploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/housing-deploy',
        bgImage: require('../../assets/imgAbout/housing.png')
      },
      {
        projectName: 'Bake homepage',
        description: 'Homepage about cakes',
        technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-bake-deploy.netlify.app/',
        linkGithub: 'https://github.com/phamkhachien2010/bake-deploy',
        bgImage: require('../../assets/imgAbout/bake.png')
      },
      {
        projectName: 'Merged homepage',
        description: 'Homepage about a busines company',
        technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-merged.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/mergedDeploy',
        bgImage: require('../../assets/imgAbout/merged.png')
      },
    ]
  },
  {
    name: "SASS/Responsive Projects",
    listProject: [
      {
        projectName: 'Honda homepage',
        description: 'Homepage about Honda',
        technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-hondadeploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/hondaDeploy',
        bgImage: require('../../assets/imgAbout/honda.png')
      },
      {
        projectName: 'Instruction homepage',
        description: 'Homepage about job in Design',
        technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-instruction-deploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/instruction-deploy',
        bgImage: require('../../assets/imgAbout/instruction.png')
      },
      {
        projectName: 'Elearning homepage',
        description: 'Homepage about course of Programing',
        technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-elearningdeploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/elearning-depoly',
        bgImage: require('../../assets/imgAbout/elearning.png')
      },
    ]
  },
  {
    name: "ReactJs Projects",
    listProject: [
      {
        projectName: 'Booking ticket movie website',
        description: 'Website about Booking ticket movie and manage user',
        technology: 'ReactJs, React functional component, redux, redux thunk ...',
        linkDemo: 'http://phamkhachien_booking_ticket_movie.surge.s',
        linkGithub: 'https://github.com/phamkhachien2010/booking-ticket-deploy',
        bgImage: require('../../assets/imgAbout/bookingticket.png')
      },
      {
        projectName: 'Jira clone website',
        description: 'Website about about manage task and user',
        technology: 'ReactJs, React functional component, redux, redux saga ...',
        linkDemo: 'http://phamkhachien-jira-clone.surge.sh',
        linkGithub: 'https://github.com/phamkhachien2010/jira-clone-deploy',
        bgImage: require('../../assets/imgAbout/jiraclone.png')
      },
    ]
  }
]

export default function AboutMe(props) {

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)

    return () => {

    }
  }, [])

  const renderLiSkills = (skills) => {
    return skills.map((skill, index) => {
      return <li key={index}>
        <div className={style.skill_item}>{skill.name}</div>
      </li>
    })
  }

  const renderMySkill = () => {
    return mySkill.map((skills, index) => {
      return <ScrollAnimation key={index} duration={1} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
        <div className={style.skills}>
          <h6><i className="fa fa-circle" />{skills.name}</h6>
          <ul className={style.skill__list}>
            {renderLiSkills(skills.skills)}
          </ul>
        </div>
      </ScrollAnimation>
    })
  }

  const renderCarouselItemProject = (listProject) => {
    return listProject.map((project, index) => {
      return <div key={index}>
        <div className={`flex flex-col justify-center pl-5 ${style.project__item}`} style={{ backgroundImage: `url(${project.bgImage})` }}>
          <div className={style.project__overlay}>
            <div className="text-white text-xs sm:text-lg">
              <div><span>Project's name: </span><span className="text-blue-400">{project.projectName}</span></div>
              <div><span>Description: </span><span>{project.description}</span></div>
              <div><span>Technology: </span><span>{project.technology}</span></div>
            </div>
            <a className='px-2 py-2 mt-3 mr-3 bg-transparent border-2 text-xs md:text-base hover:no-underline inline-block rounded-lg' target="_blank" href={project.linkDemo}>Link demo</a>
            <a className='px-2 py-2 mt-3 bg-transparent border-2 hover:no-underline inline-block rounded-lg' target="_blank" href={project.linkGithub}>Link github</a>
          </div>
        </div>
      </div>
    })
  }

  const renderTabProject = () => {
    return myProject.map((projects, index) => {
      return <TabPane tab={projects.name} key={index}>
        <div className='w-2/3 m-auto'>
          <Carousel autoplay effect="fade">
            {renderCarouselItemProject(projects.listProject)}
          </Carousel>
        </div>
      </TabPane>
    })
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 10,
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
        span: 10,
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

  const { t } = useTranslation();

  return (
    <div>
      <div style={{ paddingTop: '112px' }} className={`${style.aboutme__content} grid grid-cols-12 px-3`}>
        <div className='col-span-12 sm:col-span-8 lg:pt-5 text-center flex flex-col justify-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl '>{t('phamkhachien')}</h1>
          <h2 className='text-3xl text-white' >{t('fullstackDeveloper')}</h2>
          <p className='text-left text-xs md:text-sm xl:text-lg'>{t('aboutSlogen')}</p>
          <ScrollAnimation animateIn='animate__tada'>
            <div className='mt-5'>
              <NavLink to='/' target='_blank' className='bg-rose-500 border-2 rounded-full px-3 py-2 hover:bg-white hover:text-black hover:no-underline inline-block'>{t('mycv')}</NavLink>
            </div>
          </ScrollAnimation>
        </div>

        <div className='col-span-4 hidden sm:block'>
          <ScrollAnimation duration={1} animateIn='animate__fadeInUp' animateOut='animate__fadeOut'>
            <img className='' src={require('../../assets/img/avatarc.jpg')} alt="avatarc" />
          </ScrollAnimation>
        </div>

      </div>

      <section className={style.about__id} id="about">
        <div className={style.about} />
        <ScrollAnimation duration={1.5} animateIn='animate__zoomIn' animateOut='animate__zoomOut'>
          <div className={style.about__content}>
            <h2 className='text-center text-3xl font-bold'>{t('about me')}</h2>
            <div className="grid lg:grid-cols-2">
              <ScrollAnimation duration={1.2} animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
                <div className={`hidden sm:flex justify-center ${style.about_img}`}>
                  <img src={require('../../assets/img/avatar2.jpg')} alt="avatar2" />
                </div>
              </ScrollAnimation>
              <div className={`${style.information} pl-5 sm:pl-4`}>
                <ul>
                  <li>
                    <ScrollAnimation duration={1} animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                      <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-user" /> {t('name')}</span> <span className={style.info__text}>{t('phamkhachien')}</span>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation duration={1.2} animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                      <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-map-marker-alt" /> {t('address')}</span> <span className={style.info__text}> {t('addressName')}</span>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation duration={1.4} animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                      <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-envelope" /> Email</span> <span className={style.info__text}> phamkhachien17@gmail.com</span>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation duration={1.6} animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                      <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-phone" /> {t('phone')}</span> <span className={style.info__text}> 0971948634</span>
                    </ScrollAnimation>
                  </li>
                </ul>
                <div className="flex">
                  <ScrollAnimation duration={1} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                    <div className={`${style.info__icon} ${style.icon__facebook}`}>
                      <a href="https://www.facebook.com/hien.phamkhac.1656/" target="_blank"><i className="fab fa-facebook-f" /></a>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation duration={1} animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                    <div className={`${style.info__icon} ${style.icon__github}`}>
                      <a href="https://github.com/phamkhachien2010" target="_blank"><i className="fab fa-github" /></a>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section id="resume" className='py-5' style={{ backgroundImage: 'url(./img/backgroud-resume.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <h2 className='text-center text-3xl font-bold'>{t('resume')}</h2>
        <div className={style.resume__content}>
          <div className="text-base">
            <div>
              <div className={`text-xs md:text-md lg:text-lg ${style.experience}`}>
                <h5 className="font-bold mb-0">{t('experience')}</h5>
                <hr />
                <p>- {t('exper1')}</p>
                <p>- {t('exper2')}</p>
                <p>- {t('exper3')}</p>
                <p>- {t('exper4')}</p>
                <p>- {t('exper-end')}</p>
              </div>
            </div>
            <div>
              <div className={`text-xs md:text-md lg:text-lg ${style.education}`}>
                <h5 className="font-bold mt-0 lg:mt-3 mb-0">{t('education')}</h5>
                <hr />
                <p className="font-bold">{t('cybersoftLearning')}</p>
                <p>- {t('timeLearnOnCyber')}</p>
                <p>- {t('programCourse')}</p>
                <p>- {t('frontendcourse')}</p>
                <p>- {t('frontendReact')}</p>
                <p>- {t('nodeJS')}</p>
                <p className="font-bold">{t('MALStudy')}</p>
                <p>- {t('learnOnMAL')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.skills__id}`} id="skills" style={{ backgroundImage: 'url(./img/background-skill.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className=" text-base">
          <h2 className='text-center text-xl md:text-3xl font-bold'>{t('skill')}</h2>
          {renderMySkill()}
        </div>
      </section>

      <section className=' py-5'>
        <h2 className='text-center text-xl md:text-3xl font-bold'>{t('project')}</h2>
        <h6 className='text-center text-sm md:text-lg'>{t('projectSlog')} <a href="https://cyberlearn.vn/" target='_blank' className='text-blue-500'>Cyberlearn</a></h6>
        <Tabs defaultActiveKey="1">
          {renderTabProject()}
        </Tabs>
      </section>

      <section className='contact__form py-5' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?size=626&ext=jpg&uid=R71559152&ga=GA1.2.232571487.1602147622)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className=''>
          <h2 className='text-center text-3xl font-bold text-white'>{t('contact')}</h2>
          <Form
            {...formItemLayout}
            onSubmitCapture={formik.handleSubmit}
            scrollToFirstError
            className='w-4/5 m-auto'
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
        </div>
      </section>

    </div>
  )
}

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from './about.module.css'
import { Button, Form, Input, Tabs } from 'antd';
import { Carousel } from 'antd';
import { useFormik } from 'formik';

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
        bgImage: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/281572731_756054525535758_4415094465549776548_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=m5KXrF-a9poAX_fkg9I&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT8PF-t1YYkFgjmg6hR9GQyOwZqTYWmbBYtobo-IAgwqUw&oe=628B9467'
      },
      {
        projectName: 'Bake homepage',
        description: 'Homepage about cakes',
        technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-bake-deploy.netlify.app/',
        linkGithub: 'https://github.com/phamkhachien2010/bake-deploy',
        bgImage: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/280500673_756054585535752_721281389742887875_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=L1tIYAbBJOEAX-O0c6H&tn=gSge2FSkOv9qrkI9&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8ypeHOCOKGVBhXjymT5TU6zQuODo_IktNQ4eHhD7F6lw&oe=628B393A'
      },
      {
        projectName: 'Merged homepage',
        description: 'Homepage about a busines company',
        technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-merged.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/mergedDeploy',
        bgImage: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/283096233_756054648869079_2346049001088418398_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=9IzfbyoDlGIAX9u1hAQ&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_Hw2NhCvXYvVzL2GZ0Yo82Nc8k-Efj7TR9SxWCQYrXfw&oe=628BA485'
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
        bgImage: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/280450918_756054548869089_8938495260015686792_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=EFrv1vjF5M0AX9rnmiH&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT9bs9chM3cjebx4gv0Vwgmp3Vcx-X3s8PgXc1MFhA4eEA&oe=628BDC5E'
      },
      {
        projectName: 'Instruction homepage',
        description: 'Homepage about job in Design',
        technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-instruction-deploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/instruction-deploy',
        bgImage: 'https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/281271978_756054662202411_3964373805953894479_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=PwJ1M3un_okAX_Hnxcz&tn=gSge2FSkOv9qrkI9&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT8RpuqmJqlUaYpCUDEFHmhtMWQJzreMvWE4wmkuxdO0TQ&oe=628C2751'
      },
      {
        projectName: 'Elearning homepage',
        description: 'Homepage about course of Programing',
        technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-elearningdeploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/elearning-depoly',
        bgImage: 'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/281739162_756054595535751_7767835138963970455_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=DrAUyFxTBCgAX8J5K69&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT9HTIm2jcKEzPuPgLngTtXHJd2-hA02NAfp5X8xJxzvZA&oe=628B0F16'
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
        bgImage: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/282870019_756054705535740_7387877389122198732_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=zmkQDp_Z-jEAX95vZGt&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT8G7V2z9amt6DWaGc9_BQkMhHxoE0PGPtwaUor29Jj0aQ&oe=628B488D'
      },
      {
        projectName: 'Jira clone website',
        description: 'Website about about manage task and user',
        technology: 'ReactJs, React functional component, redux, redux saga ...',
        linkDemo: 'http://phamkhachien-jira-clone.surge.sh',
        linkGithub: 'https://github.com/phamkhachien2010/jira-clone-deploy',
        bgImage: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/281722640_756054475535763_6880298382982924284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=xesBg-LFzBYAX9V0i80&_nc_oc=AQlg3Boky1VRYB6RIAzVh46EAU6MwUHXepkN_HuvopCUzQgDZv_XEubp1-Mk9Tocxrk&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT_yb77vwdWI-OvKLVeog-2-jwz-arTiOml86lLTV95VCA&oe=628B6C16'
      },
    ]
  }
]

export default function AboutMe(props) {

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

  const renderLiSkills = (skills) => {
    return skills.map((skill, index) => {
      return <li key={index}>
        <div className={style.skill_item}>{skill.name}</div>
      </li>
    })
  }

  const renderMySkill = () => {
    return mySkill.map((skills, index) => {
      return <div key={index} className={style.skills}>
        <h6><i className="fa fa-circle" />{skills.name}</h6>
        <ul className={style.skill__list}>
          {renderLiSkills(skills.skills)}
        </ul>
      </div>
    })
  }

  const renderCarouselItemProject = (listProject) => {
    return listProject.map((project, index) => {
      return <div key={index}>
        <div className={`flex flex-col justify-center pl-5 ${style.project__item}`} style={{ backgroundImage: `url(${project.bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '300px' }}>
          <div className={style.project__overlay}>
            <div className="text-white text-lg">
              <div><span>Project's name: </span><span className="text-blue-400">{project.projectName}</span></div>
              <div><span>Description: </span><span>{project.description}</span></div>
              <div><span>Technology: </span><span>{project.technology}</span></div>
            </div>
            <a className='px-2 py-2 mt-3 mr-3 bg-transparent border-2 hover:no-underline inline-block rounded-lg' target="_blank" href={project.linkDemo}>Link demo</a>
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
    <div>
      <div style={{ paddingTop: '112px' }} className={`${style.aboutme__content} grid grid-cols-12`}>
        <div className='col-span-8 container py-5 text-center flex flex-col justify-center'>
          <h1 className='text-4xl '>PHAM KHAC HIEN</h1>
          <h2 className='text-3xl text-white' >Lập trình viên Full stack</h2>
          {/* <p className='text-left text-lg'>I am interested in new technology, always want to change my mindset </p> */}
          <p className='text-left text-lg'>Mình rất thích tìm hiểu về những công nghệ mới, học thêm những kiến thức về công nghệ, yêu thích sáng tạo, khao khát phát triển bản thân và đặt mục tiêu hoàn thành nhiệm vụ lên hàng đầu.</p>
          <div className='mt-5'>
            <NavLink to='/' target='_blank' className='bg-rose-500 border-2 rounded-full px-3 py-2 hover:bg-white hover:text-black hover:no-underline inline-block'>My CV PDF</NavLink>
          </div>
        </div>
        <div className='col-span-4'>
          <img src={require('../../assets/img/avatarc.jpg')} alt="avatarc" />
        </div>
      </div>

      <section className={style.about__id} id="about">
        <div className={style.about} />
        <div className={style.about__content}>
          <h2 className='text-center text-3xl font-bold'>About Me</h2>
          <div className="grid grid-cols-2">
            <div className={`flex justify-center ${style.about_img}`}>
              <img src={require('../../assets/img/avatar2.jpg')} alt="avatar2" />
            </div>
            <div className={`${style.information}`}>
              <ul>
                <li>
                  <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-user" /> Name</span> <span className={style.info__text}> Pham Khac Hien</span>
                </li>
                <li>
                  <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-map-marker-alt" /> Adress</span> <span className={style.info__text}> 105 Lang Ha, Dong Da, Ha Noi</span>
                </li>
                <li>
                  <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-envelope" /> Email</span> <span className={style.info__text}> phamkhachien17@gmail.com</span>
                </li>
                <li>
                  <span className={`${style.infomation__info} ${style.info__text}`}><i className="fa fa-phone" /> Phone</span> <span className={style.info__text}> 0971948634</span>
                </li>
              </ul>
              <div className="flex">
                <div className={`${style.info__icon} ${style.icon__facebook}`}>
                  <a href="https://www.facebook.com/hien.phamkhac.1656/" target="_blank"><i className="fab fa-facebook-f" /></a>
                </div>
                <div className={`${style.info__icon} ${style.icon__github}`}>
                  <a href="https://github.com/phamkhachien2010" target="_blank"><i className="fab fa-github" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className='py-5' style={{ backgroundImage: 'url(./img/backgroud-resume.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <h2 className='text-center text-3xl font-bold'>My Resume</h2>
        <div className={style.resume__content}>
          <div className="grid grid-cols-2 lg:grid-cols-1 text-base">
            <div>
              <div className={style.experience}>
                <h5 className="font-bold">EXPERIENCE</h5>
                <hr />
                <p>- Learning and practicing with many Front-end projects</p>
                <p>- Working on my own projects with learned Front-end skills</p>
                <p>- Proficient in use Redux and some libraries relate to ReactJs</p>
                <p>- Actually I don't have much experience at front-end developer. But I have passion for technology, and wish for change my skills. And I hope I can do something with my ability to your company's development</p>
              </div>
            </div>
            <div>
              <div className={style.education}>
                <h5 className="font-bold">EDUCATION</h5>
                <hr />
                <p className="font-bold">Cybersoft - Cyberlearn Programing Education Center</p>
                <p>- Student of Cybersoft (8/2021 - 4/2022)</p>
                <p>- Programming course: thinking in programming, problem-solving, Java language, OOP</p>
                <p>- Front-end Foundation course: basic knowledge of HTML5, CSS3, Bootstrap 4, SASS/SCSS, Javascript (ES5/ES6), Jquery, AJAX, Git, ...</p>
                <p>- Front End Master ReactJS course: base ReactJs, React class component, React functional component, life-circle, React function hooks, redux, AJAX and some libraries</p>
                <p className="font-bold">Military Academy of Logistics (2015-2019)</p>
                <p>- Studied and trained as a soilder of the VietNam’s Army</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.skills__id} py-5`} id="skills" style={{ backgroundImage: 'url(./img/background-skill.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="container text-base">
          <h2 className='text-center text-3xl font-bold'>My Skills</h2>
          {renderMySkill()}
        </div>
      </section>

      <section className='container py-5'>
        <h2 className='text-center text-3xl font-bold'>My projects</h2>
        <h6 className='text-center text-lg'>There are my projects, that i did when i learn at <a href="#" className='text-blue-500'>Cyberlearn</a></h6>
        <Tabs defaultActiveKey="1">
          {renderTabProject()}
        </Tabs>
      </section>

      <section className='contact__form py-5' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?size=626&ext=jpg&uid=R71559152&ga=GA1.2.232571487.1602147622)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='container'>
        <h2 className='text-center text-3xl font-bold text-white'>Contact with me</h2>
        <Form
          {...formItemLayout}
          scrollToFirstError
          onSubmitCapture={formik.handleSubmit}
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
            label="Comment"
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
        </div>
      </section>

    </div>
  )
}

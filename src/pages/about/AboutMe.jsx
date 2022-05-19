import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './about.module.css'
import { Tabs } from 'antd';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

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
        Description: 'Homepage about homestay and travel',
        Technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-housing-deploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/housing-deploy',
        bgImage: ''
      },
      {
        projectName: 'Bake homepage',
        Description: 'Homepage about cakes',
        Technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-bake-deploy.netlify.app/',
        linkGithub: 'https://github.com/phamkhachien2010/bake-deploy',
        bgImage: ''
      },
      {
        projectName: 'Merged homepage',
        Description: 'Homepage about a busines company',
        Technology: 'HTML5, CSS3, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-merged.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/mergedDeploy',
        bgImage: ''
      },
    ]
  },
  {
    name: "SASS/Responsive Projects",
    listProject: [
      {
        projectName: 'Honda homepage',
        Description: 'Homepage about Honda',
        Technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-hondadeploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/hondaDeploy',
        bgImage: ''
      },
      {
        projectName: 'Instruction homepage',
        Description: 'Homepage about job in Design',
        Technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-instruction-deploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/instruction-deploy',
        bgImage: ''
      },
      {
        projectName: 'Elearning homepage',
        Description: 'Homepage about course of Programing',
        Technology: 'HTML5, CSS3, SASS, responsive, Jquery, Owlcarousel',
        linkDemo: 'https://phamkhachien-elearningdeploy.netlify.app',
        linkGithub: 'https://github.com/phamkhachien2010/elearning-depoly',
        bgImage: ''
      },
    ]
  },
  {
    name: "ReactJs Projects",
    listProject: [
      {
        projectName: 'Booking ticket movie website',
        Description: 'Website about Booking ticket movie and manage user',
        Technology: 'ReactJs, React functional component, redux, redux thunk ...',
        linkDemo: 'http://phamkhachien_booking_ticket_movie.surge.s',
        linkGithub: 'https://github.com/phamkhachien2010/booking-ticket-deploy',
        bgImage: ''
      },
      {
        projectName: 'Jira clone website',
        Description: 'Website about about manage task and user',
        Technology: 'ReactJs, React functional component, redux, redux saga ...',
        linkDemo: 'http://phamkhachien-jira-clone.surge.sh',
        linkGithub: 'https://github.com/phamkhachien2010/jira-clone-deploy',
        bgImage: ''
      },
    ]
  }
]

export default function AboutMe(props) {

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

  const renderTabContentProject = (listProject) => {
    return listProject.map((project, index) => {
      return true
    })
  }

  const renderTabProject = () => {
    return myProject.map((projects, index) => {
      return <TabPane tab={projects.name} key={index}>
        Content of Tab Pane 1
      </TabPane>
    })
  }

  return (
    <div>
      <div style={{ paddingTop: '112px' }} className={`${style.aboutme__content} grid grid-cols-12`}>
        <div className='col-span-8 container py-5 text-center flex flex-col justify-center'>
          <h1 className='text-4xl '>PHẠM KHẮC HIỀN</h1>
          <h2 className='text-3xl text-white' >Lập trình viên Full stack</h2>
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
        <h2 className='text-center text-3xl font-bold'>Những dự án đã thực hiện</h2>
        <h6 className='text-center text-lg'>Dưới đây là những dự án mình đã làm trong thời gian học tập tại <a href="#" className='text-blue-500'>Cyberlearn</a></h6>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            <div className='w-2/3 m-auto'>
              <Carousel  effect="fade"> 
              {/* autoplay */}
                <div>
                  <div className="" style={{backgroundImage:'url(https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-9/88107580_223192912155258_277082354743246848_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f7qDkaFXtbAAX8Qbw6K&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT_O0j2kAoSXpkprk6tXP2wl_6h6py7wu-CO7Ya35h3mLQ&oe=62ACF651)'}}>
                    
                    <div className="">
                      <div><span>Project's name: </span><span className="">Housing homepage</span></div>
                      <div><span>Description: </span><span>Homepage about homestay and travel</span></div>
                      <div><span>Technology: </span><span>HTML5, CSS3, Jquery, Owlcarousel</span></div>
                    </div>
                    <button className=""><a target="_blank" href="https://phamkhachien-housing-deploy.netlify.app">Link demo</a></button>
                    <button className=""><a target="_blank" href="https://github.com/phamkhachien2010/housing-deploy">Link github</a></button>
                  </div>

                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </section>

    </div>
  )
}

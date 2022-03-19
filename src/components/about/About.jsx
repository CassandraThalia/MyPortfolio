import React from 'react'
import './about.css'
import ME from '../../assets/lobster.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Things You Should Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt='Me' />
          </div>
        </div>
        <div className="about_content">

          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Museums</h5>
              <small>5+ Years</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Coding</h5>
              <small>2 Years</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Customer Service</h5>
              <small>10+ Years</small>
            </article>
          </div>

          <p>
          Hi! I'm Cassandra. I love history and I love to code. I am set to graduate with a diploma in IT Programming in 2022 and I can't wait to start working on exciting new projects. I'm passionate about cultural heritage and I'm always interested in exploring new ways to use technology to further our understanding of our history and ourselves. If my particular blend of specialities sounds like something you need, please message me!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
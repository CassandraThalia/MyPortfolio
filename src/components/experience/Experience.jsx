import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills & Education</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Computer Programming</h3>
          <div className="experience_content">
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>  
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'> 
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Museums and Archives</h3>
          <div className="experience_content">
              <article className='experience_details'> 
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>Collection's Management</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'> 
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>Interpretation & Education</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'> 
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>Events & Programming</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'> 
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>Archive & Records Management</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'> 
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>Visitor Research</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'> 
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>Curating & Install</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
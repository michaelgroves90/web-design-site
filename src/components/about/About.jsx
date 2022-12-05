import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
    
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2 Years Working</small>

          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>

          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>

          </article>

        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent libero turpis, porttitor sed congue vitae, tempor sit amet diam. 
          Aliquam tempor cursus urna, id laoreet nunc fermentum vitae. Donec aliquet, 
          nunc finibus placerat commodo, arcu elit vehicula velit, 
          in consectetur nisl tortor at metus. Phasellus quis nisi est. 
          Nullam blandit libero quam, ac egestas massa facilisis vel. 
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>

    </section>
  )
}

export default About
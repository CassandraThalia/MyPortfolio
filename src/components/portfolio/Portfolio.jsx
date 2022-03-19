import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/map2.png'
import IMG2 from '../../assets/at1.png'
import MAPIMG3 from '../../assets/map3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Oral History Map",
    github: "https://github.com/CassandraThalia/DHMOralHistoryMap",
    demo: "https://cassandrathalia.github.io/DHMOralHistoryMap/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Audio Tour App",
    github: "https://github.com/CassandraThalia/Evergreen-House-Audio-Tour",
    demo: ""
  },
  {
    id: 3,
    image: MAPIMG3,
    title: "Other Coding Examples",
    github: "https://github.com/CassandraThalia",
    demo: ""
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (<article key={id} className='portfolio_item'>
                    <div className="portfolio_item-image">
                      <img src={image} alt={title} />
                    </div>
                      <h3>{title}</h3> 
                      <div className="portfolio_item-cta">
                        <a href={github} className='btn' target='_blank'>Github</a> 
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>   
                      </div>
                  </article>)
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Cassandra Curtis | Portfolio</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_copyright'>
        <small>&copy; Cassandra Curtis | Made with help from <a href='https://www.youtube.com/watch?v=G-Cr00UYokU'> EGATOR Tutorials</a></small>
      </div>
    </footer>
  )
}

export default Footer
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';
import LogoTitle from '../assets/images/Tsola.png'

import './HomePage.css'

const HomePage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [imgLetterClass, setImgLetterClass] = useState('img-letter-temp')

  const nameArray = ['o', 'm', 'a', 's']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setImgLetterClass('img-letter')
    }, 4000) 
  }, []) 

  return (
    <div className='main-info'>
      <div className='main-text'>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt="developer" className={imgLetterClass} />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>
      </div>
      <div className='aditional-text'>
        <ul>
          <li>Aeronautic Engineer /</li>
          <li>Frontend Developer /</li>
          <li>Backend Developer /</li>
          <li>Python /</li>
          <li>JavaScript /</li>
          <li>Node-Express /</li>
          <li>React-Redux /</li>
        </ul>
      </div>
      <Link to="/contact" className='flat-button'>Contact Me!</Link>
    </div>
  )
}

export default HomePage
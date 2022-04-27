import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const contactMeArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000) 
  }, []) 

  return (
    <>
      <div className='main-text'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMeArray}
              idx={5}
            />
          </h1>
          <p>
          If you are interested in my profile, please send me a message!
          </p>
      </div>
    
    <Loader type="pacman" />
  </>
  )
}

export default Contact
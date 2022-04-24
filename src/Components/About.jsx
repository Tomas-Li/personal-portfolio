import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'

import './About.css'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const aboutMeArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', ':']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000) 
  }, []) 

  return (
    <div class="main-info">
      <div className='main-text'>
          <p>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutMeArray}
              idx={15}
            />
          </p>
        <div className="about-text">
          <p> 
            I'm an <b>Aeronautic Engineer</b> who has a passion for coding and developing new things!
            My knowledge extends to <b>Linux</b>, <b>Frontend</b> (Html, Css, Js, React-redux, + Frameworks), <b>Backend</b> (Python, Node, Express), and <b>numerical and physics knowledge</b> from my career!
          </p>
          <p>
            I love working in small groups where we can help each other, and I especially love working in new things which challenge me!
          </p>
          <p>
            If I have to define myself in one sentence that would be a hard-working person who can't rest until everything he has to do is done. Personallity wise, I'm the kind of guy who enjoys expending his free time relaxing at home, while learning new things or being in a call with my friends. BTW I LOVE TECH! If you want to make me happy just talk to my about new developings or intresting facts that you know.
          </p> 
        </div>
      </div>
    </div>
  )
}

export default About
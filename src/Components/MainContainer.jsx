import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact'
import Cube from './Cube'
import Form from './Form'

import './MainContainer.css'
import Logo from './Logo';

const MainContainer = () => {
  return (
    <div className='main-container'>
      <div className='info-container'>
        <div className='tags'>
          &lt;html&gt; <br/>
          &nbsp;&nbsp;&lt;body&gt;
        </div>
        <div className='main-content'>
          <div style={{minWidth: "20%"}}></div>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
        <div className='tags'>
          &nbsp;&nbsp;&lt;/body&gt; <br/>
          &lt;/html&gt;
        </div>
      </div>
      <div className='deco-container'>
        <div>
          <Routes>
            <Route path='/' element={<Logo />}/>
            <Route path='/about' element={<Cube />}/>
            <Route path='/contact' element={<Form />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainContainer
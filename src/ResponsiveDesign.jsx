import React from 'react'
import './ResponsiveDesign.css'
import NavTest from './NavTest'
import SomeThing from './SomeThing'
import PageTransform from './PageTransform'
import AutoMove from './AutoMove'

function ResponsiveDesign() {
  return (
    <div id='container'>
        <SomeThing/>
         <div id='head-container'>
            <h1 id='head'>Responsive cards</h1>
        </div>

        <div id='inner-container'>
        <NavTest/>
       
        <div id='card-container'>
            <div className='card-item'>300x300</div>
            <div className='card-item'>300x300</div>
            <div className='card-item'>300x300</div>
            <div className='card-item'>300x300</div>
        </div>
        </div>
        <AutoMove/>
        <PageTransform/>
        
    </div>
  )
}

export default ResponsiveDesign;
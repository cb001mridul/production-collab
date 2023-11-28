import React from 'react'
import './ProfileContrib.css'
import Element1 from './Elements/Element1'
import Element2 from './Elements/Element2'
import Element3 from './Elements/Element3'
import Header from '../Header/Header'

function ProfileContrib() {
  return (
    <>
    <Header text1="Admins" text2="Home" text3="Project-list"/>
    <div className='cp2'>
        <Element1/>
        <Element2/>
        <Element3/>
    </div>
    </>
  )
}

export default ProfileContrib
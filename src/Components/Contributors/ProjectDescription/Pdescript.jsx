import React from 'react'
import './Pdescript.css'
import Component1 from './Component1'
import Component2 from './Component2'
import Header from '../../Header/Header'

function Pdescript() {
  return (
    <>
      <Header text1="Admins" text2="Profile" text3="Project-list"/>
      <Component1/>
      <Component2/>
    </>
  )
}

export default Pdescript
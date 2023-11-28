import React from 'react'
import Main_Container1 from './Main_Container1'
import Main_Container2 from './Main_Container2'
import Header from '../Header/Header'

function Main() {
  return (
    <main>
        <Header text1="Home" text2="About" text3="Contact"/>
        <Main_Container1/>
        <Main_Container2/>
    </main>
  )
}

export default Main
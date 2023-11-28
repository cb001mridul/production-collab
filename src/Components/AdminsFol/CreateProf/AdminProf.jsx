import React from 'react'
import './AdminProf.css'
import Header from '../../Header/Header'

function AdminProf() {
  return (
    <>
    <Header text1="Contributors" text2="Teams" text3="Projects"/>
    <main className='cp8'>
        <h2>Complete your profile</h2>
        <input type="text" placeholder="name"/>
        <textarea name="description" id="cp8_desc" cols="0" rows="0" placeholder="Describe Yourself"></textarea>
        <input type="text" placeholder="Enter your Skills"/>
        <input type="text" placeholder="Prior Exp"/>
        <input type="text" placeholder="Education"/>

        <div class="cp8_documents">
            <label for="doocument">Upload your Profile Pic</label>
            <input class="cp8_fileInput" type="file"/>
        </div>

        <div class="cp8_documents">
            <label for="doocument">Upload your Resume</label>
            <input class="cp8_fileInput" type="file"/>
        </div>

        <button class="cp8_submit">Submit</button>
    </main>
    </>

  )
}

export default AdminProf
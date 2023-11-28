import React from 'react'
import './CreateProfile.css'
import Header from '../../Header/Header'

function CreateProfile() {
  return (
    <>
    <Header text1="Home" text2="View Team" text3="Projectsx"/>
    <main className='cp7'>
        <h2>Complete your profile</h2>
        <input type="text" placeholder="name"/>
        <textarea name="description" id="desc" cols="0" rows="0" placeholder="Describe Yourself"></textarea>
        <input type="text" placeholder="Enter your Skills"/>
        <input type="text" placeholder="Tech Role Interested(eg.FullStack Dev)"/>
        <input type="text" placeholder="Prior Exp"/>
        <input type="text" placeholder="Education"/>

        <div class="cp7_documents">
            <label for="doocument">Upload your Profile Pic</label>
            <input class="cp7_fileInput" type="file"/>
        </div>

        <div class="cp7_documents">
            <label for="doocument">Upload your Resume</label>
            <input class="cp7_fileInput" type="file"/>
        </div>

        <button class="cp7_submit">Submit</button>
    </main>

    </>
  )
}

export default CreateProfile
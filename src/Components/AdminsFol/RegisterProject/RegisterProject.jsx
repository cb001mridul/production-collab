import React from 'react'
import './RegisterProject.css'

function RegisterProject() {
  return (
    <main className='cp9'>
        <h2>Upload Project</h2>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="overview(max 200 words)"/>
        <textarea name="description" id="des" placeholder="Describe Project"></textarea>
        <input type="text" placeholder="Tech Stack to be used"/>
        <input type="text" placeholder="Project Domain(eg. SAAS)"/>
        <input type="number" placeholder="contributors needed"/>
        <input type="text" placeholder="Project Admins"/>

        <div class="cp9_docs">
            <div class="cp9_label"><label for="docs">Any Media</label></div>
            <div class="cp9_docs_file"><input type="file"/></div>
        </div>

        <button class="cp9_sub">Submit</button>
    </main>
  )
}

export default RegisterProject
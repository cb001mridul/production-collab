import React from 'react'
import './Contriblist.css'

function Contriblist() {
  return (
    <main className='cp5'>
        <div class="cp5_main_profile">
            <div class="cp5_profile_pic"></div>
            <h2 class="cp5_profile_name">Swaroop Kumar Mishra</h2>
            <p class="cp5_profile_bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deserunt eaque voluptatum facilis, doloribus quisquam excepturi inventore dolorum voluptatibus earum ut eos accusantium quaerat? Voluptates minus accusamus repellat perspiciatis quia, maiores id nihil aperiam, consectetur error quas odit nobis! Totam alias harum odio enim distinctio possimus ullam repellat ea! Dolor architecto ratione vel iusto quo magnam atque consequatur iste odit!</p>
            <h3>Skills</h3>
            <div class="cp5_profile_skills">
                <div class="cp5_btn_1"><button class="cp5_skill_btn">Javascript</button></div>
                <div class="cp5_btn_1"><button class="cp5_skill_btn">Python</button></div>
                <div class="cp5_btn_1"><button class="cp5_skill_btn">React</button></div>
            </div>

            <button class="cp5_connect">Connect</button>
            <button class="cp5_view_profile">View Profile</button>
            <button class="cp5_team">Add to Team</button>
        </div>

    </main>
  )
}

export default Contriblist
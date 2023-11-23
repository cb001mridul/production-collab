import React from 'react'
import './Element1.css'

function Element1() {
  return (
    <>
        <div class="cp2_profile_pic"></div>
        <div class="cp2_profile_card">
            <h2>Karan Rana</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</h3>
            <div class="cp2_card_insights">
                <div class="cp2_insight1">
                    <p class="cp2_text_1">1.3k</p>
                    <p class="cp2_text_2">Followers</p>
                </div>

                <div class="cp2_insight1">
                    <p class="cp2_text_1">1.3k</p>
                    <p class="cp2_text_2">Followers</p>
                </div>

                <div class="cp2_insight1">
                    <p class="cp2_text_1">1.3k</p>
                    <p class="cp2_text_2">Followers</p>
                </div>
            </div>

            <button class="cp2_button_profile">Add to Team</button>
            <button class="cp2_button_profile">Message</button>
            <button class="cp2_button_profile">Edit</button>
        </div>
    </>
  )
}

export default Element1
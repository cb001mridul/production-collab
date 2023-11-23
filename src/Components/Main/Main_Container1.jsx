import React from 'react'
import './Main_Container1.css'

function Main_Container1() {
  return (
    <div class="main_container1">
            <div class="container1_banner">
            <img src="src/assets/img/img3.jpg" alt="" />
            </div>
            <div class="container1_text">
                <h2>Collaborate , <span>Compete</span> and <span id="span2">Groww</span></h2>
                <div class="text_quote">
                    <i class="fa-solid fa-quote-left quote1"></i> 
                    Like stars, we shine alone, but together, we form constellations of greater worth and meaning. Join us to multiply your impact.
                    <i class="fa-solid fa-quote-right quote2"></i>
                </div>

                <p class="text_para">
                    At Collab, our mission is to unite developers and project administrators, forging a powerful alliance in the world of software development. We empower individual contributors, providing them with opportunities to make real-world impacts. Through collaboration, we aim to create a community where the collective effort amplifies the worth of each individual.
                </p>
            </div>
        </div>
  )
}

export default Main_Container1
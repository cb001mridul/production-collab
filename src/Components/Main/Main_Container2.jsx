import React from 'react'
import './Main_Container2.css'
import img1 from '../../assets/img/img4.png'
import img2 from '../../assets/img/spic2.png'
import img3 from '../../assets/img/pic2.png'

function Main_Container2() {
  return (
    <div class="main_container2">
            <h2>Features</h2>
            <div class="container2_div1">
                <img src={img1} alt=""/>
                <p>Foster meaningful connections between project administrators and contributors. Encourage collaboration on real-world projects to enhance skills and knowledge.</p>
            </div>

            <div class="container2_div2">
                <p>Provide contributors with opportunities to make impactful contributions and earn certificates, fostering personal and professional development.</p>
                <img src={img2} alt=""/>
            </div>

            <div class="container2_div3">
                <img src={img3} alt=""/>
                <p>Cultivate a vibrant community of developers, clans, and tech enthusiasts. Encourage networking, knowledge sharing, and a sense of belonging</p>
            </div>
        </div>
  )
}

export default Main_Container2
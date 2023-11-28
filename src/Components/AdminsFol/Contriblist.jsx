import React from 'react'
import './Contriblist.css'
import Header from '../Header/Header'
import { useEffect } from 'react'

function Contriblist() {

  const LogoutChecker = () => {
    useEffect(() => {
      const checkAccessToken = () => {
        const accessToken = getCookie('access_token');
  
        if (!accessToken) {
          console.log('User logged out');
          window.location.href = '/login';
        }
      };
  
      const intervalId = setInterval(checkAccessToken, 6);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
  }  

  LogoutChecker();

  return (
    <>
    <Header text1="Other Projects" text2="Team" text3="Profile"/>
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
    </>
  )
}

export default Contriblist
import React from 'react'
import './Projects.css'
import Header from '../Header/Header'
import { useState, useEffect } from 'react'

function Projects() {

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
    <Header text1="Admins" text2="Profile" text3="Project-list"/>
    <main className='project_list_card'>
        <div class="card">
            <div class="category_heading"><h4>Category</h4></div>
            <h2>Developing API for Ecommerce Frontend. API Should be well documented and the endpoints must be well designed. Database should be highly managed.</h2>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt iste voluptatem quaerat, et nesciunt cupiditate labore, ab nam eum nemo praesentium voluptatum at repellendus neque corrupti dolores. Aspernatur nulla odio possimus rerum omnis consectetur ut voluptate, sequi itaque nisi vel pariatur explicabo doloribus corporis libero? Iure expedita explicabo nihil animi!</p>
            <h5>Skills</h5>
            <div class="card_skills">
                <div class="skill1">Javascript</div>
                <div class="skill2">Python</div>
                <div class="skill3">Django</div>
            </div>

            <button class="card_btn">Read More</button>
        </div>
    </main>
    </>
  )
}

export default Projects
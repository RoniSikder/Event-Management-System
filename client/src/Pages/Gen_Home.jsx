import React from 'react'
import photo from '../Image_Components/1234.jpg'
import carve from '../Image_Components/wave-haikei.png'
import photo1 from '../Image_Components/image.png'

import card1 from '../Image_Components/Card Images/soccer.png'
import card2 from '../Image_Components/Card Images/chess.png'
import card3 from '../Image_Components/Card Images/e-sport.png'
import card4 from '../Image_Components/Card Images/hackathon.png'
import card5 from '../Image_Components/Card Images/coding.png'
import card6 from '../Image_Components/Card Images/science.png'
import Gen_Home_Explore from '../Components/Gen_Home_Explore'
import Gen_NavBar from '../Components/Gen_NavBar'
import Footer from '../Components/Footer'


const Gen_Home = () => {
  let array = ["InDoor Game", "OutDoor Game", "E-Sports", "Coding", "Quiz", "Hackathon"]
  return (
    <>
      <Gen_NavBar />
      <div data-fake>
        <div data-fake-child></div>
        <div data-fix>
          <img src={carve} alt="" data-home-carve />
        </div>
      </div>
      <div class="card text-bg-dark" data-card-big>
        <img src={photo} class="card-img" alt="..." />
        <div class="card-img-overlay" data-card-name>
          <div data-card>
            <div data-card-vr></div>
            <div className="card-name">
              <h1 class="card-title">Tournament</h1>
              <h1 class="card-text">Laboretory</h1>
            </div>
          </div>
        </div>
      </div>
      <div data-feature>
        <div class="card text-bg-dark" data-feature-card>
          <img src={photo1} class="card-img" alt="..." data-card-img />
          <div class="card-img-overlay" data-home-show-text>
            <div data-home-show-text1>
              <h2>Organizing</h2>
              <h1>
                Sports , Hackathone
              </h1>
              <h1>Events</h1>
              <hr class="dropdown-divider" />
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, inventore quibusdam. Temporibus, libero voluptates et ducimus voluptatem omnis numquam cumque.
              </div>
            </div>
          </div>
        </div>
        <div data-home-show-feature>
          <div data-show-card>
            <img src={card1} alt="" />
            <h5>
              OutDoor Games
            </h5>
          </div>
          <div data-show-card>
            <img src={card2} alt="" />
            <h5>
              InDoor Games
            </h5>
          </div>
          <div data-show-card>
            <img src={card3} alt="" />
            <h5>
              E-Sports
            </h5>
          </div>
          <div data-show-card>
            <img src={card4} alt="" />
            <h5>
              Hackathone
            </h5>
          </div>
          <div data-show-card>
            <img src={card5} alt="" />
            <h5>
              Coding
            </h5>
          </div>
          <div data-show-card>
            <img src={card6} alt="" />
            <h5>
              Quiz
            </h5>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "5vh 0" }}>Explore The Events</h1>
      <div data-home-search>
        <input type="text" data-home-input />
        <button data-home-search-button><i class="bi bi-search"></i><nvsp /><nvsp />Search</button>
      </div>
      <h4 style={{ margin: "5vh 5vw" }}>Latest OutDoor Tournament</h4>
      <Gen_Home_Explore />
      <h4 style={{ margin: "5vh 5vw" }}>Latest Coding Chalange</h4>
      <Gen_Home_Explore />
      <h4 style={{ margin: "5vh 5vw" }}>Latest E-Sports Tournament</h4>
      <Gen_Home_Explore />
      <h4 style={{ margin: "5vh 5vw" }}>Latest Hackathons</h4>
      <Gen_Home_Explore />
      <div data-newsletter-mother>
        <h1 data-newsletter-header>Stay Updated</h1>
        <p>We'll send you updates on the latest opportunities to showcase your talent and get hired and rewarded regularly.</p>
        <div data-newsletter-input>
          <input type="text" placeholder='        "Enter Email to Daliy got Update"' data-newsletter-input-field />
          <button data-newsletter-send>Send</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Gen_Home
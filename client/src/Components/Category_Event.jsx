import React from 'react'
import img1 from '../Image_Components/selected cards/cricket.png'
import img2 from '../Image_Components/selected cards/strategy.png'
import img3 from '../Image_Components/selected cards/game-controller.png'
import img4 from '../Image_Components/selected cards/programming.png'
import img5 from '../Image_Components/selected cards/winner.png'
import img6 from '../Image_Components/selected cards/timer.png'

const Category_Event = () => {
  return (
    <>
      <div data-selection-head>
        <h2>Host An Event</h2>
        <p>Choose Your Event Category from below</p>
      </div>
      <div data-selected-card-main>
        <div data-selection-card>
          <img src={img1} alt="" />
          <div>
          <h4>OutDoor Games</h4>
          <p>Create Tournament</p>
          </div>
        </div>
        <div data-selection-card>
          <img src={img2} alt="" />
          <div>
          <h4>InDoor Game</h4>
          <p>Create Match</p>
          </div>
        </div>
        <div data-selection-card>
          <img src={img3} alt="" />
          <div>
          <h4>E-sports Tournament </h4>
          <p>Create Tournament</p>
          </div>
        </div>
        <div data-selection-card>
          <img src={img4} alt="" />
          <div>
          <h4>Coding Compititions</h4>
          <p>Create Compitition</p>
          </div>
        </div>
        <div data-selection-card>
          <img src={img5} alt="" />
          <div>
          <h4>Hackathons</h4>
          <p>Create Tournament</p>
          </div>
        </div>
        <div data-selection-card>
          <img src={img6} alt="" />
          <div>
          <h4>Quiz Event</h4>
          <p>Create Events</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category_Event
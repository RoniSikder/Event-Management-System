import React from 'react'
import img1 from '../Image_Components/selected cards/cricket.png'
import img2 from '../Image_Components/selected cards/strategy.png'
import img3 from '../Image_Components/selected cards/game-controller.png'
import img4 from '../Image_Components/selected cards/programming.png'
import img5 from '../Image_Components/selected cards/winner.png'
import img6 from '../Image_Components/selected cards/timer.png'
import { useNavigate } from 'react-router-dom'

const Category_Event = () => {
  let navigate = useNavigate()
  let eventSelect = (value) =>{
    navigate('/host/createlaststep')
  }
  return (
    <>
      <div data-selection-head>
        <h2>Host An Event</h2>
        <p>Choose Your Event Category from below</p>
      </div>
      <div data-selected-card-main>
        <div onClick={()=>{eventSelect(1)}} data-selection-card>
          <img src={img1} alt="" />
          <div>
          <h4>OutDoor Games</h4>
          <p>Create Tournament</p>
          </div>
        </div>
        <div onClick={()=>{eventSelect(2)}} data-selection-card>
          <img src={img2} alt="" />
          <div>
          <h4>InDoor Game</h4>
          <p>Create Match</p>
          </div>
        </div>
        <div onClick={()=>{eventSelect(3)}} data-selection-card>
          <img src={img3} alt="" />
          <div>
          <h4>E-sports Tournament </h4>
          <p>Create Tournament</p>
          </div>
        </div>
        <div onClick={()=>{eventSelect(4)}} data-selection-card>
          <img src={img4} alt="" />
          <div>
          <h4>Coding Compititions</h4>
          <p>Create Compitition</p>
          </div>
        </div>
        <div onClick={()=>{eventSelect(5)}} data-selection-card>
          <img src={img5} alt="" />
          <div>
          <h4>Hackathons</h4>
          <p>Create Tournament</p>
          </div>
        </div>
        <div onClick={()=>{eventSelect(6)}} data-selection-card>
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
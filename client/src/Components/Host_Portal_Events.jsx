import React from 'react'
import { useNavigate } from 'react-router-dom'

const Host_Portal_Events = () => {
  const navigate = useNavigate()
  const creater = () => {
    navigate('/host/signup2form')
  }
  return (
    <div data-create-event>
      <div data-create-event-button>
        <button onClick={()=>{creater()}} className="btn btn-warning"><i className="bi bi-plus-lg"></i> Create</button>  
      </div>
      <div>
        <h2>Published Events</h2>
        <div data-publish-event>{ }</div>
      </div>
      <div>
        <h2>UnPublished Events</h2>
        <div data-unpublish-event>{ }</div>
      </div>
    </div>
  )
}

export default Host_Portal_Events
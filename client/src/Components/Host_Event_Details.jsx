import React from 'react'
import { useNavigate } from 'react-router-dom'
import Host_Portal_Events from './Host_Portal_Events';

const Host_Event_Details = ({setDash}) => {
  let navigate = useNavigate();
  let finishStep = ()=>{
    setDash({
      name:"Events",
      component:<Host_Portal_Events/>
    });
    navigate('/host/dashboard')
  }
  return (
    <div data-last-step>
      <h1>Ahh..😓 Just A Last Step</h1>
      <div>
        <label htmlFor="photo_uploader" className="form-label">Upload Cover Image</label>
        <label for="fileInput" className="custom-file-upload" id='photo_uploader'><svg width="256px" height="256px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M14.381 9.02738C14.9767 8.81929 15.6178 8.70605 16.2857 8.70605C16.9404 8.70605 17.5693 8.81485 18.1551 9.01515C20.393 9.78041 22 11.8813 22 14.3531C22 17.4719 19.4416 20.0002 16.2857 20.0002H6.28571C3.91878 20.0002 2 18.104 2 15.7649C2 13.4258 3.91878 11.5296 6.28571 11.5296C6.56983 11.5296 6.8475 11.5569 7.11616 11.609C7.68059 11.7186 8.20528 11.9376 8.66667 12.2428" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M7.11622 11.6089C6.88712 10.9978 6.76196 10.3369 6.76196 9.64706C6.76196 6.52827 9.32034 4 12.4762 4C15.4159 4 17.8372 6.19371 18.1551 9.01498" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg><h4>Drag a Your Photo Here or Click to Choose</h4></label>
        <input type="file" id="fileInput" />
      </div>
      <div data-last-unique>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Unique Id</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput" placeholder="Unique_Id" disabled value={23} />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Event Category</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput" placeholder="Event_Main_Type" disabled value={23} />
        </div>
      </div>
      <div data-last-dropdown>
        <div className="mb-3">
          <label for="formGroupExampleInput1" className="form-label">Type Of Event</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Cricket , Football" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Name of the Event</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Event Title" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea data-last-input className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
      </div>
      <div data-last-date>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Deadline for Registration</label>
          <input data-last-input type="date" className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Event Starting Date</label>
          <input data-last-input type="date" className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">Event Ending Date</label>
          <input data-last-input type="date" className="form-control" id="formGroupExampleInput2" />
        </div>
      </div>
      <div data-last-date>
        <div className="mb-3">
          <label for="formGroupExampleInput5" className="form-label">Max Team Size</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput5" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput6" className="form-label">Maximum Seat</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput6" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput7" className="form-label">Entry Fee/Team</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput7" />
        </div>
      </div>
      <div data-last-address>
        <div className="mb-3">
          <label for="formGroupExampleInput7" className="form-label">Place of Event</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput7" />
        </div>
      </div>
      <div data-last-button>
        <button onClick={()=>{navigate('/host/signup2form')}} className='btn btn-warning'>Back</button>
        <button onClick={()=>{finishStep()}} className='btn btn-success'>Publish</button>
      </div>
    </div>
  )
}

export default Host_Event_Details
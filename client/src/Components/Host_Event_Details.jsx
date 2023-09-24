import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Host_Portal_Events from './Host_Portal_Events';
import axios from 'axios'

const Host_Event_Details = ({ setDash }) => {

  let event_type = useRef()
  let event_name = useRef()
  let description = useRef()
  let deadline = useRef()
  let start = useRef()
  let end = useRef()
  let team_size = useRef()
  let number_team = useRef()
  let entry_fee = useRef()
  let address = useRef()

  let location = useLocation()
  let data = location.state.data;
  let navigate = useNavigate();
  let [imager, setimage] = useState(null)
  let [imageurl, seturl] = useState()

  let image_upload = () => {
    let url = "http://localhost:1000/host/image_upload"
    const formData = new FormData();
    formData.append('image', imager);
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
    )
      .then((success) => {
        console.log(success.data.result.url)
        seturl(success.data.result.url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let finishStep = () => {
    image_upload()
    let data = {
      image_url: imageurl,
      host_id: host_id,
      type_event: event_type.current.value,
      sub_type_event: sub_type,
      name_event: event_name,
      description: description,
      starting_date: start,
      ending_date: end,
      last_date: deadline,
      per_team_size: team_size,
      allowed_numbers_team: number_teams,
      entry_fees: entry_fees,
      address: address
    }
    // setDash({
    //   name: "Events",
    //   component: <Host_Portal_Events />
    // });
    // navigate('/host/dashboard')
  }
  return (
    <div data-last-step>
      <h1>Ahh..😓 Just A Last Step</h1>
      <div>
        <label htmlFor="photo_uploader" className="form-label">Upload Cover Image</label>
        {imager === null ?
          <>
            <label htmlFor="fileInput" className="custom-file-upload" id='photo_uploader'>
              <svg width="256px" height="256px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M14.381 9.02738C14.9767 8.81929 15.6178 8.70605 16.2857 8.70605C16.9404 8.70605 17.5693 8.81485 18.1551 9.01515C20.393 9.78041 22 11.8813 22 14.3531C22 17.4719 19.4416 20.0002 16.2857 20.0002H6.28571C3.91878 20.0002 2 18.104 2 15.7649C2 13.4258 3.91878 11.5296 6.28571 11.5296C6.56983 11.5296 6.8475 11.5569 7.11616 11.609C7.68059 11.7186 8.20528 11.9376 8.66667 12.2428" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path opacity="0.5" d="M7.11622 11.6089C6.88712 10.9978 6.76196 10.3369 6.76196 9.64706C6.76196 6.52827 9.32034 4 12.4762 4C15.4159 4 17.8372 6.19371 18.1551 9.01498" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              <h4>Drag a Your Photo Here or Click to Choose</h4>
            </label>
          </> : <img data-image-preview src={URL.createObjectURL(imager)} alt="" />
        }
        <input onChange={(e) => { setimage(e.target.files[0]) }} type="file" id="fileInput" />
      </div>
      <div data-last-unique>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Unique Id</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput" placeholder="Unique_Id" disabled value={23} />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Event Category</label>
          <input data-last-input type="text" className="form-control" id="formGroupExampleInput" placeholder="Event_Main_Type" disabled value={data} />
        </div>
      </div>
      <div data-last-dropdown>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput1" className="form-label">Type Of Event</label>
          <input data-last-input type="text" ref={event_type} className="form-control" id="formGroupExampleInput1" placeholder="Cricket , Football" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Name of the Event</label>
          <input data-last-input type="text" ref={event_name} className="form-control" id="formGroupExampleInput2" placeholder="Event Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea data-last-input ref={description} className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
      </div>
      <div data-last-date>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Deadline for Registration</label>
          <input data-last-input type="date" ref={deadline} className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Event Starting Date</label>
          <input data-last-input type="date" ref={start} className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Event Ending Date</label>
          <input data-last-input type="date" ref={end} className="form-control" id="formGroupExampleInput2" />
        </div>
      </div>
      <div data-last-date>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput5" className="form-label">Max Team Size</label>
          <input data-last-input type="text" ref={team_size} className="form-control" id="formGroupExampleInput5" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput6" className="form-label">Maximum Seat</label>
          <input data-last-input type="text" ref={number_team} className="form-control" id="formGroupExampleInput6" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput7" className="form-label">Entry Fee/Team</label>
          <input data-last-input type="text" ref={entry_fee} className="form-control" id="formGroupExampleInput7" />
        </div>
      </div>
      <div data-last-address>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput7" className="form-label">Place of Event</label>
          <input data-last-input type="text" ref={address} className="form-control" id="formGroupExampleInput7" />
        </div>
      </div>
      <div data-last-button>
        <button onClick={() => { navigate('/host/signup2form') }} className='btn btn-warning'>Back</button>
        <button onClick={() => { finishStep() }} className='btn btn-success'>Publish</button>
      </div>
    </div>
  )
}

export default Host_Event_Details
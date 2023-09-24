import React, { useState } from 'react'
import Logo from '../Image_Components/Logo.png'
import Host_Dashboard_Component from '../Components/Host_Dashboard_Component'
import Host_Portal_Events from '../Components/Host_Portal_Events'
import Host_Event_Manage from '../Components/Host_Event_Manage'
import Host_Shedule from '../Components/Host_Shedule'
import Host_Task_Reminder from '../Components/Host_Task_Reminder'
import Host_Help_Center from '../Components/Host_Help_Center'

const Host_DashBoard = ({dash}) => {
  let [header, setHeader] = useState(dash.name)
  let [comp,setComp] = useState(dash.component)
  const renderer = (number) => {
    switch (number) {
      case 1:
        setHeader('Dashboard')
        setComp(<Host_Dashboard_Component/>)
        break;
      case 2:
        setHeader('Events')
        setComp(<Host_Portal_Events/>)
        break;
      case 3:
        setHeader('Manage Events')
        setComp(<Host_Event_Manage/>)
        break;
      case 4:
        setHeader('Shedule')
        setComp(<Host_Shedule/>)
        break;
      case 5:
        setHeader('Task Reminder')
        setComp(<Host_Task_Reminder/>)
        break;
      case 6:
        setHeader('Help Center')
        setComp(<Host_Help_Center/>)
        break;
    }
  }
  return (
    <>
      <div data-top-navbar>
        <div data-top-navbar-wrap>
          <div data-top-navbar-header>{header}</div>
          <div data-top-navbar-user>
            <div>Hello<div>Mr.User</div></div>
            <div><i class="bi bi-bell"></i></div>
            <div><i class="bi bi-person-circle"></i></div>
          </div>
        </div>
      </div>
      <div data-left-navbar>
        <div data-left-sub-navbar>
          <div data-dashboard-logo>
            <div data-dashboard-vr></div>
            <div data-dashboard-logo-text>
              <div>Tournament</div>
              <div>Laboretory</div>
            </div>
          </div>
          <ul data-dashboard-horizental-navbar>
            <li onClick={() => { renderer(1) }}>DASHBOARD</li>
            <li onClick={() => { renderer(2) }}>EVENTS</li>
            <li onClick={() => { renderer(3) }}>MANAGE EVENT</li>
            <li onClick={() => { renderer(4) }}>SHEDULE</li>
            <li onClick={() => { renderer(5) }}>TASK REMINDER</li>
            <li onClick={() => { renderer(6) }}>HELP CENTER</li>
          </ul>
          <div data-dashboard-footer-logo>
            Powered by <p>SIGMA</p>
          </div>
        </div>
      </div>
      <div data-dashboard-main-container>
        {comp}
      </div>
    </>
  )
}

export default Host_DashBoard
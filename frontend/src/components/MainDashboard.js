import React, { useState } from 'react'
import LeftAdmin from './DashboadAdmin/LeftAdmin';
import RightAdmin from './DashboadAdmin/RightAdmin';

function MainDashboard() {
  const [dashboard,setDashboard]=useState("Dashboard");
  return (
    <div className='bg-lavender font-poppins text-black-blue flex'>
      <div className='w-1/5 h-screen'>
        <LeftAdmin></LeftAdmin>
      </div>
      
      <div className='w-4/5 h-screen'>
        <RightAdmin value={dashboard}></RightAdmin>
      </div>
    </div>
  )
}
export default MainDashboard;
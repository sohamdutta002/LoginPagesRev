import React, { useState } from 'react'
import ViewerLoginComp from '../../Components/Login/ViewerLoginComp'
const Dropdown = ({ currentPage, onNavigate }) => {
  const [open,setOpen]=useState()
  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <button className="bg-gray-200 text-black py-2 px-4 rounded" onClick={handleClick}>
          {currentPage}
        </button>
        {open&&<ul className="absolute mt-2 bg-white text-black shadow-lg rounded-lg p-4">
          <li className='cursor-pointer' onClick={() => onNavigate('/admin')}>Admin</li>
          <li className='cursor-pointer' onClick={() => onNavigate('/moderator')}>Moderator</li>
          <li className='cursor-pointer' onClick={() => onNavigate('/viewer')}>Viewer</li>
        </ul>}
      </div>
    </div>
  );
};

function ViewerLogin() {
  return (
    <div>
        <ViewerLoginComp renderDropdown={(currentPage,onNavigate)=><Dropdown currentPage={currentPage} onNavigate={onNavigate} />} />
    </div>
  )
}

export default ViewerLogin
import React from 'react'
import viewerlogin from '../../assets/viewerlogin.png'
import { useNavigate } from 'react-router-dom'

function ViewerLogin({renderDropdown}) {
  const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center justify-center relative text-white'>
      <img src={viewerlogin} alt="" className='h-screen w-screen object-cover' />
      <div className="absolute top-7 left-8 font-bold text-3xl">SOHAM</div>
      <div className="absolute text-5xl border border-white backdrop-blur-lg p-12 rounded-lg flex flex-col justify-center gap-12 w-[30%] h-[70%]">
          <p>Login</p>
          <form className="text-2xl flex flex-col gap-4">
              <label htmlFor='email'>Email</label>
              <input type='email' className='bg-transparent rounded-lg border border-white p-1' />
              <label htmlFor='password'>Password</label>
              <input type='password' className='bg-transparent rounded-lg border border-white p-1' />
              <span className='text-lg text-right'>Forget Password?</span>
              <div className="bg-black w-24 p-5"></div>
              <div className="flex flex-col gap-4">
                <button className='border-2 border-white rounded-md p-2'>Sign In</button>
                <button className='bg-white text-black rounded-md p-2'>Signup</button>
              </div>
          </form>
      </div>
      <div className="absolute top-2 right-10">
        {renderDropdown('Viewer',navigate)}
      </div>
    </div>
  )
}

export default ViewerLogin
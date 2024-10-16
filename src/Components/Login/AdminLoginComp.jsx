import React from 'react'
import { useNavigate } from 'react-router-dom'
import adminlogin from '../../assets/adminlogin.png'

function AdminLogin({renderDropdown}) {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center justify-center relative'>
        <img src={adminlogin} alt="bg" className='object-cover h-screen w-screen' />
        <div className="absolute top-7 left-8 font-bold text-3xl">SOHAM</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white rounded-lg p-12 flex flex-col justify-center w-[30%] h-[70%] text-2xl gap-12">
            <h1 className='text-5xl'>Login</h1>
            <form className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className='bg-[#89898914] p-1 rounded-lg' />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='bg-[#89898914] p-1 rounded-lg' />
                <span className='text-right text-lg'>Forget Password?</span>
                <div className='p-5 w-28 bg-black'>
                </div>
                <button className='p-2 rounded-md bg-white'>Sign In</button>
                <button className='p-2 rounded-md border border-white'>Signup</button>
            </form>
        </div>
        <div className="absolute top-2 right-10">
            {renderDropdown('Admin',navigate)}
        </div>
    </div>
  )
}

export default AdminLogin

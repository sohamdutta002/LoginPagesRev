import React from 'react'
import moderatorlogin from '../../assets/moderatorlogin.png'
import { useNavigate } from 'react-router-dom'

function ModeratorLogin({renderDropdown}) {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center justify-center relative text-white'>
        <img src={moderatorlogin} alt="bg" className='h-screen w-screen object-cover' />
        <div className="absolute top-7 left-8 font-bold text-3xl">SOHAM</div>
        <div className="absolute border border-[#BABABA] backdrop-blur-md p-10 text-lg rounded-xl w-[30%] h-[70%] flex flex-col justify-center gap-12">
            <div className="text-5xl">Login</div>
            <form className="flex flex-col gap-4 text-2xl">
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='rounded-lg bg-transparent border border-[#BABABA] p-1' />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='rounded-lg bg-transparent border border-[#BABABA] p-1' />
                <span className='text-right text-base font-medium'>Forget Password?</span>
                <div className="p-5 bg-black w-28"></div>
                <div className="flex flex-col gap-4">
                    <button className='bg-white text-black rounded-lg p-2'>Sign In</button>
                    <button className='border-2 border-white rounded-lg p-2'>Signup</button>
                </div>
            </form>
        </div>
        <div className="absolute top-2 right-10">
            {renderDropdown('Moderator',navigate)}
        </div>
    </div>
  )
}

export default ModeratorLogin

{/* <div className="absolute top-0 right-0 flex flex-col">
            <button onClick={()=>navigate('/admin')}>Admin</button>
            <button onClick={()=>navigate('/moderator')}>Moderator</button>
            <button onClick={()=>navigate('/viewer')}>Viewer</button>
        </div> */}
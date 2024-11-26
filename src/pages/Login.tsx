import React, { useState } from 'react'
import logo from '../assets/logo.png'
import InputFormComp from '../components/reusable/InputFormComp'
import { login, signup } from '../firebase'
import netflix_spinner from '../assets/netflix_spinner.gif'

function Login() {

  const [signIn, setsignIn] = useState('Sign In')
  const [name, setname] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const userAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    if (signIn === 'Sign In') {
      await login({ email, password })
    } else {
      await signup({ name, email, password })
    }
    setLoading(false)
  }

  return (
    <div>

      {loading ?
      <div className='w-[100%] h-svh  flex justify-center items-center' >
        <img src={netflix_spinner} alt="" className='w-16 h-16' />
      </div>
      :
      <div className='h-[100vh] md:px-[20px] md:py-[3%] flex flex-col' style={{ backgroundImage: `linear-gradient(#0000007e,#0000007e),url('/background_banner.jpg')` }} >
        <img src={logo} alt="" className='w-36' />
        <div className=' md:w-[30%] sm:w-[60%] w-[90%] bg-[#1d1d1de9] m-auto px-10 rounded-md py-10 ' >
          <h2 className='text-3xl font-medium '>{signIn}</h2>
          <form className='flex flex-col gap-5  mt-10' onSubmit={userAuth}>
            {signIn === 'Sign Up' ?
              <InputFormComp
                type='text'
                value={name}
                placeholder='Your name'
                setvalue={setname}
              /> : <></>}
            <InputFormComp
              type='email'
              value={email}
              placeholder='Email'
              setvalue={setemail}
            />
            <InputFormComp
              type='password'
              value={password}
              placeholder='password'
              setvalue={setpassword}
            />
            <button type="submit"
              className='bg-red-900 font- font-medium text-lg py-1.5 rounded-md'>{signIn}</button>
          </form>
          <div className='flex justify-between mt-3 mb-3'>
            <div className='flex gap-x-1 items-center'>
              <input type="checkbox" name="" id="" className='mt-0.5' />
              <p>remember me</p>
            </div>
            <p>Need Help?</p>
          </div>
          {signIn === 'Sign Up' ?
            <p className='text-[#acacaca9]'>Alredy have account ?<span className='text-white ml-1 underline cursor-pointer' onClick={() => { setsignIn('Sign In') }}>Sign In Now</span> </p> :
            <p className='text-[#acacaca9]'>New To Netflix ?<span className='text-white ml-1 underline cursor-pointer' onClick={() => { setsignIn('Sign Up') }}>Sign Up Now</span> </p>
          }


        </div>
      </div>}
    </div>
  )
}

export default Login

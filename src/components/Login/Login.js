import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LoginState } from '../Context/AuthContext'
import axios from '../../api/api'
import { toast } from 'react-toastify'

const REG_URL = "/api/auth/login"

const Login = () => {

  const { state:{ userInfo } , dispatch } = LoginState()
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault() 
    try {
      const response = await axios.post(REG_URL,
      JSON.stringify({email,password}),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      dispatch({type:'USER_SIGNIN', payload:response})
      localStorage.setItem('userInfo', JSON.stringify(response))
      toast.success('Login Successful')
      navigate("/")
      console.log(response?.data);
    } catch (error) {
      console.log(error)
      toast.error("wrong Username or email")
    }
  }

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])

  return (
    <main>
      <div className="bg-[#B1B2FF]">
        <div className="container mx-auto">
          <div className="md:flex items-center justify-center h-screen">
              <div className="bg-[#EEF1FF] py-9">
                  <img src="https://template.triada.pro/tproadmin/app-assets/images/pages/login.png" alt="" /> 
              </div>
              <div className="p-6 bg-white">
                  <h3 className="text-xl">Login</h3>
                  <p className="py-2">Welcome back, please login to your account.</p>
                  <form onSubmit={handleSubmit} >
                    <label htmlFor="Email"> 
                      <input
                        type="email" 
                        required
                        placeholder="Email Address" 
                        className="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label htmlFor="Password">
                      <input 
                        type="password" 
                        required
                        placeholder="Password" 
                        className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    <p className="mt-2 text-right"><Link to="/">Forgot Password ?</Link></p>
                    <button type="submit" className="px-6 py-2 mt-3 bg-blue-600 text-white rounded-lg">Login</button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login

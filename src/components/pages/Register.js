import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate =  useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitSignUp = async () => {
    let user = { 
      name: name,
      email:email,
      password: password }
    console.log(user);
    let result = await axios.post('http://localhost:3500/api/auth/register', user)
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate('/login')
    console.log(result);
  }
  const Validate = () => {
    
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-2 lg:w-2/3">
        <div className="block lg:flex bg-[linear-gradient] lg:shadow-lg rounded-lg">
          <div className="w-full lg:w-1/3 flex lg:border-r border-gray-200">
            <div className="m-auto rounded-full">
              {/* <a href="/" className="flex items-base pt-10 lg:p-2 -mb-10 lg:-mb-0">
                        <img alt="" className="w-12 lg:w-48" >LOGO</img>
                        <div className="block lg:hidden text-2xl text-primary hover:text-primary tracking-wide font-semibold uppercase">Parsinta</div>
                    </a> */}
              <h1>Register</h1>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-6 py-16">
            <div className="mb-4 font-light tracking-widest text-2xl">Register</div>
            <form>
              <div className='mb-4'>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-800">Name</label>
                <input type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder='Name'
                  name='name'

                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-800">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@mail.com"
                  className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  autoComplete="email"

                />
                <p className="text-red-400 text-danger italic "></p>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-800">Your password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*************"
                  className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  autoComplete="current-password"

                />
                <p className="text-red-400 italic text-danger"></p>
              </div>
              {/* <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-800">Your password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*************"
                  className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  autoComplete="current-password"

                />
                <p className="text-red-400 italic text-danger"></p>
              </div> */}
              <label className="mb-4 flex items-center">
                <input type="checkbox" className="form-checkbox" name="remeber" id="remeber" defaultChecked />
                <span className="ml-2">I want to remember you ?</span>
              </label>
              <div className="block md:flex items-center justify-between">
                <button
                  type="button"
                  className="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg"
                  onClick={onSubmitSignUp}
                >
                  Register
                </button>
              </div>
              <div className="text-center text-sm text-red-500 mt-2"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
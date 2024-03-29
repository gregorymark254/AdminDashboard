import React, { useState } from 'react';
import axios from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert('Password and confirm password do not match');
      return;
    }
    try {
      const response = await axios.post('/api/v1/register',
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: { 'Content-type': 'application/json' },
          withCredentials: true
        });
      console.log(JSON.stringify(response));
      toast.success('Added Successfull');
      navigate('/users');
    } catch (error) {
      if (!error?.response) {
        toast.error('No Server Response');
      } else if (error.response?.status === 400) {
        toast.error('All fields are required');
      } else if (error.response?.status === 409) {
        toast.error('Username Taken');
      } else {
        toast.error('Registration Failed');
      }
      console.log(error);
      console.log(error.response);
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-center items-center'>
          <form className='block shadow-lg rounded-lg p-8' onSubmit={handleSubmit}>
            <div className='text-center p-5'>
              <h3><b>Create user account!</b></h3>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='mb-4'>
                <input
                  type='text'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='First Name'
                  name='fname'
                  id='fname'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Last Name'
                  name='lname'
                  id='lname'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='mb-4'>
                <input
                  type='email'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Email Address'
                  name='mail'
                  id='mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <select
                  name='' id=''
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                >
                  <option value='Viewer'>Viewer</option>
                  <option value='Creator'>Creator</option>
                  <option value='Admin'>Admin</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='mb-4'>
                <input
                  type='password'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Password'
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='password'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Confirm Password'
                  name='confirmpassword'
                  id='confirmpassword'
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
            </div>
            <div className='text-center pt-1 mb-12 pb-1'>
              <button
                className='inline-block px-6 py-2.5 bg-[#C21010] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e04444] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                type='submit'
              > Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

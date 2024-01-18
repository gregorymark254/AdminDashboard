import React, { useState, useEffect } from 'react';
import axios from '../../api/api';
import { Link } from 'react-router-dom';
import { MdDelete, MdOutlineBlock } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Pagination from '../Users/Pagination';

const User = () => {
  const [user, setUser] = useState([]);
  const [searchUser, setSearchUser] = useState('');
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = user.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(user.length / recordsPerPage);

  // get all users
  const getUsers = async () => {
    const response = await axios.get('/api/v1/users');
    setUser(response.data);
  };

  // delete a user
  const deleteUser = async (id) => {
    window.confirm('Are you sure you want to delete this account');
    try {
      await axios.delete(`/api/v1/users/delete/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      <div className='container mx-auto p-4'>
        <div className='bg-white p-4 rounded-lg'>
          <div className='flex justify-between p-4'>
            <p className='text-2xl'>User List</p>
            <div>
              <Link className='bg-blue-600  text-white px-4 py-2' to='/user/add'>Add User</Link>
            </div>
          </div>
          <hr />
          <div className='flex justify-between p-4 '>
            <p className='text-lg'>Showing {user.length} entries</p>
            <div className='flex'>
              <button className='px-4 py-1 bg-blue-500 text-white ml-2 rounded-lg'>CSV</button>
              <button className='px-4 py-1 bg-blue-500 text-white ml-2 rounded-lg'>Print</button>
            </div>
            <div>
              <form action=''>
                <div>
                  <label htmlFor=''>
                    <input
                      type='search'
                      className='ml-2 px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:ring-1'
                      required
                      placeholder="Search User"
                      value={searchUser}
                      onChange={e => setSearchUser(e.target.value)}
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className='md:overflow-x-auto border border-slate-300'>
            {
              currentRecords.length > 0
                ? (
                  <table className='w-full mt-4 mb-4 text-justify table-auto border-collapse border border-slate-500'>
                    <thead>
                      <tr className='border-b border-slate-500'>
                        <th className='py-3 px-6'>No.</th>
                        <th className='py-3 px-6'>First Name</th>
                        <th className='py-3 px-6'>Last Name</th>
                        <th className='py-3 px-6'>Email</th>
                        <th className='py-3 px-6'>Role</th>
                        <th className='py-3 px-6'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRecords.map((user, index) => (
                        <tr key={user._id} className='bg-white border-b border-slate-500'>
                          <td className='py-4 px-6'>{index + 1}</td>
                          <td className='py-4 px-6'>{user.firstName}</td>
                          <td className='py-4 px-6'>{user.lastName}</td>
                          <td className='py-4 px-6'>{user.email}</td>
                          <td className='py-4 px-6'>{user.role}</td>
                          <td className='flex items-center text-xl py-4 px-6 space-x-2'>
                            <Link to={`/user/edit/${user._id}`} className='bg-teal-500 p-1 text-md text-white mr-1'><FaEdit /></Link>
                            <button onClick={() => deleteUser(user._id)} className='bg-red-500 p-1 text-md text-white'><MdDelete /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  )
                : (
                  <div className='bg-[#EEF1FF] h-96 grid place-items-center'>
                    <div className='grid place-items-center'>
                      <h2><MdOutlineBlock /></h2>
                      <h4>No Data</h4>
                    </div>
                  </div>
                  )
            }
          </div>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default User;

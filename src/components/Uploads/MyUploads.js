import React, { useState, useEffect } from 'react';
import axios from '../../api/api';
import { Link } from 'react-router-dom';
import { MdDelete, MdOutlineBlock } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Pagination from '../Users/Pagination';
 

const MyUploads = () => {

  const [VideoUplods, setVideoUplad] = useState([]);
  const [searchUser, setSearchUser] = useState('');
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = VideoUplods.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(VideoUplods.length / recordsPerPage);

  // get all users
  const getUsers = async () => {
    const response = await axios.get('/api/v2/video');
    setVideoUplad(response.data);
  };

  // delete a user
  const deleteUser = async (id) => {
    window.confirm('Are you sure you want to delete this account');
    try {
      await axios.delete(`/api/v2/video/delete/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className='container mx-auto p-4'>
        <div className='bg-white p-4 rounded-lg'>
          <div className='flex justify-between p-4'>
            <p className='text-2xl'>My Uploads</p>
            <div>
              <Link className='bg-blue-600  text-white px-4 py-2' to='/video-uploads'>Add new upload</Link>
            </div>
          </div>
          <hr />
          <div className='flex justify-between p-4 '>
            <p className='text-lg'>Showing {VideoUplods.length} entries</p>
            <div>
              <form action=''>
                <div>
                  <label htmlFor=''>
                    <input
                      type='search'
                      className='ml-2 px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:ring-1'
                      required
                      placeholder="Search Video"
                      value={searchUser}
                      onChange={e => setSearchUser(e.target.value)}
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className='md:overflow-x-auto border border-slate-300'>        
            <table className='w-full mt-4 mb-4 text-justify table-auto border-collapse border border-slate-500'>
              <thead>
                <tr className='border-b border-slate-500'>
                  <th className='py-3 px-6'>No.</th>
                  <th className='py-3 px-6'>Title</th>
                  <th className='py-3 px-6'>Author</th>
                  <th className='py-3 px-6'>Type</th>
                  <th className='py-3 px-6'>Status</th>
                </tr>
              </thead>
              {
                currentRecords.length > 0 ? (
                  <tbody>
                    {currentRecords.map((user, index) => (
                      <tr key={user._id} className='bg-white border-b border-slate-500'>
                        <td className='py-4 px-6'>{index + 1}</td>
                        <td className='py-4 px-6'>{user.firstName}</td>
                        <td className='py-4 px-6'>{user.lastName}</td>
                        <td className='py-4 px-6'>{user.email}</td>
                        <td className='py-4 px-6'><p className="bg-blue-200 rounded-lg">{user.role}</p></td>
                      </tr>
                    ))}
                  </tbody>
              ) : (
                <div className='bg-[#EEF1FF] h-96 grid place-items-center'>
                  <div className='grid place-items-center'>
                    <h2><MdOutlineBlock /></h2>
                    <h4>No Data</h4>
                  </div>
                </div>
              )}
            </table>
          </div>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MyUploads;

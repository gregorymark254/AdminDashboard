import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete,MdOutlineBlock } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const GuestList = () => {

  const [guest, setGuest] = useState([]);

  const getGuest = async () => {
    const response = await axios.get("https://xain-hotel-server.up.railway.app/api/v4/all");
    setGuest(response.data);
  };

  const deleteGuest = async (id) => {
    window.confirm("Are you sure you want to delete this account")
    try {
      await axios.delete(`https://xain-hotel-server.up.railway.app/api/v4/delete/${id}`);
      getGuest();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuest();
  }, []);

  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between p-4">
            <p className="text-2xl"><b>Guest List</b></p>
            <div>
              <Link className="bg-blue-600  text-white px-4 py-2" to="/add">Add New guest</Link>
            </div>
          </div>
          <hr />
          <div className="flex justify-between px-4 mt-4">
            <p className="text-lg">Showing 10 entries</p>
            <div>
              <span>Print</span>
            </div>
            <div>
              <form action="">
                <div className="flex items-center">
                  <label htmlFor="">Search:</label>
                  <input 
                    type="search" 
                    className="ml-2 px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:ring-1"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="overflow-x-auto border border-slate-300 mt-6">
            {
              guest.length > 0 ? 
              (
                <table className="w-full text-sm text-left">
                  <thead className="text-gray-700 bg-gray-50 ">
                    <tr>
                      <th className="py-3 px-6">No.</th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Booking Number</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Guest Name</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Gender</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Mobile</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Email</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>ID Number</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Action</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {guest.map((guest, index) => (
                      <tr key={guest._id} className="bg-white border-b border-slate-500">
                        <td className="py-4 px-6">{index + 1}</td>
                        <td className="py-4 px-6">{guest.bookingnumber}</td>
                        <td className="py-4 px-6">{guest.guestname}</td>
                        <td className="py-4 px-6">{guest.gender}</td>
                        <td className="py-4 px-6">{guest.mobile}</td>
                        <td className="py-4 px-6">{guest.email}</td>
                        <td className="py-4 px-6">{guest.idnumber}</td>
                        <td className="flex items-center text-xl py-4 px-6 space-x-2">
                          <Link to={`/edit/${guest._id}`} className="bg-teal-500 p-1 text-md text-white mr-1"><FaEdit/></Link>
                          <button onClick={() => deleteGuest(guest._id)} className="bg-red-500 p-1 text-md text-white"><MdDelete/></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="bg-[#EEF1FF] h-96 grid place-items-center">
                  <div className="grid place-items-center">
                    <h2><MdOutlineBlock/></h2>
                    <h4>No Data</h4>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default GuestList

import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete,MdOutlineBlock } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const BookingReport = () => {

  const [report, setReport] = useState([])

  const getReport = async () => {
    const response = await axios.get("https://xain-hotel-server.up.railway.app/api/v5/all");
    setReport(response.data);
  };

  const deletereport = async (id) => {
    try {
      window.confirm("Are you sure you want to delete this account")
      await axios.delete(`https://xain-hotel-server.up.railway.app/api/v5/delete/${id}`);
      getReport();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg mb-8">
          <div className="p-4">
            <p className="text-2xl"><b>Search Report</b></p>
          </div>
          <hr />
          <div>
            <form action="">
              <div className="flex items-center p-4">
                <div className="mx-4">
                  <label htmlFor="">Customer</label>
                  <select 
                    name="" id=""
                    className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                    required
                  >
                    <option value="1">pending</option>
                    <option value="1">sfsf</option>
                    <option value="1">sfsf</option>
                  </select>
                </div>
                <div className="mx-4">
                  <label htmlFor="">Booking Status</label>
                  <select 
                    className="px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-44 focus:ring-1"
                    required
                    name="" id="">
                    <option value="1">pending</option>
                    <option value="1">sfsf</option>
                    <option value="1">sfsf</option>
                  </select>
                </div>
                <div className="mx-4">
                  <label htmlFor="">payment Status</label>
                  <select 
                    className="px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-44 focus:ring-1"
                    required
                    name="" id="">
                    <option value="1">pending</option>
                    <option value="1">sfsf</option>
                    <option value="1">sfsf</option>
                  </select>
                </div>
                <div className="mx-4">
                  <label htmlFor="">From</label>
                  <input
                    type="date" 
                    className="px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-44 focus:ring-1"
                    required
                  />
                </div>
                <div className="mx-4">
                  <label htmlFor="">to</label>
                  <input
                    type="date" 
                    className="px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-44 focus:ring-1"
                    required
                  />
                </div>
              </div>
              <div className="ml-8">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Search</button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg ">
          <div className="p-4">
            <p className="text-2xl"><b>All Report</b></p>
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
          <div className="overflow-x-auto border border-slate-300 mt-6 max-w-6xl">
            {
              report.length > 0 ? 
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
                          <span>Room Type</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Check In</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Check Out</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Booking Date</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Booking Status</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Payment Status</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Total Amount</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Paid Amount</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                        </div>
                      </th>
                      <th className="py-3 px-6">
                        <div className="flex items-center">
                          <span>Due Amount</span>
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
                    {report.map((report, index) => (
                      <tr key={report._id} className="bg-white border-b border-slate-500">
                        <td className="py-4 px-6">{index + 1}</td>
                        <td className="py-4 px-6">{report.bookingnumber}</td>
                        <td className="py-4 px-6">{report.roomtype}</td>
                        <td className="py-4 px-6">{report.checkin}</td>
                        <td className="py-4 px-6">{report.checkout}</td>
                        <td className="py-4 px-6">{report.bookingdate}</td>
                        <td className="py-4 px-6">{report.bookingstatus}</td>
                        <td className="py-4 px-6">{report.paymentstatus}</td>
                        <td className="py-4 px-6">{report.totalamount}</td>
                        <td className="py-4 px-6">{report.paidamount}</td>
                        <td className="py-4 px-6">{report.dueamount}</td>
                        <td className="flex items-center text-xl py-4 px-6 space-x-2">
                          <Link to={`/edit/${report._id}`} className="bg-teal-500 p-1 text-md text-white mr-1"><FaEdit/></Link>
                          <button onClick={() => deletereport(report._id)} className="bg-red-500 p-1 text-md text-white"><MdDelete/></button>
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

export default BookingReport

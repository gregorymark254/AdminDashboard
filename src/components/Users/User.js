import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete,MdOutlineBlock } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const User = () => {

  const [users, setUser] = useState([]);
  const [searchUser, setSearchUser] = useState("")

  const getUsers = async () => {
    const response = await axios.get("https://xain-hotel-server.up.railway.app/api/v2/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    window.confirm("Are you sure you want to delete this account")
    try {
      await axios.delete(`https://xain-hotel-server.up.railway.app/api/v2/users/delete/${id}`);
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
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between p-4">
            <p className="text-2xl">User List</p>
            <div>
              <Link className="bg-blue-600  text-white px-4 py-2" to="/add">Add User</Link>
            </div>
          </div>
          <hr />
          <div className="flex justify-between px-4 mt-4">
            <p className="text-lg">Showing 10 entries</p>
            <div className="flex">
              <button className="px-4 py-1 bg-blue-500 text-white ml-2 rounded-lg">CSV</button>
              <button className="px-4 py-1 bg-blue-500 text-white ml-2 rounded-lg">Print</button>
            </div>
            <div>
              <form action="">
                <div className="flex items-center">
                  <label htmlFor="">Search:</label>
                  <input 
                    type="search" 
                    className="ml-2 px-3 py-1 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full focus:ring-1"
                    required
                    value={searchUser}
                    onChange={e => setSearchUser(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="md:overflow-x-auto border border-slate-300 mt-6">
            {
              users.length > 0 ?
              (  
                <table className="w-full mt-4 mb-4 text-justify table-auto border-collapse border border-slate-500">
                  <thead>
                    <tr className="border-b border-slate-500">
                      <th className="py-3 px-6">No.</th>
                      <th className="py-3 px-6">First Name</th>
                      <th className="py-3 px-6">Last Name</th>
                      <th className="py-3 px-6">Email</th>
                      <th className="py-3 px-6">Phone</th>
                      <th className="py-3 px-6">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user._id} className="bg-white border-b border-slate-500">
                        <td className="py-4 px-6">{index + 1}</td>
                        <td className="py-4 px-6">{user.firstname}</td>
                        <td className="py-4 px-6">{user.lastname}</td>
                        <td className="py-4 px-6">{user.email}</td>
                        <td className="py-4 px-6">{user.phone}</td>
                        <td className="flex items-center text-xl py-4 px-6 space-x-2">
                          <Link to={`/edit/${user._id}`} className="bg-teal-500 p-1 text-md text-white mr-1"><FaEdit/></Link>
                          <button onClick={() => deleteUser(user._id)} className="bg-red-500 p-1 text-md text-white"><MdDelete/></button>
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

export default User

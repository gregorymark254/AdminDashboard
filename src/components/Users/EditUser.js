import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {

  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  
  const getUserById = async () => {
    const response = await axios.get(`https://xain-hotel-server.up.railway.app/api/v2/users/${id}`);
    setFname(response.data.firstname);
    setLname(response.data.lastname);
    setEmail(response.data.email);
    setPhone(response.data.phone);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://xain-hotel-server.up.railway.app/api/v2/users/update/${id}`,{
        firstname,
        lastname,
        email,
        phone
      });
      navigate("/users");
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);


  return (
    <div className="min-h-screen">
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <form className="block shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
          <div className="text-center p-5">
            <h3><b>Update account!</b></h3>
          </div>  
          <div className="mb-4">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="First Name"
              name="fname" 
              id="fname" 
              value={firstname}
              onChange = { (e) => setFname(e.target.value) }
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Last Name"
              name="lname" 
              id="lname"
              value={lastname}
              onChange = { (e) => setLname(e.target.value) }
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email Address"
              name="mail" 
              id="mail" 
              value={email}
              onChange = { (e) => setEmail(e.target.value) }
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              autoComplete="off"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Phone Number"
              name="number" 
              id="number"
              value={phone}
              onChange = { (e) => setPhone(e.target.value) }
            />
          </div>
          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="inline-block px-6 py-2.5 bg-[#C21010] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e04444] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="submit"
            > Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditUser

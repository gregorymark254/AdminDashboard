import React from 'react'
import { MdOutlineDateRange,MdDateRange } from "react-icons/md";
import { FaDollarSign, FaUserCircle } from "react-icons/fa";
import { BarChart, CartesianGrid,YAxis,XAxis,Tooltip,Legend,Bar } from 'recharts';

const Home = () => {

  const data = [{ 
    name: 'a', value: 12 
  }]

  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="p-6 text-white bg-[#181D31] rounded-lg">
          <h2>Hello Gregory</h2>
          <p>This is what we've got for you today.</p>
        </div>

        <div className="md:grid grid-cols-4 gap-4 mt-8">
          <div className="bg-white">
            <div className="flex justify-between text-right p-4">
              <span className="text-4xl bg-orange-500 text-white p-4 -top-8 rounded-md"><MdOutlineDateRange/></span>
              <div>
                <h6>TODAY BOOKING</h6>
                <h5>3</h5>
              </div>
            </div>
            <hr />
            <br />
            <br />
          </div>
          <div className="bg-white">
            <div className="flex justify-between text-right p-4">
              <span className="text-4xl bg-emerald-700 text-white p-4 -top-8 rounded-md"><FaDollarSign/></span>
              <div>
                <h6>TOTAL AMOUNT</h6>
                <h5>389.2m</h5>
              </div>
            </div>
            <hr />
            <br />
            <br />
          </div>
          <div className="bg-white">
            <div className="flex justify-between text-right p-4">
              <span className="text-4xl bg-red-700 text-white p-4 -top-8 rounded-md"><FaUserCircle/></span>
              <div>
                <h6>TOTAL CUSTOMERS</h6>
                <h5>3K</h5>
              </div>
            </div>
            <hr />
            <br />
            <br />
          </div>
          <div className="bg-white">
            <div className="flex justify-between text-right p-4">
              <span className="text-4xl bg-teal-500 text-white p-4 -top-8 rounded-md"><MdDateRange/></span>
              <div>
                <h6>TOTAL BOOKING</h6>
                <h5>361</h5>
              </div>
            </div>
            <hr />
            <br />
            <br />
          </div>
        </div>

        {/* graphs */}
        <div className="mt-10">
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </main>
  )
}

export default Home

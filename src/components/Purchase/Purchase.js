import React from 'react'
import { Link } from "react-router-dom";

const Transaction = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between p-4">
            <p className="text-2xl"><b>Purchase List</b></p>
            <div>
              <Link className="bg-blue-600  text-white px-4 py-2" to="/add-purchase">Add Purchase</Link>
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
          <table>
            
          </table>        
        </div>
      </div>
    </main>
  )
}

export default Transaction

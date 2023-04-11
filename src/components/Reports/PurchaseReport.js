import React from 'react'

const PurchaseReport = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg mb-4">
          <div className="p-4">
            <p className="text-2xl"><b>Report</b></p>
          </div>
          <hr />
          <div>
            <form action="">
              <div className="flex items-center p-4">
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
                <div className="mx-4 mt-5">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Search</button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg mb-8">
          <div className="flex justify-between px-4 mt-4 pb-1">
            <h5 className="text-lg">Purchase Report</h5>
            <div>
              <button className="px-4 py-1.5 text-white bg-teal-500">Print</button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </main>
  )
}

export default PurchaseReport

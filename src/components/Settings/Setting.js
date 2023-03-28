import React from 'react'

const Setting = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <h3>Account Settings</h3>
        <div className="bg-white p-6 rounded-lg mt-4">
          <div>
            <h4><u>Edit Account Details</u></h4>
            <br />
            <form className="grid">
              <label htmlFor="username">Firstname :
                <input 
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-96 ml-4 mb-3 bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </label>
              <label htmlFor="username">Lastname :
                <input 
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-96 ml-4 mb-3 bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </label>
              <label htmlFor="username">Email :
                <input 
                  type="email"
                  required
                  placeholder="Email"
                  className="w-96 mb-3 ml-4 bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </label>
              <label htmlFor="username">Phone No. :
                <input 
                  type="text"
                  required
                  placeholder="Phone Number"
                  className="w-96 mb-3 ml-4 bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </label>
              <label htmlFor="username">Password :
                <input 
                  type="password"
                  required
                  placeholder="Password"
                  className="w-96 mb-3 ml-4 bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
              </label>
              <div className="flex mt-4 space-x-3">
                <button type="reset" className="border border-orange-500 px-4 py-2 rounded-lg text-orange-500">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Setting

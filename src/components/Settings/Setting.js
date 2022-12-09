import React from 'react'

const Setting = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <h3>Account Settings</h3>
        <div className="flex gap-4">
          <div>
            <p>General</p>
          </div>
          <div className=" bg-white p-6 rounded-lg">
            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS_K13w6lMdb6kZEGj2wZ3jnIwap2YTpganfCLWXUr_L-7xvEiTEKFC2iNgRO1XJ184A&usqp=CAU" alt="" />
            <div>
              <form>
                <label htmlFor="username">Username
                  <input 
                    type="text"
                    required
                    placeholder="Username"
                    className="w-full bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  />
                </label>
                <label htmlFor="username">Email
                  <input 
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  />
                </label>
                <label htmlFor="username">Name
                  <input 
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full bg-white border border-slate-300 rounded-md py-2 px-4 pr-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  />
                </label>
                <div className="flex justify-end mt-4 space-x-3">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save changes</button>
                  <button type="reset" className="border border-orange-500 px-4 py-2 rounded-lg text-orange-500">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Setting

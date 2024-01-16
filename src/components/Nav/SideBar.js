import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCancel, MdOutlineDashboard, MdAccountBalance, MdSettings } from "react-icons/md"
import { FaUserAlt,FaHouseUser } from "react-icons/fa"
import { useStateContext } from "../Context/ContextProvider";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'tw-elements';


const SideBar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <main className="bg-[#181D31] text-white h-screen md:overflow-hidden relative overflow-auto md:hover:overflow-auto pb-10">
      <ToastContainer position="bottom-center" limit={1} />
      {activeMenu && (
        <>
          <div className="p-4">
            <h1>Naija Prime</h1>
          </div>
          <div className="flex justify-between items-center pb-3">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex"
            >
              <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS_K13w6lMdb6kZEGj2wZ3jnIwap2YTpganfCLWXUr_L-7xvEiTEKFC2iNgRO1XJ184A&usqp=CAU" alt="" /> 
              <span>Gregory Mark</span>
            </Link>
            <div className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <span onClick={() => setActiveMenu(!activeMenu)}><MdOutlineCancel /></span>
            </div>
          </div>
          <nav>
            <div className="overflow-y-auto">
              <div id="sidenavSecExample">
                <ul className="relative px-1">
                  <li className="relative">
                    <Link to="/" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                      <span className="w-4 h-4 mr-3"><MdOutlineDashboard/></span>
                      <span>DashBoard</span>
                    </Link>
                  </li>
                  <li className="relative" id="sidenavXxEx4">
                    <span className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx4" aria-expanded="false" aria-controls="collapseSidenavXxEx4">
                      <span className="w-4 h-4 mr-3"><FaHouseUser/></span>
                      <span>Users</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx4" aria-labelledby="sidenavXxEx4" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="/users" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">View All Users</Link>
                      </li>
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Add User</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavSecEx2">
                    <Link to="#" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                      <span className="w-4 h-4 mr-3"><FaUserAlt/></span>
                      <span>Uploads</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </Link>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Video Uploads</Link>
                      </li>
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Reviews</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavSecEx1">
                    <Link to="#" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx1" aria-expanded="false" aria-controls="collapseSidenavSecEx1">
                      <span className="w-4 h-4 mr-3"><MdAccountBalance/></span>
                      <span>Accounts</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </Link>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx1" aria-labelledby="sidenavSecEx1" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Payments</Link>
                      </li>
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Account Balance</Link>
                      </li>
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Account Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative">
                    <Link to="/settings" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                      <span className="w-4 h-4 mr-3"><MdSettings/></span>
                      <span>Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>  
        </>
      )}
    </main>
  )
}

export default SideBar

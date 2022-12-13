import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCancel, MdOutlineDashboard, MdAccountBalance, MdSettings,MdPayments,MdBedroomParent} from "react-icons/md"
import { FaUserAlt,FaUsers,FaHouseUser } from "react-icons/fa"
import { GiHistogram } from "react-icons/gi";
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
          <img className="p-4" src="https://hotel.bdtask-demo.com/xainhotel/assets/img/icons/2021-02-08/B2.png" alt="" />
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
                        <Link to="/sms-config" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Sms configuration</Link>
                      </li>
                      <li className="relative">
                        <Link to="/sms-template" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Sms Template</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavSecEx2">
                    <Link to="#" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                      <span className="w-4 h-4 mr-3"><FaUserAlt/></span>
                      <span>Customers</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </Link>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="/customers" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Customer List</Link>
                      </li>
                      <li className="relative">
                        <Link to="/guest-list" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Guest List</Link>
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
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Credit Voucher</Link>
                      </li>
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Debit Voucher</Link>
                      </li>
                      <li className="relative">
                        <Link to="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Voucher Report</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavSecEx3">
                    <span className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
                      <span className="w-4 h-4 mr-3"><FaUsers/></span>
                      <span>Human Resource</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="/employees" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Manage Employees</Link>
                      </li>
                      <li className="relative">
                        <Link to="/add-employees" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Add Employees</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavXxEx2">
                    <span className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx2" aria-expanded="false" aria-controls="collapseSidenavXxEx2">
                      <span className="w-4 h-4 mr-3"><MdPayments/></span>
                      <span>Purchase Manage</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx2" aria-labelledby="sidenavXxEx2" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="/purchase" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Purchase Item</Link>
                      </li>
                      <li className="relative">
                        <Link to="/add-purchase" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Add Purchase</Link>
                      </li>
                      <li className="relative">
                        <Link to="/return-invoice" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Return Invoice</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavXxEx3">
                    <span className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx3" aria-expanded="false" aria-controls="collapseSidenavXxEx3">
                      <span className="w-4 h-4 mr-3"><GiHistogram/></span>
                      <span>Reports</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx3" aria-labelledby="sidenavXxEx3" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="/booking-report" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Booking Report</Link>
                      </li>
                      <li className="relative">
                        <Link to="/purchase-report" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Purchase Report</Link>
                      </li>
                      <li className="relative">
                        <Link to="/stock-report" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Stock Report</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative" id="sidenavXxEx6">
                    <span className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx6" aria-expanded="false" aria-controls="collapseSidenavXxEx6">
                      <span className="w-4 h-4 mr-3"><MdBedroomParent/></span>
                      <span>Room Reservation</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </span>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavXxEx6" aria-labelledby="sidenavXxEx6" data-bs-parent="#sidenavSecExample">
                      <li className="relative">
                        <Link to="/booking-list" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Booking List</Link>
                      </li>
                      <li className="relative">
                        <Link to="/checkin" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Check In</Link>
                      </li>
                      <li className="relative">
                        <Link to="/checkout" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Check Out</Link>
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

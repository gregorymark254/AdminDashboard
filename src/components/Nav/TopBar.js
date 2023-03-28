import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../Context/ContextProvider";
import { LoginState } from '../Context/AuthContext'


const Navbar = () => {
  const {activeMenu, setActiveMenu, setScreenSize, screenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize,setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  //logout
  const { state:{ userInfo } , dispatch } = LoginState()
  const signOut = () => {
    dispatch({type:'USER_SIGNOUT', })
    localStorage.removeItem('userInfo')
  }

  //Time
  const date = new Date();
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between p-2  bg-white shadow-md">
      <div className="text-xl rounded-full p-3 hover:bg-light-gray">
        <span onClick={handleActiveMenu}><AiOutlineMenu /></span>
      </div>
      <div>
        <div className="flex items-center space-x-5 px-3">
          <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS_K13w6lMdb6kZEGj2wZ3jnIwap2YTpganfCLWXUr_L-7xvEiTEKFC2iNgRO1XJ184A&usqp=CAU" alt="user-profile"/>
          <div className="dropdown ">
            <a className=" dropdown-toggle px-4 py-2 bg-slate-100 text-black hover:bg-slate-200 font-medium shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap " href="/#" type="button" id="dropdownMenuButton2"  data-bs-toggle="dropdown" aria-expanded="false">
              {userInfo}Gregory
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" ></path>
              </svg>
            </a>
            <ul className="dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left  py-2 list-nonetext-left  rounded-lg  shadow-lg  mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100" href="/settings" >My Profile</a>
              </li>
              <li>
                <a onClick={signOut} className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100" href="/#" >Sign Out</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Navbar;

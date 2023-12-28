import React from 'react';
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
  return (
  <>
  <div className="leftnav1">
            <h1>LOGO</h1>
          </div>
          <div className="leftnav2">
            <h1 className="bg-blue-800 h-10 w-30 p-2 rounded mx-6  text-white flex justify-self-auto"><CiUser size={20} className=" mx-1" />User</h1>
            <ul className="m-6 mt-2 text-white px-2">
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
            </ul>

          </div>
          <div className="leftnav3 mt-3 ">
            <h1 className=" h-10 w-30 p-2 rounded mx-6 mt-2 font-extralight  text-white flex justify-self-auto"> <CiUser size={20} className=" mx-1" />My Team</h1>
            <ul className="m-6 mt-1  text-white px-2">
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>
              <li className='mt-1 hover:bg-slate-400 rounded px-2 h-8'>Team1</li>

            </ul>
            <h2 className="bg-blue-800 h-10 w-30 p-2 rounded  m-6  text-white flex justify-self-auto"> <CiUser size={20} className=" mx-1" />Settings</h2>

          </div>
  </>
  );
}

export default Navbar;

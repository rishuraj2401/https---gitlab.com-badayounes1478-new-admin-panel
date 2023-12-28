// TableComponent.js

import React, { useContext, useEffect, useState } from 'react';
import '../styles/table.css';
import axios from 'axios';
import { DataContext } from './DataContext';

const Tabl = (props) => {
  const {
    data,
    currentPage,
    setPage,
    loader,
  }=useContext(DataContext);
  const formatCreatedAt = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // You can customize the format as needed
  };
  const handleEdit = (rowData) => {
    // Handle edit action
    console.log('Editing:', rowData);
  };
 
  return (
    <div className="table h-[100%] w-100 p-10 rounded-2xl border-2">
    {/* <Tabl result={searchresult} searchFn={fetchSearch} query={searchInput} stateProps={stateProps}/> */}
    <div className="table-container h-[65vh]">
      {/* <div className="t1 bg-slate-900 h-[100%]"> */}
      {loader ? (<div className="loader flex items-center justify-center"><h1 className="text-7xl">Loading.....</h1></div>) :
        (<table className="responsive-table w-100">
          <thead>
            <tr className="">
              <th>S.No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>EmailVerified</th>
              <th>CreatedAt</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((row, index) => (
                <tr key={index} className='rw'>
                  <td data-label="No">{index + 1}.</td>
                  <td data-label="Name">{row.firstName ? row.firstName : "NA"}</td>
                  <td data-label="Title">{row.lastName ? row.lastName : "NA"}</td>
                  <td data-label="Email">{row.email}</td>
                  <td data-label="Role">{(Number(row.emailVerified) ? "Yes" : "No")}</td>
                  <td data-label="Date">{formatCreatedAt(row.createdAt)}  </td>
                  <td data-label="Edit"><button type="button" onClick={() => { handleEdit(row) }}>Edit</button> </td>
                </tr>
              ))
            }
          </tbody>
        </table>)}
      <div className="btn w-100 items-center text-center my-3">
        <button type='button' className='mx-10 px-4 py-1 bg-blue-700 rounded' style={{ opacity: `${currentPage === 1 || loader ? '0.5' : '1'}` }} onClick={() => { setPage(currentPage - 1) }}
          disabled={currentPage === 1 || loader}>Prev</button> {'<'}{currentPage}{'>'}
        <button type='button' disabled={loader || data.length===0} className='mx-10 bg-blue-700 px-4 py-1 rounded' style={{ opacity: `${loader || data.length===0 ? '0.5' : '1'}` }} onClick={() => {
          setPage(currentPage + 1)
          console.log(currentPage);
        }}>Next</button>

      </div>
    </div>

  </div>
  );
};

export default Tabl;

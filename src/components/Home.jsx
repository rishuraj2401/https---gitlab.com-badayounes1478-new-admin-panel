import React, { useContext, useEffect, useState } from 'react';
import Tabl from './Tabl';
import { DataContext } from './DataContext';
import Navbar from './Navbar';


const Home = () => {
  const {
    data,
    currentPage,
    setPage,
    loader,
    searchInput,
    setInput,
    flag,
    setFlag,
    fetchSearch,
    fetchData,
  } = useContext(DataContext);
  useEffect(() => {
    if (flag) {
      fetchSearch();
    }
    else {
      fetchData();
    }
  }, [currentPage, flag])
  const handleOnChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
  }
  const onEnter = (e) => {
    if (searchInput.length === 0) {
      setPage(1);
      fetchData();
    }
    else if (e.key === 'Enter') {
      setPage(1);
      setFlag(true);
      console.log("enter is pressed");
    }
  }
  return (
    <>

      <div className="main1">

        <div className="left">
          <Navbar/>
        </div>
        <div className="right">
          <div className="sbar p-2">
            <input className="nosubmit" type="search" onChange={(e) => handleOnChange(e)}
              onKeyUp={(e) => onEnter(e)}
              placeholder="Search..." />

          </div>
          <div className="rightcont p-8">
           <Tabl/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

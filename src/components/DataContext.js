import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [searchresult, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [loader, setLoader] = useState(false);
  const [searchInput, setInput] = useState('');
  const [flag, setFlag] = useState(false);
  const ApiUrl="https://api.app.creatosaurus.io/creatosaurus/adminpanel/users";
  const ApiSearch="https://api.app.creatosaurus.io/creatosaurus/adminpanel/users/search";

  const fetchSearch = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${ApiSearch}?page=${currentPage}&limit=${limit}&query=${searchInput}`);
      setData(response.data);
      console.log("fetch search is executing", currentPage);
    } catch (error) {
      console.log("Fetching error:", error);
    } finally {
      setLoader(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoader(true);
      setFlag(false);
      const response = await axios.get(`${ApiUrl}?page=${currentPage}&limit=${limit}`);
      setData(response.data);
    } catch (error) {
      console.log("Fetching error:", error);
    } finally {
      setLoader(false);
    }
  };

  const contextValue = {
    index,
    setIndex,
    searchresult,
    setResult,
    data,
    setData,
    currentPage,
    setPage,
    limit,
    setLimit,
    loader,
    setLoader,
    searchInput,
    setInput,
    flag,
    setFlag,
    fetchSearch,
    fetchData,
    ApiSearch,
    ApiUrl
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

// const useDataContext = () => {
//   return useContext(DataContext);
// };

export {DataProvider};

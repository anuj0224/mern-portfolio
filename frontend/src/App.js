import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './Components/Loader';
import React from 'react';
import { useEffect } from 'react'; 
import fetchPortfolioData from './portfolioAction';
import { useDispatch, useSelector } from 'react-redux';
import Admin from './pages/Admin/Admin';
// import Login from './pages/Admin/Login';
// import {reloadData} from './redux/rootSlice';

function App() {
  
  const { loading, portfolioData, reloadData }  = useSelector((state) => state.root);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(!portfolioData){
    dispatch(fetchPortfolioData());
  }
// eslint-disable-next-line
  },[portfolioData]);

  useEffect(()=>{
    if(reloadData){
    dispatch(fetchPortfolioData());
  }
  // eslint-disable-next-line
  },[reloadData]); 

  

  return (
    <BrowserRouter>
    {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/admin-login' element={<Login/ />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

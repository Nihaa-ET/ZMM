import React from 'react'
import { useSelector } from 'react-redux'

import { Outlet } from 'react-router-dom';
import DashBoardHeader from './sellerDashboard/DashBoardHeader';

import SideBar from './sellerDashboard/SideBar';


const SellerDashBoard = () => {
    const seller = useSelector(state => state?.seller?.seller)
    console.log("seller_name",seller);
  return (
    <div className='min-h-[calc(100vh-120px)]  md:flex hidden' >
        <aside className=' shadow-2xl min-h-full w-full max-w-72 bg-gradient-to-b from-gray-600 to-gray-600'>
           <SideBar />
        </aside>
  
        <main className=' w-full h-full p-2'>
          <DashBoardHeader/>
           <Outlet />
        </main>
    </div>
  )
}

export default SellerDashBoard
import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { MdManageHistory } from "react-icons/md";
import { TbShoppingCartCog } from "react-icons/tb";
import { AiFillCustomerService } from "react-icons/ai";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { IoPersonAdd } from "react-icons/io5";
// import { AiFillSetting } from "react-icons/ai";
import { HiSupport } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { FcFullTrash } from "react-icons/fc";
const SideBar = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-white text-lg mt-2'>
             <h1>SellerDashBoard</h1>
           </div>
          <div className='p-4 grid gap-3'>

            {/* <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                    <RxDashboard className='text-xl'/>
                </div>
                <Link to= {"dashboard-overview"} className=''>Dashboard Overview</Link>
            </div> */}
            <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                    <RxDashboard className='text-xl'/>
                </div>
                <Link to= {"all-seller"} className=''>All Seller Details</Link>
            </div>
            <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                    <IoPersonAdd className='text-xl'/>
                </div>
                <Link to= {"add-seller"} className=''>Add Seller</Link>
            </div>
            <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                    <FcFullTrash className='text-xl'/>
                </div>
                <Link to= {"trash-seller-details"} className=''>Trash Seller Details</Link>
            </div>
            {/* <div className='relative group'>
                <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                    <div className='border-none rounded-md bg-pink-500 p-2 '>
                    <MdManageHistory className='text-xl'/>
                    </div>
                    <Link to= {"product-management"} className=''>Product Management</Link>
                </div>
                <div className=' hidden group-hover:block absolute h-full w-52 left-full top-0 mt-10 bg-white shadow-lg rounded-md'>
                    <div className='p-2 flex items-center justify-center bg-slate-300 rounded-md mt-2'>
                      <Link className='whitespace-nowrap'>All Products</Link>
                    </div>
                </div>
            </div> */}
            {/* <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                <TbShoppingCartCog className='text-xl'/>
                </div>
                <Link to= {"order-management"} className=''>Order Management</Link>
            </div> */}
            {/* <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                <AiFillCustomerService  className='text-xl'/>
                </div>
                <Link to= {"customer-management"} className=''>Customer Management</Link>
            </div> */}
            {/* <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                <TbShoppingBagDiscount  className='text-xl'/>
                </div>
                <Link to= {"promotions-discounts"} className=''>Discounts</Link>
            </div> */}
            {/* <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                <AiFillSetting  className='text-xl'/>
                </div>
                <Link to= {"settings"} className=''>Settings</Link>
            </div> */}
            {/* <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                <HiSupport  className='text-xl'/>
                </div>
                <Link to= {"support"} className=''>Support</Link>
            </div> */}
            <div className='border-none bg-white rounded-md p-2 hover:bg-slate-200 text-lg flex items-center gap-3'>
                <div className='border-none rounded-md bg-pink-500 p-2 '>
                <BiLogOut  className='text-xl'/>
                </div>
                <Link to= {"/"} className=''>Logout</Link>
            </div>
          </div> 
    </div>
  )
}

export default SideBar
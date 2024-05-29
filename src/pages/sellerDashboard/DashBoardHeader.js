import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import AddSellerDetails from '../../components/AddSellerDetails';
const DashBoardHeader = () => {

  const[openAddSeller, setOpenAddSeller] = useState(false)
  return (
    <div className='  bg-slate-400 w-full h-14'>
      <div className='flex items-center justify-between px-4 p-2'>
        <div>
           <h1 className=' cursor-pointer text-lg'>Seller DashBoard</h1>
        </div>
        <div className='flex items-center w-52 justify-between max-w-md border gap-1 rounded-md focus-within:shadow-md bg-white'>
            <div className='ml-2'><IoSearch className='text-md cursor-pointer'/></div>
              <input type='text' placeholder='search product here...' className=' w-full outline-none text-md p-2'/>  
        </div>
        {/* <div className='border rounded-md p-2 px-3 border-red-500 text-black hover:bg-red-600 transition hover:text-white' onClick={()=>setOpenAddSeller(true)}>
         <button>Add Seller</button>
       </div> */}
       
        <div className='border-none text-2xl flex items-center gap-2 cursor-pointer'>
           <AiFillSetting />
           <div className='border-none'>
             <IoIosNotifications />
          </div>
        </div>
      
         
      </div>
       
          {/* Add seller Details */}

          {/* {
        
        openAddSeller && (
          <AddSellerDetails 
          onclose = {()=>setOpenAddSeller(false)}
          
          />
        )

       } */}
    </div>
  )
}

export default DashBoardHeader
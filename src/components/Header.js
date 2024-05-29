import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const seller = useSelector(state => state?.seller?.seller)
  // console.log("Seller_header",seller);
  const dispatch = useDispatch()

  const [menuDisplay, setMenuDisplay] = useState(false)
  
  return (
    <div className=' bg-slate-200 '>
      <div className='h-full container mx-auto flex items-center justify-between px-4 p-3'>
          <div>
            <h1 className=' uppercase cursor-pointer'>Zeromiddleman</h1>
          </div>
            <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2 '>
              <input type='text' placeholder='search product here...' className=' w-full outline-none p-2'/>
               <div className=' text-lg min-w-[50px] flex items-center justify-center text-white rounded-r-full  h-10 bg-red-500'><CiSearch className='text-2xl'/></div>
            </div>

            <div className='flex items-center gap-7'>

                <div className='relative flex justify-center'>
                    <div className=' text-3xl cursor-pointer relative flex justify-center' onClick={()=> setMenuDisplay(preve => !preve)}>
                      <FaUserCircle />
                    </div>
                    {
                      menuDisplay && (
                        <div className=' absolute bg-white bottom-0 top-12 h-fit p-3 shadow-lg rounded '>
                          <nav>
                            <Link to={"seller-deshboard/all-seller"} className=' whitespace-nowrap hover:bg-pink-200 p-2 ' onClick={()=>setMenuDisplay(preve => !preve)}>Seller Deshboard</Link>
                          </nav>
                       </div>
                      )
                    }
                    
                </div>
                

              <div className='text-3xl relative '>
                <span><IoMdCart /></span>
                <p className='text-sm bg-red-500 text-white flex items-center justify-center w-5 h-5 p-1 rounded-full absolute top-0 -right-3'>0</p>
              </div>
            </div>
          <div className='border-none rounded-full px-3 py-1 text-white bg-red-500  text-md items-center hover:bg-gray-700'>
            <Link to={'/seller-login'} className='text-lg'>login</Link>
          </div>
      </div>
      
    </div>
  )
}

export default Header
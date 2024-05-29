import React, { useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";


const DeleteSellerDetails = ({onclose}) => {

    const [allsellers, setAllSellers] = useState([]);

    const [deleteModelOpen, setDeleteModelOpen] = useState(false)

    const [sellerToDelete, setSellerToDelete] = useState(null)
    
    const openDeleteModel = (id)=>{

        setSellerToDelete(id);
        setDeleteModelOpen(true)
    }

    const deleteSeller = async (id) => {

        setAllSellers(allsellers.filter(seller => seller.id !== id));
    
        const confirmPermanentDelete = window.confirm("Do you want to permanently delete this seller from the database?");
        if (confirmPermanentDelete) {
            try {
                const response = await fetch(SummaryApi.DeleteAllSeller.url, {
                    method: SummaryApi.DeleteAllSeller.method,
                    credentials: 'include',
                });
    
                const dataResponse = await response.json();
    
                if (dataResponse.success) {
                    toast.success(dataResponse.message);
                } else {
                    toast.error(dataResponse.message);
                }
            } catch (error) {
                console.error('Error deleting seller:', error);
                toast.error('An error occurred while deleting seller.');
            }
        }
    };

    const closeDeleteModel = ()=>{
        setSellerToDelete(null);
        setDeleteModelOpen(false)
      }
      


  return (
    <div className='fixed  bg-opacity-35 w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
       <div className=' w-60 h-56 bg-white shadow-xl p-4'>
             <div className='flex items-center justify-end cursor-pointer  hover:text-red-600' onClick={onclose}>
               < IoClose className='text-2xl' />
             </div>
             <div className='p-2 mt-5'>
               <p className='text-lg'>Are you sure you want to delete this seller?</p>
             </div>
             <div className='flex items-center justify-between p-2 mt-5'>
               <button className='text-md'>Confirm</button>
               <button className='text-md'>Cancel</button>
             </div>
           </div>
    </div>
  )
}

export default DeleteSellerDetails
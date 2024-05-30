import React from 'react'
import { IoClose } from "react-icons/io5";
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const PermanentDeleteSellerDetails = (
    {
        onClose,
        sellerToDelete
    }
) => {



    const navigate = useNavigate()

    const permanentDeleteSeller = async () => {
        try {
            const response = await fetch(`${SummaryApi.PermanantDeleteSeller.url}/${sellerToDelete}`, {
                method: SummaryApi.PermanantDeleteSeller.method,
                credentials: 'include',
            });

            const dataResponse = await response.json();

            if (dataResponse.success) {  

                toast.success(dataResponse.message);
                onClose();
                navigate('/seller-deshboard')
            } else {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            console.error('Error permanently deleting seller:', error);
            toast.error('An error occurred while permanently deleting seller.');
        }
    };


  return (
    <div className='fixed bg-opacity-35 w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
    <div className='w-60 h-60 bg-white shadow-xl p-4'>
        <div className='flex items-center justify-end cursor-pointer hover:text-red-600' onClick={onClose}>
            <IoClose className='text-2xl' />
        </div>
        <div className='p-2 mt-5'>
            <p className='text-lg'>Are you sure you want to Database Permanant delete this seller?</p>
        </div>
        <div className='flex items-center justify-between p-2 mt-5'>
            <button className='text-lg font-medium text-red-600 hover:text-red-500' onClick={permanentDeleteSeller}>Confirm</button>
            <button className='text-lg font-medium text-red-600 hover:text-red-500' onClick={onClose}>Cancel</button>
        </div>
    </div>
</div>
  )
}

export default PermanentDeleteSellerDetails
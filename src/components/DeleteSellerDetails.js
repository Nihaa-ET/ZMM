import React from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const DeleteSellerDetails = ({ sellerToDelete, onClose }) => {

  const navigate = useNavigate()

    const deleteSeller = async () => {
        try {
            const response = await fetch(`${SummaryApi.SoftDeleteSeller.url}/${sellerToDelete}`, {
                method: SummaryApi.SoftDeleteSeller.method,
                credentials: 'include',
            });

            const dataResponse = await response.json();

            if (dataResponse.success) {
                toast.success(dataResponse.message);
                onClose();
                navigate('/seller-deshboard/trash-seller-details')
            } else {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            console.error('Error deleting seller:', error);
            toast.error('An error occurred while deleting seller.');
        }
    };

    return (
        <div className='fixed bg-opacity-35 w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='w-60 h-56 bg-white shadow-xl p-4'>
                <div className='flex items-center justify-end cursor-pointer hover:text-red-600' onClick={onClose}>
                    <IoClose className='text-2xl' />
                </div>
                <div className='p-2 mt-5'>
                    <p className='text-lg'>Are you sure you want to delete this seller?</p>
                </div>
                <div className='flex items-center justify-between p-2 mt-5'>
                    <button className='text-md' onClick={deleteSeller}>Confirm</button>
                    <button className='text-md' onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteSellerDetails;

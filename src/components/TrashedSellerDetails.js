import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { FaTrashRestore } from "react-icons/fa";
import { MdDelete  } from "react-icons/md";
import PermanentDeleteSellerDetails from './PermanentDeleteSellerDetails';

const TrashedSellerDetails = () => {
    
    const [trashedSellers, setTrashedSellers] = useState([]);

    const [permanentDeleteModelOpen, setPermanentDeleteModelOpen] = useState(false)

    const [sellerToDelete, setSellerToDelete] = useState(null)

    const fetchTrashedSellers = async () => {
        try {
            const fetchData = await fetch(SummaryApi.GetTrashedSeller.url, { 
                method: SummaryApi.GetTrashedSeller.method,
                credentials: 'include',
            });

            const dataResponse = await fetchData.json();

            if (dataResponse.success) {
                setTrashedSellers(dataResponse.data);
            } else if (dataResponse.error) {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            console.error('Error fetching trashed sellers:', error);
            toast.error('An error occurred while fetching trashed sellers.');
        }
    };

  
    const openDeleteModel= (id)=>{
        setSellerToDelete(id)
        setPermanentDeleteModelOpen(true)
   }

   const closeDeleteModel = () => {
    setSellerToDelete(null);
    setPermanentDeleteModelOpen(false);
};

    useEffect(() => {
        fetchTrashedSellers();
    }, []);

  return (
    <div className='mt-3 pb-4'>

        {
            permanentDeleteModelOpen && (
                
                <PermanentDeleteSellerDetails 
                  sellerToDelete = {sellerToDelete}
                  onClose = {closeDeleteModel}
                />
            )
        }
    <table className='w-full seller_table'>
        <thead>
            <tr className='bg-black text-white'>
                <th>sr.no</th>
                <th>SellerName</th>
                <th>CompanyName</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Role</th>
                <th>Created At</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {trashedSellers.map((el, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el?.sellerName}</td>
                    <td>{el?.companyName}</td>
                    <td>{el?.email}</td>
                    <td>{el?.phoneNumber}</td>
                    <td>{el?.role}</td>
                    <td>{moment(el?.created_at).format("MMM Do YY")}</td>
                    <td>
                      <button
                            className='border rounded-full p-2 bg-green-600 hover:bg-green-500 ml-2'
                            
                        >
                         <FaTrashRestore />
                        </button>
                        <button
                            className='border rounded-full p-2 bg-red-600 hover:bg-red-500 ml-2'
                            onClick={() => openDeleteModel(el?.id)}
                        >
                         <MdDelete />
                        </button>
                       
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default TrashedSellerDetails
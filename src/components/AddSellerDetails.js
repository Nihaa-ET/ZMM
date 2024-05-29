import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import SummaryApi from '../common/index';
import { useNavigate } from 'react-router-dom';
const AddSellerDetails = (
    {onclose}
) => {
    
    const [data, setData] = useState({
          sellerName : "",
          companyName : "",
          email : "",
          phoneNumber : "",
          role : "",
          GSTNumber : "",
          companySize : "",
          yearFounded : "",
          companyUrl : "",
          companyAddress : "",
          doorNumber : "",
          roadStreet : "",
          city : "",
          district : "",
          state : "",
          country : "",
          pincode : "",
          company : "",
          LTD : ""

    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
     
      try {

        const response = await fetch(SummaryApi.Seller_details.url, {
          method: SummaryApi.Seller_details.method,
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
  
        const dataApi = await response.json();
        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate('/seller-deshboard/all-seller')
        } else {
          toast.error(dataApi.message);
        }
      } catch (error) {
        toast.error("Error during registration");
      }
    };
  

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({
        ...prev,
        [name]: value
      }));
    };
   
  return (
    <div className='fixed  bg-opacity-35 w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className=' bg-slate-300 p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden mt-auto'>
           <div className='flex items-center justify-between'> 
              <h1 className='text-lg'>Add Seller</h1>
              <div className=' w-fit ml-auto text-2xl hover:text-red-500 cursor-pointer' onClick={onclose}>
                <IoClose />
              </div>
           </div>
        
        </div>
    </div>
  )
}

export default AddSellerDetails
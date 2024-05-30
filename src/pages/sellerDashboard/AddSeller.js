import React, { useState } from 'react'
import AddSellerDetails from '../../components/AddSellerDetails'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';

const AddSeller = () => {

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

    const response = await fetch(SummaryApi.AddSellerDetails.url, {
      method: SummaryApi.AddSellerDetails.method,
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


  // const[openAddSeller, setOpenAddSeller] = useState(false)

  return (
    <div className='p-2'>
     <div className='ml-4'>
      <h1 className='text-xl uppercase font-bold font-sans'>Basic Details</h1>
     </div>
       {/* <div className='border rounded-md p-2 px-3 border-red-500 text-red-500 hover:bg-red-600 transition hover:text-white' onClick={()=>setOpenAddSeller(true)}>
         <button>Add Seller</button>
       </div> */}
       {/* <div className='border rounded-md p-2 px-3 border-red-300 text-red-500 hover:bg-red-600 transition hover:text-white'>
         <button>Edit Seller</button>
       </div> */}

       {/* Add seller Details */}

       {/* {
        
        openAddSeller && (
          <AddSellerDetails 
          onclose = {()=>setOpenAddSeller(false)}
          
          />
        )

       } */}

    
          <form className='p-4  gap-2 h-full ' onSubmit={handleSubmit}>
            <div className='flex gap-5 items-center justify-between'>
              <div className='grid'>
              <label htmlFor='sellerName'>SellerName* :</label>
              <input 
                type='text' 
                placeholder='Enter your sellerName'
                id='sellerName'
                name='sellerName'
                value={data.sellerName}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                />
              </div>
              <div className='grid'>
              <label htmlFor='companyName'>CompanyName* :</label>
              <input 
                type='text' 
                placeholder='Enter your companyName'
                id='companyName'
                name='companyName'
                value={data.companyName}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                /> 

              </div>
              <div className='grid'>
                  
              <label htmlFor='email'>Email* :</label>
              <input 
                type='text'
                placeholder='Enter your Email'
                id='email'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                />  
              </div>
              <div className='grid'>
              <label htmlFor='phoneNumber'>phoneNumber* :</label>
              <input 
                type='phone' 
                placeholder='Enter your phoneNumber'
                id='phoneNumber'
                name='phoneNumber'
                value={data.phoneNumber}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                />   
              </div>
            </div>
            
            <div className='mt-6'>
              <h1 className='text-xl uppercase font-bold font-sans'>company Details</h1>
            </div>

            <div className='flex gap-3 items-center justify-between mt-6'>
                <div className='grid'>
                    
              <label htmlFor='GSTNumber'>GSTNumber* :</label>
              <input 
                type='text' 
                placeholder='Enter your GSTNumber'
                id='GSTNumber'
                name='GSTNumber'
                value={data.GSTNumber}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                />   
                </div>
                <div className='grid'>
                    
                  <label htmlFor='companySize'>CompanySize* :</label>
                    <input 
                    type='text' 
                    placeholder='Enter your companySize'
                    id='companySize'
                    name='companySize'
                    value={data.companySize}
                    onChange={handleOnChange}
                    className='p-2 border rounded bg-white'
                    /> 
                </div>
                <div className='grid'>
                    
                  <label htmlFor='yearFounded'>YearOfFounded* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your yearOfFounded'
                  id='yearFounded'
                  name='yearFounded'
                  value={data.yearFounded}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  /> 
                </div>
                <div className='grid'>
                  <label htmlFor='companyUrl'>CompanyUrl* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your companyUrl'
                  id='companyUrl'
                  name='companyUrl'
                  value={data.companyUrl}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  /> 
                </div>
            </div>
            
            <div className='flex gap-3 items-center justify-between mt-6'>
               <div className='grid'>
                <label htmlFor='companyAddress'>CompanyAddress* :</label>
                <input 
                type='text' 
                placeholder='Enter your companyAddress'
                id='companyAddress'
                name='companyAddress'
                value={data.companyAddress}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                /> 
               </div>
               <div className='grid'>
                  <label htmlFor='doorNumber'>Door/buildingNumber* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your door/buildingNumber'
                  id='doorNumber'
                  name='doorNumber'
                  value={data.doorNumber}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  /> 
               </div>
               <div className='grid'>
                  <label htmlFor='roadStreet'>RoadStreet* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your roadStreet'
                  id='roadStreet'
                  name='roadStreet'
                  value={data.roadStreet}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  /> 
               </div>
               <div className='grid'>
                  <label htmlFor='city'>City* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your city'
                  id='city'
                  name='city'
                  value={data.city}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  /> 
               </div>
            </div>

            <div className='flex gap-3 items-center justify-between mt-6'>
               <div className='grid'>
                <label htmlFor='district'>District* :</label>
                <input 
                type='text' 
                placeholder='Enter your district'
                id='district'
                name='district'
                value={data.district}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                /> 
               </div>
               <div className='grid'>
                  <label htmlFor='state'>State* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your state'
                  id='state'
                  name='state'
                  value={data.state}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  /> 
               </div>
               <div className='grid'>
                  <label htmlFor='country'>Country* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your country'
                  id='country'
                  name='country'
                  value={data.country}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  />
               </div>
               <div className='grid'>
                <label htmlFor='pincode'>Pincode* :</label>
                <input 
                type='number' 
                placeholder='Enter your pincode'
                id='pincode'
                name='pincode'
                value={data.pincode}
                onChange={handleOnChange}
                className='p-2 border rounded bg-white'
                /> 
               </div>
            </div>

            <div className='flex gap-10 items-center mt-6'>
                <div className='grid'>
                  <label htmlFor='company'>Company* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your company'
                  id='company'
                  name='company'
                  value={data.company}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  />
                </div>
                <div className='grid ml-16'>
                  <label htmlFor='LTD'>LTD* :</label>
                  <input 
                  type='text' 
                  placeholder='Enter your LTD'
                  id='LTD'
                  name='LTD'
                  value={data.LTD}
                  onChange={handleOnChange}
                  className='p-2 border rounded bg-white'
                  />
                </div>
            </div>
 
               
              <div className='flex items-center justify-center mt-5'>
                <button className='text-md border border-red-500 p-2 px-4 rounded-md transition hover:bg-red-600'>Add Seller</button> 
              </div>
           </form>
  

    </div>
  )
}

export default AddSeller
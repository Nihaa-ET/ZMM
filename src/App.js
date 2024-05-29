import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setSellerDetail } from './store/sellerSlice';


function App() {

  // const dispatch = useDispatch()

  // const fetchSellerDetails = async() =>{

  //   const dataResponse = await fetch(SummaryApi.Current_Sellers.url,{
  //     method : SummaryApi.Current_Sellers.method,
  //     credentials : 'include'
  //   })

  //   const dataApi = await dataResponse.json()

  //   if(dataApi.success){
  //      dispatch(setSellerDetail(dataApi.data))
  //   }
    
  //   console.log("seller_data",dataResponse);
  // }

  useEffect(()=>{
    // user Details
    // fetchSellerDetails()
  },[])

  return (
    <>
    < Context.Provider value={{
          //  fetchSellerDetails // Seller details fetch
    }} >
    <ToastContainer />
     <Header />
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </main>
     <Footer />

     </Context.Provider >
    </>
  );
}

export default App;

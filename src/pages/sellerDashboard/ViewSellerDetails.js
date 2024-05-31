import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import moment from "moment";

const ViewSellerDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [setdata, data] = useState({
    id,
  });
  const [sellerDetails, setSellerDetails] = useState({
    sellerName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    GSTNumber: "",
    companySize: "",
    yearFounded: "",
    companyUrl: "",
    companyAddress: "",
    doorNumber: "",
    roadStreet: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
    company: "",
    LTD: "",
  });

  const fetchParticularSeller = async () => {
    try {
      const fetchData = await fetch(
        `${SummaryApi.GetParticularSellerDetails.url}/${id}`,
        {
          method: SummaryApi.GetParticularSellerDetails.method,
          credentials: "include",
        }
      );

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setSellerDetails(dataResponse.data[0]);
        console.log("data==>", dataResponse.data);
      } else if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      console.error("Error fetching sellers:", error);
      toast.error("An error occurred while fetching seller.");
    }
  };

  useEffect(() => {
    fetchParticularSeller();
  }, [id]);

  return (
    // <div className="p-2">
    //   <div className="ml-4">
    //     <h1 className="text-xl uppercase font-bold font-sans">Basic Details</h1>
    //   </div>
    //   <form className="p-4 gap-2 h-full">
    //     <div className="flex gap-5 items-center justify-between">
    //       <div className="grid">
    //         <label htmlFor="sellerName">SellerName :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80 ">
    //           {sellerDetails.sellerName}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="companyName">CompanyName :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.companyName}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="email">Email :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.email}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="phoneNumber">PhoneNumber :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.phoneNumber}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="mt-6">
    //       <h1 className="text-xl uppercase font-bold font-sans">
    //         Company Details
    //       </h1>
    //     </div>

    //     <div className="flex gap-3 items-center justify-between mt-6">
    //       <div className="grid">
    //         <label htmlFor="GSTNumber">GSTNumber :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.GSTNumber}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="companySize">CompanySize :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.companySize}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="yearFounded">YearOfFounded :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {moment(sellerDetails.yearFounded).format('ll')}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="companyUrl">CompanyUrl :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.companyUrl}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="flex gap-3 items-center justify-between mt-6">
    //       <div className="grid">
    //         <label htmlFor="companyAddress">CompanyAddress :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.companyAddress}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="doorNumber">Door/buildingNumber :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.doorNumber}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="roadStreet">RoadStreet :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.roadStreet}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="city">City :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.city}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="flex gap-3 items-center justify-between mt-6">
    //       <div className="grid">
    //         <label htmlFor="district">District :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.district}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="state">State :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.state}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="country">Country :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.country}
    //         </span>
    //       </div>
    //       <div className="grid">
    //         <label htmlFor="pincode">Pincode :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.pincode}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="flex gap-3 items-center justify-between mt-6">
    //       <div className="grid">
    //         <label htmlFor="company">Company :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.company}
    //         </span>
    //       </div>
    //       <div className="grid ">
    //         <label htmlFor="LTD">LTD :</label>
    //         <span className="p-2 border rounded bg-gray-100  w-80">
    //           {sellerDetails.LTD}
    //         </span>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <div className="p-2 bg-white text-black">
      <div className="ml-4">
        <h1 className="text-xl uppercase font-bold font-sans">Seller Details</h1>
      </div>
      <form className="p-4 gap-2 h-full">
        <div className="flex gap-5 items-center justify-between">
          <div className="flex items-center gap-2 w-80 mt-2 ">
            <label htmlFor="sellerName" className="font-bold">
              SellerName:
            </label>
            <span >
              {sellerDetails.sellerName}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="companyName" className="font-bold">
              CompanyName:
            </label>
            <span >
              {sellerDetails.companyName}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="email" className="font-bold">
              Email:
            </label>
            <span >
              {sellerDetails.email}
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="phoneNumber" className="font-bold">
              PhoneNumber:
            </label>
            <span >
              {sellerDetails.phoneNumber}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="GSTNumber" className="font-bold">
              GSTNumber:
            </label>
            <span >
              {sellerDetails.GSTNumber}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="companySize" className="font-bold">
              CompanySize:
            </label>
            <span >
              {sellerDetails.companySize}
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="yearFounded" className="font-bold">
              YearOfFounded:
            </label>
            <span >
              {moment(sellerDetails.yearFounded).format("ll")}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="companyUrl" className="font-bold">
              CompanyUrl:
            </label>
            <span >
              {sellerDetails.companyUrl}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="companyAddress" className="font-bold">
              CompanyAddress:
            </label>
            <span >
              {sellerDetails.companyAddress}
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="doorNumber" className="font-bold">
              Door/buildingNumber:
            </label>
            <span >
              {sellerDetails.doorNumber}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="roadStreet" className="font-bold">
              RoadStreet:
            </label>
            <span >
              {sellerDetails.roadStreet}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="city" className="font-bold">
              City:
            </label>
            <span >
              {sellerDetails.city}
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="district" className="font-bold">
              District:
            </label>
            <span >
              {sellerDetails.district}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="state" className="font-bold">
              State:
            </label>
            <span >
              {sellerDetails.state}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="country" className="font-bold">
              Country:
            </label>
            <span >
              {sellerDetails.country}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="pincode" className="font-bold">
              Pincode:
            </label>
            <span >
              {sellerDetails.pincode}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="company" className="font-bold">
              Company:
            </label>
            <span >
              {sellerDetails.company}
            </span>
          </div>
          <div className="flex items-center gap-2 w-80 mt-2">
            <label htmlFor="LTD" className="font-bold">
              LTD:
            </label>
            <span >
              {sellerDetails.LTD}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewSellerDetails;

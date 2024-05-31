import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import moment from "moment";

const EditSellerDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();

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

  const formatDateForMySQL = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const editSellerDetails = async (e) => {
    e.preventDefault();
    try {
      const formattedSellerDetails = {
        ...sellerDetails,
        yearFounded: formatDateForMySQL(sellerDetails.yearFounded),
      };

      const response = await fetch(
        `${SummaryApi.EditParticularDetail.url}/${id}`,
        {
          method: SummaryApi.EditParticularDetail.method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedSellerDetails),
        }
      );

      const dataApi = await response.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/seller-deshboard/all-seller");
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("Error during Updating Details");
    }
  };

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
        const sellerData = {
          ...dataResponse.data[0],
          yearFounded: moment(dataResponse.data[0].yearFounded).format(
            "YYYY-MM-DD"
          ), // Format to YYYY-MM-DD for input field
        };
        setSellerDetails(sellerData);
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSellerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="p-2">
      <div className="ml-4">
        <h1 className="text-xl uppercase font-bold font-sans">Basic Details</h1>
      </div>
      <form className="p-4 gap-2 h-full">
        <div className="flex gap-5 items-center justify-between">
          <div className="grid">
            <label htmlFor="sellerName">SellerName* :</label>
            <input
              type="text"
              placeholder="Enter your sellerName"
              id="sellerName"
              name="sellerName"
              value={sellerDetails.sellerName}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="companyName">CompanyName* :</label>
            <input
              type="text"
              placeholder="Enter your companyName"
              id="companyName"
              name="companyName"
              value={sellerDetails.companyName}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="email">Email* :</label>
            <input
              type="email"
              placeholder="Enter your Email"
              id="email"
              name="email"
              value={sellerDetails.email}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="phoneNumber">PhoneNumber* :</label>
            <input
              type="tel"
              placeholder="Enter your phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              value={sellerDetails.phoneNumber}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-xl uppercase font-bold font-sans">
            Company Details
          </h1>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="grid">
            <label htmlFor="GSTNumber">GSTNumber* :</label>
            <input
              type="text"
              placeholder="Enter your GSTNumber"
              id="GSTNumber"
              name="GSTNumber"
              value={sellerDetails.GSTNumber}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="companySize">CompanySize* :</label>
            <input
              type="text"
              placeholder="Enter your companySize"
              id="companySize"
              name="companySize"
              value={sellerDetails.companySize}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="yearFounded">YearFounded* :</label>
            <input
              type="date"
              placeholder="Enter your yearFounded"
              id="yearFounded"
              name="yearFounded"
              value={sellerDetails.yearFounded}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-52"
            />
          </div>
          <div className="grid">
            <label htmlFor="companyUrl">CompanyUrl* :</label>
            <input
              type="text"
              placeholder="Enter your companyUrl"
              id="companyUrl"
              name="companyUrl"
              value={sellerDetails.companyUrl}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="grid">
            <label htmlFor="companyAddress">CompanyAddress* :</label>
            <input
              type="text"
              placeholder="Enter your companyAddress"
              id="companyAddress"
              name="companyAddress"
              value={sellerDetails.companyAddress}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="doorNumber">Door/buildingNumber* :</label>
            <input
              type="text"
              placeholder="Enter your door/buildingNumber"
              id="doorNumber"
              name="doorNumber"
              value={sellerDetails.doorNumber}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="roadStreet">RoadStreet* :</label>
            <input
              type="text"
              placeholder="Enter your roadStreet"
              id="roadStreet"
              name="roadStreet"
              value={sellerDetails.roadStreet}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="city">City* :</label>
            <input
              type="text"
              placeholder="Enter your city"
              id="city"
              name="city"
              value={sellerDetails.city}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-between mt-6">
          <div className="grid">
            <label htmlFor="district">District* :</label>
            <input
              type="text"
              placeholder="Enter your district"
              id="district"
              name="district"
              value={sellerDetails.district}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="state">State* :</label>
            <input
              type="text"
              placeholder="Enter your state"
              id="state"
              name="state"
              value={sellerDetails.state}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="country">Country* :</label>
            <input
              type="text"
              placeholder="Enter your country"
              id="country"
              name="country"
              value={sellerDetails.country}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid">
            <label htmlFor="pincode">Pincode* :</label>
            <input
              type="number"
              placeholder="Enter your pincode"
              id="pincode"
              name="pincode"
              value={sellerDetails.pincode}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
        </div>

        <div className="flex gap-0.5 items-center mt-6">
          <div className="grid">
            <label htmlFor="company">Company* :</label>
            <input
              type="text"
              placeholder="Enter your company"
              id="company"
              name="company"
              value={sellerDetails.company}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
          <div className="grid ml-16">
            <label htmlFor="LTD">LTD* :</label>
            <input
              type="text"
              placeholder="Enter your LTD"
              id="LTD"
              name="LTD"
              value={sellerDetails.LTD}
              onChange={handleOnChange}
              className="p-2 border rounded bg-white w-50"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button
            className="text-md border border-red-500 p-2 px-4 rounded-md transition hover:bg-red-600"
            onClick={editSellerDetails}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSellerDetails;

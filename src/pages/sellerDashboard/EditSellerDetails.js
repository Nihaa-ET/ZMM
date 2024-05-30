import React, { useEffect, useState } from "react";
// import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
// import "./EditSellerDetails.css";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

const EditSellerDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [sellerDetails, setSellerDetails] = useState({
    name: "",
    company: "",
    productCategory: "",
    stock: "",
    phoneNumber: "",
    emailId: "",
    gstNo: "",
  });

  //   const getSeller = () => {
  //     axios
  //       .get(`http://localhost:5050/api/getSeller/${id}`)
  //       .then((response) => {
  //         console.log(response.data.data);
  //         setSellerDetails(response.data.data[0]);
  //       })
  //       .catch((error) => {
  //         console.error("There was an error fetching the seller data!", error);
  //       });
  //   };

  //   useEffect(() => {
  //     getSeller();
  //   }, [id]);

  //   const update = (id, sellerDetails) => {
  //     console.log(id);
  //     console.log(sellerDetails);
  //     axios
  //       .patch(`http://localhost:5050/api/editseller/${id}`, sellerDetails)
  //       .then((response) => {
  //         console.log(response);
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.error("There was an error updating the seller data!", error);
  //       });
  //   };

  // const fetchParticularSeller = async () => {
  //   try {
  //     const fetchData = await fetch(SummaryApi.GetAllSellerDetails.url, {
  //       method: SummaryApi.GetAllSellerDetails.method,
  //       credentials: "include",
  //     });

  //     const dataResponse = await fetchData.json();

  //     if (dataResponse.success) {
  //       setAllSellers(dataResponse.data);
  //     }

  //     if (dataResponse.error) {
  //       toast.error(dataResponse.message);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching sellers:", error);
  //     toast.error("An error occurred while fetching sellers.");
  //   }
  // };

  return (
    <div className="p-2">
      <div className="ml-4">
        <h1 className="text-xl uppercase font-bold font-sans">Basic Details</h1>
      </div>
      <form className="p-4  gap-2 h-full " >
        <div className="flex gap-5 items-center justify-between">
          <div className="grid">
            <label htmlFor="sellerName">SellerName* :</label>
            <input
              type="text"
              placeholder="Enter your sellerName"
              id="sellerName"
              name="sellerName"
            //   value={data.sellerName}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="companyName">CompanyName* :</label>
            <input
              type="text"
              placeholder="Enter your companyName"
              id="companyName"
              name="companyName"
            //   value={data.companyName}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="email">Email* :</label>
            <input
              type="text"
              placeholder="Enter your Email"
              id="email"
              name="email"
            //   value={data.email}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="phoneNumber">phoneNumber* :</label>
            <input
              type="phone"
              placeholder="Enter your phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
            //   value={data.phoneNumber}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-xl uppercase font-bold font-sans">
            company Details
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
            //   value={data.GSTNumber}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="companySize">CompanySize* :</label>
            <input
              type="text"
              placeholder="Enter your companySize"
              id="companySize"
              name="companySize"
            //   value={data.companySize}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="yearFounded">YearOfFounded* :</label>
            <input
              type="text"
              placeholder="Enter your yearOfFounded"
              id="yearFounded"
              name="yearFounded"
            //   value={data.yearFounded}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="companyUrl">CompanyUrl* :</label>
            <input
              type="text"
              placeholder="Enter your companyUrl"
              id="companyUrl"
              name="companyUrl"
            //   value={data.companyUrl}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
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
            //   value={data.companyAddress}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="doorNumber">Door/buildingNumber* :</label>
            <input
              type="text"
              placeholder="Enter your door/buildingNumber"
              id="doorNumber"
              name="doorNumber"
            //   value={data.doorNumber}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="roadStreet">RoadStreet* :</label>
            <input
              type="text"
              placeholder="Enter your roadStreet"
              id="roadStreet"
              name="roadStreet"
            //   value={data.roadStreet}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="city">City* :</label>
            <input
              type="text"
              placeholder="Enter your city"
              id="city"
              name="city"
            //   value={data.city}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
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
            //   value={data.district}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="state">State* :</label>
            <input
              type="text"
              placeholder="Enter your state"
              id="state"
              name="state"
            //   value={data.state}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="country">Country* :</label>
            <input
              type="text"
              placeholder="Enter your country"
              id="country"
              name="country"
            //   value={data.country}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid">
            <label htmlFor="pincode">Pincode* :</label>
            <input
              type="number"
              placeholder="Enter your pincode"
              id="pincode"
              name="pincode"
            //   value={data.pincode}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
        </div>

        <div className="flex gap-10 items-center mt-6">
          <div className="grid">
            <label htmlFor="company">Company* :</label>
            <input
              type="text"
              placeholder="Enter your company"
              id="company"
              name="company"
            //   value={data.company}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
          <div className="grid ml-16">
            <label htmlFor="LTD">LTD* :</label>
            <input
              type="text"
              placeholder="Enter your LTD"
              id="LTD"
              name="LTD"
            //   value={data.LTD}
            //   onChange={handleOnChange}
              className="p-2 border rounded bg-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button className="text-md border border-red-500 p-2 px-4 rounded-md transition hover:bg-red-600">
            Edit Seller
          </button>
        </div>
      </form>
    </div>
    // <Container className="d-flex justify-content-center">
    //   <div className="in_container">
    //     <Card className="w-100">
    //       <Card.Body className="main">
    //         <div className="title">
    //           <Card.Title className="title">Edit Seller Details</Card.Title>
    //         </div>
    //         <Form>
    //           <Row>
    //             <Col md={6}>
    //               <Form.Group className="items">
    //                 <Form.Label>Name</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   defaultValue={sellerDetails.name}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       name: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //               <Form.Group className="items">
    //                 <Form.Label>Company</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   defaultValue={sellerDetails.company}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       company: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //               <Form.Group className="items">
    //                 <Form.Label>Product Category</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   defaultValue={sellerDetails.productCategory}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       productCategory: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //               <Form.Group className="items">
    //                 <Form.Label>Stock</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   defaultValue={sellerDetails.stock}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       stock: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //             </Col>
    //             <Col md={6}>
    //               <Form.Group className="items">
    //                 <Form.Label>Phone Number</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   defaultValue={sellerDetails.phoneNumber}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       phoneNumber: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //               <Form.Group className="items">
    //                 <Form.Label>Email Id</Form.Label>
    //                 <Form.Control
    //                   type="email"
    //                   defaultValue={sellerDetails.emailId}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       emailId: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //               <Form.Group className="items">
    //                 <Form.Label>GST No</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   defaultValue={sellerDetails.gstNo}
    //                   onChange={(e) =>
    //                     setSellerDetails({
    //                       ...sellerDetails,
    //                       gstNo: e.target.value,
    //                     })
    //                   }
    //                 />
    //               </Form.Group>
    //             </Col>
    //           </Row>
    //         </Form>
    //         <div className="allbuttons">
    //           <div className="buttonall">
    //             <Button onClick={() => update(id, sellerDetails)}>Save</Button>
    //           </div>
    //           <div className="buttonall">
    //             <Button>Trash</Button>
    //           </div>
    //           <div className="buttonall">
    //             <Button>Delete</Button>
    //           </div>
    //         </div>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </Container>
  );
};

export default EditSellerDetails;

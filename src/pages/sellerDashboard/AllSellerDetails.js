import React, { useEffect, useState } from "react";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit, MdDelete } from "react-icons/md";
import DeleteSellerDetails from "../../components/DeleteSellerDetails";
import { Link } from "react-router-dom";
const AllSellerDetails = () => {
  const [allsellers, setAllSellers] = useState([]);

  const [deleteModelOpen, setDeleteModelOpen] = useState(false);

  const [sellerToDelete, setSellerToDelete] = useState(null);


  const fetchAllSeller = async () => {
    try {
      const fetchData = await fetch(SummaryApi.GetAllSellerDetails.url, {
        method: SummaryApi.GetAllSellerDetails.method,
        credentials: "include",
      });

      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setAllSellers(dataResponse.data);
      }

      if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      console.error("Error fetching sellers:", error);
      toast.error("An error occurred while fetching sellers.");
    }
  };

  const openDeleteModel = (id) => {
    setSellerToDelete(id);
    setDeleteModelOpen(true);
  };

  useEffect(() => {
    fetchAllSeller();
  }, []);

  return (
    <div className="mt-3 pb-4">
      {/* <div className='flex items-center justify-end'>
       <button 
          className='mb-3 border rounded-full p-2 bg-red-600 hover:bg-red-500 text-white '
          onClick={deleteAllSellers}
        >
          Delete All Sellers
        </button>
       </div> */}

      <table className="w-full seller_table">
        <thead>
          <tr className=" bg-black text-white">
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
          {allsellers.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?.sellerName}</td>
                <td>{el?.companyName}</td>
                <td>{el?.email}</td>
                <td>{el?.phoneNumber}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.created_at).format("MMM Do YY")}</td>
                <td>
                  <button className="border rounded-full p-2 bg-green-600 hover:bg-green-500">
                    <nav>
                      <Link
                        to={`/seller-deshboard/editSellerDetails/${el?.id}`}
                      >
                        <MdModeEdit className="text-white" />
                      </Link>
                    </nav>
                  </button>
                  <button
                    className="border rounded-full p-2 bg-red-600 hover:bg-red-500 ml-2"
                    onClick={() => openDeleteModel(el?.id)}
                  >
                    <MdDelete className="text-white" />
                  </button>
                </td>
              </tr>
            );
          })}

          {deleteModelOpen && (
            <DeleteSellerDetails onclose={() => setDeleteModelOpen(false)} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellerDetails;

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import Modal from "react-modal";
import axios from "../../../axios";
import { toast } from "react-toastify";

const cookies = document.cookie.split("; ");
const jsonData = {};

cookies.forEach((item) => {
  const [key, value] = item.split("=");
  jsonData[key] = value;
});

const RequestModal = ({ request, onClose, onAccept, onReject }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="bg-teal-50 p-8 border border-solid border-gray-300 rounded-lg shadow-lg max-w-lg mx-auto mt-20"
    >
      <h2 className="text-2xl font-semibold mb-4">Request Details</h2>
      <img
        src={request.profile_img}
        className="w-20 h-20 rounded-lg object-cover mb-2"
        alt="profile_img"
      />
      <p>
        <strong>First Name:</strong> {request.first_name}
      </p>
      <p>
        <strong>Last Name:</strong> {request.last_name}
      </p>
      <p>
        <strong>Email:</strong> {request.email}
      </p>
      <p>
        <strong>Mobile:</strong> {request.mobile}
      </p>
      <p>
        <strong>Date of Birth:</strong> {request.dob}
      </p>
      <p>
        <strong>Reason:</strong> {request.reason}
      </p>

      <div className="flex space-x-4 mt-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg"
          onClick={onAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-lg"
          onClick={onReject}
        >
          Reject
        </button>
        <button
          className="btnBlack text-white px-4 py-2 rounded-md shadow-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

const RequestCard = ({ request, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg border border-solid border-gray-300 cursor-pointer relative"
      onClick={onClick}
    >
      <div
        className={`absolute top-3 left-2 font-bold rounded-full p-2 text-white ${
          request.status === "pending"
            ? "bg-yellow-500"
            : request.status === "accepted"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {request.id}
      </div>
      <div className="w-full justify-center items-center flex">
        <img
          src={request.profile_img}
          className="w-16 h-16 rounded-full object-cover"
          alt="profile img"
        />
      </div>
      <h2 className="text-lg font-semibold text-center mb-2">
        {request.first_name} {request.last_name}
      </h2>
      <div className="text-center text-gray-600 mb-2">{request.email}</div>
      <div className="text-center text-gray-600 mb-2">{request.mobile}</div>
      <div className="w-full flex justify-center items-center">
        <div
          className={`px-4 py-2 rounded-md text-white ${
            request.status === "pending"
              ? "bg-yellow-500"
              : request.status === "accepted"
              ? "bg-green-500"
              : "bg-red-500 "
          }`}
        >
          {request.status.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

const SalesmanRequestsPage = () => {
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const [requests, setRequests] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@gmail.com",
      mobile: "+123456789",
      dob: "1990-01-10",
      profile_img:
        "https://images.unsplash.com/photo-1702478492816-843fb767d0f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reason: "I want to contribute to the sales team.",
      status: "pending",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "janesmith@gmail.com",
      mobile: "+987654321",
      dob: "1992-04-12",
      profile_img:
        "https://images.unsplash.com/photo-1702478492816-843fb767d0f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reason: "Experienced in sales and marketing.",
      status: "accepted",
    },
    // More requests...
  ]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Filter and search logic
  const filteredRequests = requests?.filter((request) => {
    return (
      (filter === "all" || request.status === filter) &&
      (request.first_name.toLowerCase().includes(search.toLowerCase()) ||
        request.last_name.toLowerCase().includes(search.toLowerCase()))
    );
  });
  const AcceptSalesmanRequest = async (id) => {
    try {
      const response = await axios.post(
        `/enterprises/`,
        {
          action: 5,
          request_id: id,
          decision: "accept",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Request Accepted");
    } catch (error) {
      console.log(error);
      toast.error("Error while accepting request");
    }
  };
  const RejectSalesmanRequest = async (id) => {
    try {
      const response = await axios.post(
        `/enterprises/`,
        {
          action: 5,
          request_id: id,
          decision: "reject",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Request Rejected");
    } catch (error) {
      console.log(error);
      toast.error("Error while rejecting request");
    }
  };
  const fetchAllSalesmanRequests = async () => {
    try {
      const response = await axios.get("/enterprises/?action=5", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      setRequests(response.data.salesman_requests);
      console.log(response.data.salesman_requests);
    } catch (error) {
      console.error(error);
      toast.error("Error while fetching requests");
    }
  };
  useEffect(() => {
    // Simulate fetching requests from the server
    fetchAllSalesmanRequests();
  }, []);

  return (
    <div className="p-8">
      {/* Filter Tray */}
      <div className="flex gap-4 justify-between items-center mb-6 flex-wrap">
        {/* Search Bar */}
        <div className="flex items-center  rounded-sm px-4 py-2 w-[38%] border border-solid border-slate-400 bg-white">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 bg-transparent focus:outline-none text-neutral-600 w-full"
          />
        </div>

        <div className="flex space-x-4 items-center">
          <FaFilter className="mr-2 shrink-0" />
          <button
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-blue-400 text-white" : "bg-gray-400"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-400"
            }`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === "accepted" ? "bg-green-500 text-white" : "bg-gray-400"
            }`}
            onClick={() => setFilter("accepted")}
          >
            Accepted
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === "rejected" ? "bg-red-500 text-white" : "bg-gray-400"
            }`}
            onClick={() => setFilter("rejected")}
          >
            Rejected
          </button>
        </div>
      </div>

      {/* Request Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRequests?.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onClick={() => setSelectedRequest(request)}
          />
        ))}
      </div>

      {/* Detailed View Modal */}
      {selectedRequest && (
        <RequestModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          onAccept={() => AcceptSalesmanRequest(selectedRequest.id)}
          onReject={() => RejectSalesmanRequest(selectedRequest.id)}
        />
      )}
    </div>
  );
};

export default SalesmanRequestsPage;

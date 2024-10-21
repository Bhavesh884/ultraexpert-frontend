import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiUploadCloud,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const AddOwnerForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    dob: "",
    is_accepted: false,
    profileImage: null,
  });

  const [profilePreview, setProfilePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, profileImage: file }));
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      is_accepted: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can manage your API logic here for adding the owner.
    const ownerData = new FormData();
    ownerData.append("action", 3);
    ownerData.append("first_name", formData.first_name);
    ownerData.append("last_name", formData.last_name);
    ownerData.append("email", formData.email);
    ownerData.append("mobile", formData.mobile);
    ownerData.append("dob", formData.dob);
    ownerData.append("is_accepted", formData.is_accepted);
    if (formData.profileImage) {
      ownerData.append("profileImage", formData.profileImage);
    }

    // Make API call here using ownerData
    console.log("Submitting form with the following data:", ownerData);
  };

  return (
    <div className="max-w-7xl border border-solid border-slate-300 mx-auto mt-6 mb-12 p-8 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out hover:shadow-xl">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">
        Add New Owner
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Upload */}
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
            {profilePreview ? (
              <img
                src={profilePreview}
                alt="Profile Preview"
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-lg">
                <FiUser size={50} />
              </div>
            )}
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-teal-600 transition duration-300"
            >
              <FiUploadCloud size={20} />
            </label>
            <input
              id="profile-upload"
              type="file"
              className="hidden"
              onChange={handleProfileUpload}
              accept="image/*"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiUser className="ml-2 text-gray-400" />
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                placeholder="Enter first name"
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiUser className="ml-2 text-gray-400" />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                placeholder="Enter last name"
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiMail className="ml-2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Mobile</label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiPhone className="ml-2 text-gray-400" />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                placeholder="Enter mobile number"
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Date of Birth</label>
          <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
            <FiCalendar className="ml-2 text-gray-400" />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_accepted"
            checked={formData.is_accepted}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="text-gray-700">Accept Terms and Conditions</label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-teal-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Add Owner
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOwnerForm;

import {
  FiUploadCloud,
  FiEdit2,
  FiLink,
  FiBriefcase,
  FiHash,
} from "react-icons/fi";
import { useState } from "react";

function AddEnterpriseForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    company_size: "",
    registered_on: "",
    registration_no: "",
    website_link: "",
    owner_id: "2", // Set owner_id if needed, or you can dynamically fetch it based on context
    logo: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logo: file });

    // Preview logo image
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogoPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call logic goes here.
    console.log(formData);
  };

  return (
    <div className="max-w-7xl border border-solid border-slate-300 mx-auto mt-6 mb-12 p-8 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out hover:shadow-xl">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">
        Add Your Enterprise
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Logo Upload */}
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Logo Preview"
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-lg">
                <FiBriefcase size={50} />
              </div>
            )}
            <label
              htmlFor="logo-upload"
              className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-teal-600 transition duration-300"
            >
              <FiUploadCloud size={20} />
            </label>
            <input
              id="logo-upload"
              type="file"
              className="hidden"
              onChange={handleLogoUpload}
              accept="image/*"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Company Name</label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiBriefcase className="ml-2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your company name"
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Company Size</label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiHash className="ml-2 text-gray-400" />
              <input
                type="number"
                name="company_size"
                value={formData.company_size}
                placeholder="Enter the company size"
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Company Description
          </label>
          <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
            <FiEdit2 className="ml-2 text-gray-400" />
            <textarea
              name="description"
              value={formData.description}
              placeholder="Enter your company description"
              onChange={handleChange}
              className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Registration Number
            </label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <FiHash className="ml-2 text-gray-400" />
              <input
                type="text"
                name="registration_no"
                value={formData.registration_no}
                placeholder="Enter your registration number"
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Registration Date
            </label>
            <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
              <input
                type="date"
                name="registered_on"
                value={formData.registered_on}
                onChange={handleChange}
                className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Website Link</label>
          <div className="flex items-center border border-solid border-gray-300 rounded-md shadow-sm">
            <FiLink className="ml-2 text-gray-400" />
            <input
              type="url"
              name="website_link"
              value={formData.website_link}
              placeholder="Enter your website URL"
              onChange={handleChange}
              className="w-full px-4 py-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-teal-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Add Enterprise
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEnterpriseForm;

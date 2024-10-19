import React, { useState } from "react";

const EnterpriseRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    companySize: "",
    registeredOn: "",
    registrationNo: "",
    websiteLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to submit the data
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Header Section */}
      <header className="text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Tech Innovations
        </h1>
        <p className="text-lg mb-8 drop-shadow-lg">
          Join us in revolutionizing the future with cutting-edge AI and ML
          solutions.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-200 transition-all duration-300">
          Discover More
        </button>
      </header>

      {/* Form Section */}
      <section className="bg-white rounded-tl-3xl rounded-tr-3xl shadow-2xl py-12 px-8 lg:px-32 md:px-16 mt-8">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Enterprise Registration
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Fill in the details below to register your enterprise.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-semibold" htmlFor="name">
              Enterprise Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter enterprise name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 font-semibold"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your enterprise"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 font-semibold"
              htmlFor="companySize"
            >
              Company Size
            </label>
            <input
              type="number"
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company size"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 font-semibold"
              htmlFor="registeredOn"
            >
              Registered On
            </label>
            <input
              type="date"
              id="registeredOn"
              name="registeredOn"
              value={formData.registeredOn}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 font-semibold"
              htmlFor="registrationNo"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNo"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter registration number"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              className="mb-2 text-gray-700 font-semibold"
              htmlFor="websiteLink"
            >
              Website Link
            </label>
            <input
              type="url"
              id="websiteLink"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter website link"
              required
            />
          </div>

          <div className="col-span-2 text-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Register Enterprise
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EnterpriseRegistration;

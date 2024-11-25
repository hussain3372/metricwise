import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <div className="pb-8">
        <h1 className="text-center font-36 font-bold textcolor">
          Submit Your Application
        </h1>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-3xl">
        <form className="flex flex-col gap-12 w-full">
          {/* Full Name Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          {/* Email Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          {/* phone Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Phone
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          {/* Current Location Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Current Location
            </label>
            <input
              type="text"
              placeholder="Enter your Current Location"
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          {/* Current Company Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Current Company
            </label>
            <input
              type="text"
              placeholder="Enter your Company Name"
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          <div className="">
            <h1 className="font-22 font-bold leading-10 textcolor">Links</h1>
          </div>

          {/* Full Name Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              LinkedIn URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              placeholder="Enter your LinkedIn URL"
              required
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          {/* Email Field */}
          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Github URL
            </label>
            <input
              type="url"
              placeholder="Enter your Github URL"
              className="col-span-2 p-3 border-b border-[#737B7D] border-t-0 border-l-0 border-r-0 outline-none bg-transparent text-[#383C3E] font-20 font-normal"
            />
          </div>

          <div className="grid sm:grid-cols-3 items-center">
            <label
              htmlFor="resumeUpload"
              className="text-lg font-medium text-gray-700 text-start"
            >
              Resume/CV
            </label>
            <div className="flex items-center justify-center py-10 px-4 gap-6 border border-dotted border-[#2E2E2E] w-full col-span-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M35.5 25V31.6667C35.5 32.5507 35.1488 33.3986 34.5237 34.0237C33.8986 34.6488 33.0507 35 32.1667 35H8.83333C7.94928 35 7.10143 34.6488 6.47631 34.0237C5.85119 33.3986 5.5 32.5507 5.5 31.6667V25"
                    stroke="#2E2E2E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.8346 13.3333L20.5013 5L12.168 13.3333"
                    stroke="#2E2E2E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5 5V25"
                    stroke="#2E2E2E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="font-20 font-normal leading-8 textcolor">
                Upload Resume/CV
              </div>
            </div>
          </div>
          <p className="text-[#8E8E8E] font-10 font-normal leading-4 -mt-10 flex justify-end items-end">Attach file. File size of your documents should not exceed 10MB</p>
        </form>
        <div className="mt-[108px] flex justify-center items-center">
          <button type="submit" className="bg-[#2E2E2E] p-4 flex justify-center items-center text-white w-[547px]">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;

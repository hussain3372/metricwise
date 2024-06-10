"use client";

import React, { useState } from "react";

const Resumeinput = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full">
        <input
          type="file"
          id="resumeUpload"
          className="hidden"
          onChange={handleFileChange}
        />

        <label
          htmlFor="resumeUpload"
          className="flex flex-col items-center justify-center rounded-[36px] border border-[#0000001F] p-6 cursor-pointer hover:border-gray-500 transition-colors duration-300"
        >
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M20.5 25.0007V3.33398M20.5 3.33398L25.5 9.16732M20.5 3.33398L15.5 9.16732"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.832 36.6672H27.1654C31.8787 36.6672 34.237 36.6672 35.7004 35.2039C37.1654 33.7372 37.1654 31.3822 37.1654 26.6672V25.0006C37.1654 20.2872 37.1654 17.9306 35.7004 16.4656C34.4204 15.1856 32.457 15.0239 28.832 15.0039M12.1654 15.0039C8.54036 15.0239 6.57703 15.1856 5.29703 16.4656C3.83203 17.9306 3.83203 20.2872 3.83203 25.0006V26.6672C3.83203 31.3822 3.83203 33.7389 5.29703 35.2039C5.79703 35.7039 6.40036 36.0322 7.16536 36.2489"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </g>
          </svg>
          <span className="text-gray-600 mt-3">Upload Resume/CV</span>
          {file && (
            <div className="mt-4">
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="max-w-xs rounded-lg shadow-md"
                />
              ) : (
                <span className="text-gray-600">{file.name}</span>
              )}
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default Resumeinput;

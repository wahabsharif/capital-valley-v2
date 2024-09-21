"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { IoEnterOutline } from "react-icons/io5";

interface ApiResponse {
  verify_status: string;
  vprn_no: string;
  app_no: string;
  manual_receipt_no: string;
  booking_date: string;
  verification_date: string;
  file_holder: string;
  cnic: string;
  address: string;
  contact: string;
  fgdate: string;
  com_res_type: string;
  size_name: string;
  registered_num: string;
  sector: string;
}

const FileNumberInput: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [fileNumber, setFileNumber] = useState<string>("");
  const [fileData, setFileData] = useState<ApiResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileNumber(event.target.value);
  };

  const handleSubmit = async () => {
    if (!fileNumber) {
      setErrorMessage("Please Enter Your Valid File Number (CV*******).");
      return;
    }

    try {
      const response = await axios.get(
        `/api/ApisController.php?form_no=${fileNumber}`
      );
      if (response.data && response.data.length > 0) {
        setFileData(response.data[0][0]);
        setErrorMessage("");
      } else {
        setFileData(null);
        setErrorMessage("No data found for this form number.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Error fetching data. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-50 w-full backdrop-blur-sm shadow-md flex items-center justify-center z-50 min-h-screen"
    >
      <div className="bg-thBlue p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center relative">
        <button
          onClick={onClose}
          className="text-gray-950 text-3xl absolute top-2 right-2"
        >
          <FaTimes />
        </button>
        <label
          htmlFor="file-number"
          className="mb-2 text-lg font-semibold text-white"
        >
          File Number
        </label>
        <div className="relative w-full">
          <motion.input
            type="text"
            id="file-number"
            value={fileNumber}
            required
            onChange={handleChange}
            className="border rounded-md p-2 w-full uppercase focus:outline-none focus:ring-2 text-gray-900 focus:ring-blue-500 transition duration-200 pr-16"
            placeholder="Enter file number"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-1 top-1/2 text-2xl font-bold transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
          >
            <IoEnterOutline />
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-md font-semibold mt-4">
            {errorMessage}
          </p>
        )}

        {fileData && (
          <div className="mt-4 flex items-center space-x-2 text-green-600">
            <FaCheckCircle className="text-xl" />
            <p className="text-lg font-semibold">File Verified</p>
          </div>
        )}

        {fileData && (
          <div className="mt-6 w-full bg-white p-6 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
              File Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Verify Status:</strong>
                </p>
                <p className="text-gray-900">
                  {fileData.verify_status || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>VPRN No:</strong>
                </p>
                <p className="text-gray-900">{fileData.vprn_no || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>App No:</strong>
                </p>
                <p className="text-gray-900">{fileData.app_no || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Manual Receipt No:</strong>
                </p>
                <p className="text-gray-900">
                  {fileData.manual_receipt_no || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Booking Date:</strong>
                </p>
                <p className="text-gray-900">
                  {fileData.booking_date || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Verification Date:</strong>
                </p>
                <p className="text-gray-900">
                  {fileData.verification_date || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>File Holder:</strong>
                </p>
                <p className="text-gray-900">{fileData.file_holder || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>CNIC:</strong>
                </p>
                <p className="text-gray-900">{fileData.cnic || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Address:</strong>
                </p>
                <p className="text-gray-900">{fileData.address || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Contact:</strong>
                </p>
                <p className="text-gray-900">{fileData.contact || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>FG Date:</strong>
                </p>
                <p className="text-gray-900">{fileData.fgdate || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Com Res Type:</strong>
                </p>
                <p className="text-gray-900">
                  {fileData.com_res_type || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Size Name:</strong>
                </p>
                <p className="text-gray-900">{fileData.size_name || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Registered Num:</strong>
                </p>
                <p className="text-gray-900">
                  {fileData.registered_num || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  <strong>Sector:</strong>
                </p>
                <p className="text-gray-900">{fileData.sector || "N/A"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FileNumberInput;

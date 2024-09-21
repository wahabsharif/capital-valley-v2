"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
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
        `/api/ApisController.php?form_no=${fileNumber}` // Use the proxy endpoint
      );
      if (response.data && response.data.length > 0) {
        setFileData(response.data[0][0]);
        setErrorMessage(""); // Clear error if data is found
      } else {
        setFileData(null);
        setErrorMessage("No data found for this form number."); // Show this error if no data is returned
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
          <div className="mt-4 text-white">
            <p>
              <strong>Verify Status:</strong> {fileData.verify_status}
            </p>
            <p>
              <strong>VPRN No:</strong> {fileData.vprn_no}
            </p>
            <p>
              <strong>App No:</strong> {fileData.app_no}
            </p>
            <p>
              <strong>Manual Receipt No:</strong> {fileData.manual_receipt_no}
            </p>
            <p>
              <strong>Booking Date:</strong> {fileData.booking_date}
            </p>
            <p>
              <strong>Verification Date:</strong> {fileData.verification_date}
            </p>
            <p>
              <strong>File Holder:</strong> {fileData.file_holder}
            </p>
            <p>
              <strong>CNIC:</strong> {fileData.cnic}
            </p>
            <p>
              <strong>Address:</strong> {fileData.address}
            </p>
            <p>
              <strong>Contact:</strong> {fileData.contact}
            </p>
            <p>
              <strong>FG Date:</strong> {fileData.fgdate}
            </p>
            <p>
              <strong>Com Res Type:</strong> {fileData.com_res_type}
            </p>
            <p>
              <strong>Size Name:</strong> {fileData.size_name}
            </p>
            <p>
              <strong>Registered Num:</strong> {fileData.registered_num}
            </p>
            <p>
              <strong>Sector:</strong> {fileData.sector}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FileNumberInput;

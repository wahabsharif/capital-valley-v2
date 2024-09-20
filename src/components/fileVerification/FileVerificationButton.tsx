"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FileNumberInput from "@/components/fileVerification/FileNumberInput";

function FileVerificationButton() {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible((prev) => !prev);
  };

  const handleClose = () => {
    setIsInputVisible(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleButtonClick}
        className="flex justify-center bg-thBlue px-4 py-2 rounded-lg"
      >
        <FiSearch className="h-6 w-6 mr-2" />
        File Verification
      </button>
      {isInputVisible && <FileNumberInput onClose={handleClose} />}
    </div>
  );
}

export default FileVerificationButton;

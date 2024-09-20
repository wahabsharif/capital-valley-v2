import React from "react";
import { FiSearch } from "react-icons/fi";

function FileVerification() {
  return (
    <div>
      <button className="flex justify-center bg-thBlue px-4 py-2 rounded-lg">
        <FiSearch className="h-6 w-6 mr-2" />
        File Verification
      </button>
    </div>
  );
}

export default FileVerification;

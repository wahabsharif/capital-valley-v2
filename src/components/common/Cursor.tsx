"use client";

import React from "react";
import mouseEffect from "@/functions/mouseEffect";

const Cursor = () => {
  React.useEffect(() => {
    mouseEffect();
  }, []);
  return (
    <>
      <div className="sm:d-none mouse-cursor cursor-outer"></div>
      <div className="sm:d-none mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;

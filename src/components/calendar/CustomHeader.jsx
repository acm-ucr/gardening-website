import React from "react";

const CustomHeader = ({ label }) => {
  return (
    <div className="text-2xl 2xl:text-3xl 2xl:py-3 py-2 uppercase text-white bg-[#76995b]">
      {label}
    </div>
  );
};

export default CustomHeader;

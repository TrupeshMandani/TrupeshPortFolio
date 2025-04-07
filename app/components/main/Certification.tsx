import React from "react";
import CertiCard from "../sub/CertiCard";

const Certification = () => {
  return (
    <div className="flex flex-col item-center justify-center py-5">
      <h1 className="text-[40px] mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 pt-5 pb-20">
        My Certifications
      </h1>
      <div className="w-full px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          <CertiCard
            src="/certi1.png"
            title="Advance React Certification"
            description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;

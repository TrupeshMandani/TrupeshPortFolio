import React from "react";
import CertiCard from "../sub/CertiCard";

const Certification = () => {
  return (
    <div className="flex flex-col item-center justify-center py-5">
      <h1 className="text-[40px] mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 pt-5 pb-20">
        My Certifications
      </h1>
      <div className="h-full w-auto flex flex-col md:flex-row gap-10 px-10">
        <CertiCard
          src="/certi1.png"
          title="Advance React Certification"
          description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
        />
        <CertiCard
          src="/CardImage.png"
          title="modern Next.js Portfolio"
          description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
        />
        <CertiCard
          src="/SpaceWebsite.png"
          title="modern Next.js Portfolio"
          description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
        />
      </div>
    </div>
  );
};

export default Certification;

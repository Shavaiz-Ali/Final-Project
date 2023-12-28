import React from "react";

const ExperienceCard = ({ name, description, feature1, feature2, icon }) => {
  return (
    <div className="flex flex-col gap-10 h-auto w-[380px] border p-8 bg-white  ">
      {icon}
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-black-600 text-1xl py-5">{name}</h1>
        <p className="text-ellipsis text-gray-500">{description}</p>
        <div>
          <p className="text-ellipsis text-gray-500">{feature1}</p>
          <p className="text-ellipsis text-gray-500">{feature2}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

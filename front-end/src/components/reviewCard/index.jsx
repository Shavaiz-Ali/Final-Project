import React from "react";
import { RiStarSFill } from "react-icons/ri";
const ReviewCard = () => {
  return (
    <div className="w-[360px] text-center py-10 border px-5  ">
      <div className="w-full flex justify-center">
        <img
          src="https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/testi_avatar02.png"
          alt="avatar"
          className="w-20 h-20 "
        />
      </div>

      <div className=" ">
        <h1 className="uppercase text-xl font-semibold py-2">caleb Hoffman</h1>
        <p className="text-gray-500  text-sm ">Customer</p>
      </div>
      <div className="flex justify-center py-2">
        {Array(5)
          .fill(5)
          .map(() => {
            return <RiStarSFill className="flex w-4 h-4 text-yellow-500" />;
          })}
      </div>
      <div>
        <p className="text-gray-500 italic text-sm  ">
          “ In promotion and advertising, a testimonial show consists of a
          person's written spoken statement extolling the virtue of a product ”
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";

function CardProps({ bgImg, price, month, day, title, body, fnc }) {
  return (
    <section className=" ">
      <div className=" shadow-lg border rounded-lg">
        <div
          className="relative w-full md:h-[150px] sm:h-[90px]
      overflow-hidden  bg-no-repeat bg-cover before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:to-transparent rounded-t-lg"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="flex justify-between p-3">
            <p
              className="absolute text-black md:text-[11px] 
    sm:text-[9px] p-1 bg-white font-bold rounded-lg"
            >
              ${price}
            </p>
            <div className="flex space-x-1">
              <p className="absolute right-9 text-[#131315] text-[11px] font-bold bg-white p-1 rounded-full">
                <HiArrowDownTray />
              </p>
              <p className="absolute right-2  text-red-600 text-[11px] font-bold bg-white rounded-full p-1 ">
                <FaHeart />
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between p-3">
          <div
            className="w-[15%] md:text-[12px] sm:text-[9px]
        flex justify-center p"
          >
            <div>
              <p className="text-[#6A7C94] font-bold">{month}</p>
              <h3
                className="text-[#131315] 
          md:text-[15px] sm:text-[12px] font-bold"
              >
                {day}
              </h3>
            </div>
          </div>
          <div className="w-[85%] pl-2">
            <h3 className=" font-bold md:text-[11px] sm:text-[9px]">{title}</h3>
            <p className="text-[#6A7C94] md:text-[10px] sm:text-[8px] font-semibold mt-1">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProps;
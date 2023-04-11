import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ title, content, img, name }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 m-5 feedback-card ">
      <img
        src={quotes}
        alt="double qoutes"
        className=" h-[27px] w-[42px] object-contain "
      />
      <p className="font-normal font-poppins text-[18px]  text-white leading-[32px] my-10 ">
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt={name}
          className="w-[48px] h-[48px]  rounded-full  "
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold font-poppins text-[20px]  text-white leading-[32px] ">
            {name}
          </h4>
          <p className="font-normal font-poppins text-[16px]  text-dimWhite leading-[23px]  ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

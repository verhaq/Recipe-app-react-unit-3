import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div 
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }} className="h-[400px]"
    >
      <div className="text-white text-center" >
        <h3 className="pt-5 pb-4">New Recipe</h3>
        <h1 className=" text-[40px] text-orange-500 pb-5 ">Pineapple Salmon</h1>
        <h3 className="pb-5">
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="rounded bg-teal-600 px-3 pb-1 pt-1">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;

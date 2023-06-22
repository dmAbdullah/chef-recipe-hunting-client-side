import React from "react";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  return (
    <div>
      <div
        className="hero min-h-8 my-5"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/pastry-ingredients-homemade-cakes-bread-empty-kitchen-modern-dining-room-equipped-with-utensils-ready-cooking-with-wheat-flour-glass-bowl-fresh-eggs-table_482257-14378.jpg?w=740&t=st=1683009362~exp=1683009962~hmac=02468597d6946ebb77a395330fc33e37401ce1d08cd6673337695b8ccef99820")`
        }}
      >
        <div className="hero-overlay bg-opacity-50" ></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Chef Section</h1>
          </div>
        </div>
      </div>
      <ChefCard></ChefCard>
    </div>
  );
};

export default ChefSection;

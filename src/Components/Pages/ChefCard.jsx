import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaConciergeBell, FaAward } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server-side-dm-abdullah-dmabdullah.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((error) => console.error(error));
  }, []);
  
  if(
    !chefData.length
    
  )
  {
    return (<progress className="progress w-56"></progress>)
  }

  
  return (
    <div className="mb-5 grid md:grid-cols-3 p-3 gap-5" style={{
      backgroundImage: `url("https://img.freepik.com/free-photo/orange-texture_95678-73.jpg?w=740&t=st=1683237556~exp=1683238156~hmac=c1e09e3d29f6a2f6275d590c41d34825889fafb2852a48ced8a7a33c24053c81")`,
    }}>
     
     {chefData.map((data) => (
        <div
          key={data.Id}
          className="card md:w-96 bg-white mx-auto text-start shadow-xl" 
        >
          <figure>
          <LazyLoad threshold={0.95}>
          <img src={data.Picture} alt="" />
    </LazyLoad>
            
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{data.Name}</h2>
            <p className="inline-flex gap-3 items-center">
            <FaAward /> Experience: {data.Experience} 
            </p>
            <p className="inline-flex gap-3 items-center">
            <FaConciergeBell /> Recipes: {data.Recipes} 
            </p>
            <p className="inline-flex gap-3 items-center">
            <FaThumbsUp /> Likes: {data.Likes} 
            </p>
            <div className="card-actions">
              <Link to={`/recipes/${data.Id}`} className="bg-orange-400 p-3 rounded-lg font-semibold text-center  text-white w-full">
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefCard;

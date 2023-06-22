import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart, FaThumbsUp, FaConciergeBell, FaAward } from "react-icons/fa";
import SweetAlert from 'react-bootstrap-sweetalert';
import LazyLoad from "react-lazy-load";
import useTitle from "../Hook/UseTitle";

const Recipes = () => {
  useTitle('Recipes')
  const { Id } = useParams();
  const recipeDetails = useLoaderData();
  const { Dishes } = recipeDetails;

  const [showAlert, setShowAlert] = useState(false)
  const handleFav = (event) => {
    event.preventDefault();
    
    setShowAlert(true);
    
  };
  return (
    <div>
        {showAlert && (
        <SweetAlert
          success
          title="Added Successfully"
          onConfirm={() => setShowAlert(false)}
        >
          Recipe Added As Favorite
        </SweetAlert>
      )}
      <div
        className="hero min-h-12 my-5"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/english-breakfast-with-fried-egg-bacon-vegetables_89816-17593.jpg?w=740")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 " ></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Chef {recipeDetails.recipe_name}'s Recipes
            </h1>
          </div>
        </div>
      </div>
      <div className="card grid md:grid-cols-3 items-center mb-5 card-side bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src={recipeDetails.Chef_Picture} alt="Movie"/></figure>
  <div className="card-body col-span-2">
    <h2 className="card-title">{recipeDetails.recipe_name}</h2>
    <p>{recipeDetails.Bio}</p>
    <div className="flex mt-5">
    <p className="inline-flex gap-3 items-center">
            <FaAward /> Experience: {recipeDetails.Experience} Years
            </p>
            <p className="inline-flex gap-3 items-center">
            <FaConciergeBell /> Recipes: {recipeDetails.Recipes} 
            </p>
            <p className="inline-flex gap-3 items-center">
            <FaThumbsUp /> Likes: {recipeDetails.Likes} 
            </p>
    </div>
  </div>
</div>
      <div className="grid md:grid-cols-2 gap-5 ">
        {recipeDetails.Dishes.map((recipe) => (
          <div key={recipe._Id} className="card card-compact  bg-base-100 shadow-xl w-full mb-5">
            <figure>
            <LazyLoad threshold={0.95}>
              <img className="h-auto" src={recipe.banner} alt="Shoes" />
          </LazyLoad>
            </figure>
            <div className="card-body">
              <div className="inline-flex items-center justify-between" >
              <h2 className="card-title">{recipe.recipe_name}</h2>
              <button onClick={handleFav} >
                <FaRegHeart/>
              </button>
              </div>
              <p className="bg-transparent">
                <span className="font-bold ">Recipe with Ingredients: </span>
                {recipe.recipe_with_Ingredients}
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}      
      </div>

    </div>
  );
};

export default Recipes;

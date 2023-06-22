import React from 'react';
import ChefSection from './ChefSection';
import Gallery from '../Gallery';
import BookingForm from '../BookingForm';
import useTitle from '../Hook/UseTitle';

const Home = () => {
  useTitle('Home')
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141339.jpg?w=740&t=st=1682997519~exp=1682998119~hmac=b3ccb99b39aaf6eadb1e5ee1de1290c4fc6f73a737f8cf72f5e207b75be83c6f")` }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello Food Lovers</h1>
      <p className="mb-5"><span  className=" font-bold text-2xl ">WELCOME TO</span> <br /><span className=" font-bold text-5xl outline-3 outline-red-800 text-orange-500  underline underline-offset-2">CibO ItalianO</span> <br />
      <span className=" font-bold text-2xl mt-5">The Italian Food Bank</span> </p>
    </div>
  </div>
</div>
<ChefSection></ChefSection>
<Gallery></Gallery>

        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/UseTitle';


const Error404 = () => {
  useTitle('Error')
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1682999160~exp=1682999760~hmac=54f9d718535e6d0be239da558acf79826a168778dd8cc7c394aa8b7a1900362e")` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl md:text-5xl font-bold text-black">This page is outside of the universe</h1>
      <p className="mb-5 text-black font-semibold">The page you are trying to access does't exist or has been moved.
Try going back to our homepage.</p>
      <Link to="/" className="bg-orange-400 p-3 rounded-lg font-semibold  text-white">Go to homepage</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Error404;
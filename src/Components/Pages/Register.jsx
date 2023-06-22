import React, { useContext, useState } from 'react';
import { Form, Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../Hook/UseTitle';

const Register = () => {
  useTitle('Register')
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext);
  const handleRegister = event => {
    event.preventDefault();
    const form= event.target;
    const name= form.name.value;
    const email= form.email.value;
    const photo= form.photo.value;
    const password= form.password.value;
    createUser(email, password)
    .then(result=> {
      const user= result.user;
      Navigate('/login')
    })
    .catch (error=> {
      setError(error.message);
    })
  }
    return (
        <div>
           <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/authentic-italian-pasta_24972-890.jpg?w=740&t=st=1683005929~exp=1683006529~hmac=fa11e3c4b958749b4f05c5243f74fb9432ff1ec2a4e76aff90c2963b18b8ec97")` }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-orange-500">Register now!</h1>
      
    </div>
    <Form onSubmit={handleRegister}>
    <div className="card flex-shrink-0 w-full max-w-sm">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className=" font-bold text-orange-400">Name</span>
          </label>
          <input required type="text" name='name' placeholder="name" className="input input-bordered text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className=" font-bold text-orange-400">Email</span>
          </label>
          <input required type="text" name='email' placeholder="email" className="input input-bordered text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className=" font-bold text-orange-400">Password</span>
          </label>
          <input required type="text" name='password' placeholder="password" className="input input-bordered text-black" />
        <div className="form-control">
          <label className="label">
            <span className=" font-bold text-orange-400">Photo</span>
          </label>
          <input required type="text" name='photo' placeholder="photo url" className="input input-bordered text-black" />
        </div>
          <label className="label label-text text-white"> Have an account ?! Please <Link to="/login" className='text-orange-400 label-text'>Login</Link>
          </label>
          <p className='text-danger'>{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="bg-orange-400 p-3 rounded-lg font-semibold  text-white">Register</button>
        </div>
      </div>
    </div>
    </Form>
  </div>
</div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Register;
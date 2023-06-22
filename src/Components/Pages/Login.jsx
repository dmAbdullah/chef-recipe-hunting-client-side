import React, { useContext, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Result } from "postcss";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useTitle from "../Hook/UseTitle";

const Login = () => {
  const [error, setError] = useState('');
  const { logIn } = useContext(AuthContext);
  const navigate= useNavigate()
  useTitle('Login')
  const handleLogIn = event => {
    event.preventDefault();
    const form= event.target;
    const email= form.email.value;
    const password= form.password.value;
    logIn (email, password)
      .then(result=> {
        const loggedUser= result.user;
        navigate('/')
      })
      .catch (error=> {
        setError(error.message);
      })
    
  }
  const auth = getAuth(app);
  const provider= new GoogleAuthProvider();
  const handleGoogle= ()=> {
    signInWithPopup(auth, provider)
    .then(result=> {
      const user= result.user;
      navigate('/')
    })
    .catch (error=> {
      setError(error.message);
    })
  
    
  }

  const gitProvider = new GithubAuthProvider();
  const handleGit= ()=> {
    signInWithPopup(auth, gitProvider)
    .then(result=> {
      const user= result.user;
      navigate('/')
    })
    .catch (error=> {
      setError(error.message);
    })
  
    
  }
  
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/authentic-italian-pasta_24972-886.jpg?w=740&t=st=1683005359~exp=1683005959~hmac=919f196d5e296a945a59191570a1ad963ba5bd8d6c6eb913fc5fd3490ccd35cf")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-orange-500">
                    Login now!
                  </h1>
                </div>
                <Form onSubmit={handleLogIn}>
                  <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className=" font-bold text-orange-400">
                            Email
                          </span>
                        </label>
                        <input
                          required
                          name="email"
                          type="text"
                          placeholder="email"
                          className="input input-bordered text-black"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className=" font-bold text-orange-400">
                            Password
                          </span>
                        </label>
                        <input
                          required
                          name="password"
                          type="text"
                          placeholder="password"
                          className="input input-bordered text-black"
                        />
                        <label className="label label-text text-white">
                          {" "}
                          New Here ?! Please{" "}
                          <Link
                            to="/register"
                            className="text-orange-400 label-text"
                          >
                            Register
                          </Link>
                        </label>
                        <p className='text-danger'>{error}</p>
                      </div>
                      <div className="form-control mt-6">
                        <button className="bg-orange-400 p-3 rounded-lg font-semibold  text-white">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
                <h2 className="mb-2 ">Or Continue with</h2>
                <div className="flex gap-2 justify-center hr">
                  <button className="border-double border-4  border-orange-400 p-3 rounded-lg font-semibold flex items-center gap-2" onClick={handleGoogle}>
                    <FaGoogle /> Google
                  </button>
                  <button className="border-double border-4 border-orange-400 p-3 rounded-lg font-semibold flex items-center gap-2" onClick={handleGit}>
                    <FaGithub />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

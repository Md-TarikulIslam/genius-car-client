import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-10 grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 py-10 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Register</h1>

          <form onClick={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-600 border-0"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center ">
            Already have an account?
            <Link className="text-orange-600 font-bold ml-2" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

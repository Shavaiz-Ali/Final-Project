// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const params = location.pathname.slice(1);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:9000/user/signup",
          formData
        );
        console.log(response);
        toast.success("Login Successfully you will be redirected soon!", {
          position: "top-right",
          autoClose: 2400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const { name, email, password, confirmPassword } = formData;
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-[210px] bg-[url(https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/05/breadcrumb_bg.jpg)]">
        <h3 className="text-[38px] font-[600] uppercase">My Account</h3>
        <BreadCrumbs className={""} params={params} />
      </div>
      {/* sign up form starts  here  */}
      <Wrapper>
        <form
          className="flex flex-col gap-5 border my-[90px] py-[15px] px-[25px] max-w-[1020px]"
          onSubmit={handleSubmit}
        >
          <h3 className="text-[38px] font-[600] uppercase">Sign Up</h3>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="name" className="font-medium text-sm">
              Full Name:
            </label>
            <input
              className="h-[45px] w-full border px-2 outline-none"
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="enter your name"
              onChange={onChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="email" className="font-medium text-sm">
              Email Address:
            </label>
            <input
              className="h-[45px] w-full border px-2 outline-none"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="example@gmail.com"
              onChange={onChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="password" className="font-medium text-sm">
              Password:
            </label>
            <div className="flex justify-center items-center w-full border px-2">
              <input
                className="h-[45px] w-full px-2 outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={onChange}
              />
              <FaEye
                className={`cursor-pointer ${
                  showPassword ? "text-gray-600" : ""
                }`}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="font-medium text-sm">
              Confirm Password:
            </label>
            <div className="flex justify-center items-center w-full border px-2">
              <input
                className="h-[45px] w-full  px-2 outline-none"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confrimPassword"
                value={confirmPassword}
                placeholder="confrim password"
                onChange={onChange}
              />
              <FaEye
                className={`cursor-pointer ${
                  showConfirmPassword ? "text-gray-600" : ""
                }`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="h-[45px] w-[120px] bg-orange-500 text-white flex justify-center items-center rounded-[4px] text-[14px] font-[400]"
            >
              Sign Up
            </button>
            <h3 className="flex justify-center items-center">
              <input type="checkbox" id="remember_me" />
              <span className="ml-2 text-[14px] font-[500]">Remember me</span>
            </h3>
          </div>
          {/* Display validation errors */}
          {/* ... (your existing code) */}
          <h3 className="text-[14px] font-[400] text-gray-600/[0.90]">
            Alread have an account?
            <Link
              to="/signin"
              className="text-[14px] font-[600] text-orange-600 ml-1"
            >
              Sign In
            </Link>
          </h3>
        </form>
      </Wrapper>
    </>
  );
};

export default SignUp;

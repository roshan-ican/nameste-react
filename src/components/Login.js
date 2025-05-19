import React from "react";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log("Login Form Submitted:", values);
      // Do login logic here (API call, auth, etc)
    }
  });

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
import Link from "next/link";
import React from "react";
import Header from "./headers/header";
import { Button } from "@/components/ui/button";
import Top_Head from "./headers/top-header";

const Login = () => {
  return (
    <main>
       <Top_Head/>
      <Header/>
    <div className="flex h-screen items-center justify-center bg-gray-100 font-sans font-semibold">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block mb-2 text-sm  text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm text-gray-800 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-sm text-gray-800 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-2xl hover:bg-white hover:text-black focus:ring-2 focus:ring-blue-300"
          >
            Login
          </Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don&apos;t have an account? <Link href="/auth/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
    </main>
  );
};

export default Login;
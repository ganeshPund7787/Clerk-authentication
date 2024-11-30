import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const LoginPage: React.FC = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-cyan-500">Login</h1>
      <SignIn />
      <h2 className="text-xl font-semibold mt-8 mb-4 text-cyan-500">
        Or Sign Up
      </h2>
      <SignUp />
    </div>
  );
};

export default LoginPage;

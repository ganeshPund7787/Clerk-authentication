import React from "react";
import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <>{children}</> : <RedirectToSignIn />;
};

export default AuthGuard;

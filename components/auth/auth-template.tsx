import React from "react";

interface AuthTemplateProps {
  children: React.ReactNode;
}
export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className=" mt-8 container sm:flex sm:justify-center">{children}</div>
  );
};

import React from "react";
import { RegisterForm } from "@/components/auth/register-form";
import { AuthTemplate } from "@/components/auth/auth-template";

const Page = async () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default Page;

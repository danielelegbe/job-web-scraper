"use server";
import { LoginModel, RegisterModel } from "@/schemas/auth";
import { createSupabaseServerClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

export const signIn = async (formData: LoginModel) => {
  const supabase = createSupabaseServerClient();

  const response = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  return JSON.stringify(response);
};

export const signUp = async (formData: RegisterModel) => {
  const supabase = createSupabaseServerClient();

  const response = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: "/dashboard",
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
    },
  });

  return JSON.stringify(response);
};

export const signOut = async () => {
  const supabase = createSupabaseServerClient();

  await supabase.auth.signOut();

  return redirect("/");
};

export const getUserSession = async () => {
  const supabase = createSupabaseServerClient();

  return await supabase.auth.getSession();
};

export const getUser = async () => {
  const supabase = createSupabaseServerClient();

  return await supabase.auth.getUser();
};

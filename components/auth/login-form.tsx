"use client";

import { useForm } from "react-hook-form";
import { LoginModel, LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/lib/authActions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  pageParamsError?: string;
}
export const LoginForm: React.FC<LoginFormProps> = ({ pageParamsError }) => {
  const [error, setError] = useState(pageParamsError);
  const router = useRouter();

  const form = useForm<LoginModel>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: LoginModel) => {
    const { error } = JSON.parse(await signIn(formData));

    if (error) {
      return setError(error.message);
    }

    setError("");

    return router.replace("/dashboard");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-auto max-w-[500px] container"
      >
        <div className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {error && <FormMessage className="mt-4">{error}</FormMessage>}
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const SearchSchema = z.object({
  search: z.string().min(1, "Search is required"),
});

export const Search = () => {
  const form = useForm<z.infer<typeof SearchSchema>>({
    defaultValues: { search: "" },
    resolver: zodResolver(SearchSchema),
  });
  const onSubmit = (data: z.infer<typeof SearchSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="mt-12" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center py-4">
                <SearchIcon
                  onClick={() => form.setFocus("search")}
                  className="relative cursor-pointer h-4 w-4 left-7 top-2 transform -translate-y-1/2"
                />
                <Input
                  className="md:max-w-[500px] h-10 pl-8"
                  type="search"
                  placeholder="Indeed Url"
                  {...field}
                />
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

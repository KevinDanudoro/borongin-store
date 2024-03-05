"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signInSchema } from "@/schema/authSchema";
import React from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">Sign In to Borongin</h2>
      <small className="block mb-4">Enter your detail below</small>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
                    className="border-x-0 border-t-0 rounded-none border-b border-secondary-foreground"
                  />
                </FormControl>
                <FormMessage className="first-letter:uppercase" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="border-x-0 border-t-0 rounded-none border-b border-secondary-foreground"
                  />
                </FormControl>
                <FormMessage className="first-letter:uppercase" />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            <Button className="px-6 py-1 flex-1 max-w-32" type="submit">
              Sign In
            </Button>

            <Button variant="link" className="flex-1 max-w-32">
              Forget Password?
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignIn;

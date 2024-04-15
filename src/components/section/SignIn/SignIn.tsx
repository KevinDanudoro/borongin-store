"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInUserSchema } from "@/model/user";
import { signInUserController } from "@/controller/user";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  const form = useForm<z.infer<typeof signInUserSchema>>({
    resolver: zodResolver(signInUserSchema),
  });

  async function onSubmit(values: z.infer<typeof signInUserSchema>) {
    const signIn = await signInUserController(values);
    console.log({ signIn });
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">Sign In to Borongin</h2>
      <small className="block mb-4">Enter your details below</small>

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
                    className="border-x-0 border-t-0 rounded-none border-b border-secondary-foreground focus-visible:ring-0 focus-visible:border-x-0 focus-visible:border-t-0"
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
                    className="border-x-0 border-t-0 rounded-none border-b border-secondary-foreground focus-visible:ring-0 focus-visible:border-x-0 focus-visible:border-t-0"
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

          <p className="text-center text-sm">
            {"Don't have an account?"}{" "}
            <Link
              href={"/sign-up"}
              className="text-foreground border-b border-b-foreground pb-1 ml-4 hover:border-b-primary hover:border-b-4 hover:font-bold transition-all"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default SignIn;

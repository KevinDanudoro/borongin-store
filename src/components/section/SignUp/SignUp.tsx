"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/schema/authSchema";
import React from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
      <small className="block mb-4">Enter your details below</small>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
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
          <Button className="w-full py-4" type="submit">
            Sign Up
          </Button>
          <Button
            className="w-full py-4 flex items-center gap-4 border-2"
            variant="outline"
          >
            <Image
              src={"/icon/google.png"}
              alt="Google icon"
              width={20}
              height={20}
            />
            Sign Up With Google
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignUp;

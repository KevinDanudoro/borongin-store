"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signUpUserSchema } from "@/model/user";
import { signUpUserController } from "@/controller/user";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof signUpUserSchema>>({
    resolver: zodResolver(signUpUserSchema),
  });

  async function onSubmit(values: z.infer<typeof signUpUserSchema>) {
    setIsLoading(true);
    const { statusCode, message } = await signUpUserController(values);
    setIsLoading(false);

    if (statusCode === 201)
      router.replace("/sign-in?" + searchParams.toString());
    else {
      toast({
        variant: "destructive",
        title: "Failed to register user",
        description: message,
      });
    }
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
      <small className="block mb-4">Enter your details below</small>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
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
          <Button className="w-full py-4" type="submit" disabled={isLoading}>
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

import Image from "next/image";
import React from "react";
import type { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="w-full h-screen bg-background flex justify-center items-center flex-col gap-4">
      <div className="p-10 bg-primary/20 rounded-full">
        <Image
          src="/loading.png"
          width={512}
          height={512}
          alt="Loading image"
          className="w-32 aspect-square animate-bounce"
        />
      </div>
      <p className="text-3xl font-bold text-foreground">Preparing Your Page</p>
      <small className="text-base text-foreground/70">
        Please wait a minute
      </small>
    </div>
  );
};

export default Loading;

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import type { FC } from "react";

interface ImageMagnifierProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const ImageMagnifier: FC<ImageMagnifierProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPotition, setCursorPotition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setCursorPotition({ x, y });
  };

  return (
    <div
      className={className}
      {...props}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <Image
        src={src}
        alt={alt}
        width={446}
        height={315}
        className={cn({
          "bg-secondary object-contain h-full w-full p-4 md:p-8": true,
          hidden: showMagnifier,
          block: !showMagnifier,
        })}
      />
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `${cursorPotition.x}% ${cursorPotition.y}%`,
        }}
        className={cn({
          "bg-no-repeat bg-[length:200%] w-full h-full bg-origin-content p-8 md:p-16":
            true,
          hidden: !showMagnifier,
          block: showMagnifier,
        })}
      ></div>
    </div>
  );
};

export default ImageMagnifier;

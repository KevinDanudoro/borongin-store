"use client";

import useCountdown from "@/hooks/components/useCountdown";
import { cn } from "@/lib/utils";
import React from "react";
import type { FC } from "react";

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {}

const Countdown: FC<CountdownProps> = ({ className, ...props }) => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div
      className={cn(
        "grid grid-cols-[auto,auto,auto,auto,auto,auto,auto] grid-rows-[repeat(2,auto)] w-fit place-items-center gap-x-4",
        className
      )}
      {...props}
    >
      <small className="col-start-1 row-start-1 font-medium text-sm">
        Days
      </small>
      <small className="col-start-3 row-start-1 font-medium text-sm">
        Hours
      </small>
      <small className="col-start-5 row-start-1 font-medium text-sm">
        Minutes
      </small>
      <small className="col-start-7 row-start-1 font-medium text-sm">
        Seconds
      </small>

      <p className="col-start-1 row-start-2 text-2xl font-bold">{days}</p>
      <p className="col-start-2 row-start-2 text-2xl font-semibold text-primary">
        :
      </p>
      <p className="col-start-3 row-start-2 text-2xl font-bold">{hours}</p>
      <p className="col-start-4 row-start-2 text-2xl font-semibold text-primary">
        :
      </p>
      <p className="col-start-5 row-start-2 text-2xl font-bold">{minutes}</p>
      <p className="col-start-6 row-start-2 text-2xl font-semibold text-primary">
        :
      </p>
      <p className="col-start-7 row-start-2 text-2xl font-bold">{seconds}</p>
    </div>
  );
};

export default Countdown;

import React from "react";
import type { FC } from "react";
import Star from "./star";

interface RatingProps {
  rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex flex-row gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => {
        if (rating - (i + 1) >= 0) return <Star key={i} variant="filled" />;
        else if (rating - (i + 1) < 0 && Math.abs(rating - (i + 1)) < 1)
          return <Star key={i} variant="half" />;
        else return <Star key={i} variant="empty" />;
      })}
    </div>
  );
};

export default Rating;

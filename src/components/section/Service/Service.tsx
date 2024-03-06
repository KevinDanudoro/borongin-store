import React from "react";
import type { FC } from "react";
import serviceData from "./service-data";

interface ServiceProps {}

const Service: FC<ServiceProps> = ({}) => {
  const data = serviceData;
  return (
    <div className="flex flex-col justify-evenly gap-y-12 md:flex-row md:gap-x-8">
      {data.map((service) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className="flex flex-col items-center gap-2">
            <Icon
              size={60}
              className="bg-foreground text-background rounded-full border-8 border-secondary/80 p-2 mb-3"
            />
            <h3 className="uppercase text-lg font-semibold text-center">
              {service.title}
            </h3>
            <p className="text-xs font-normal first-letter:uppercase text-center">
              {service.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Service;

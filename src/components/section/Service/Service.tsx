import React from "react";
import type { FC } from "react";
import serviceData from "./service-data";

interface ServiceProps {}

const Service: FC<ServiceProps> = ({}) => {
  const data = serviceData;
  return (
    <div className="flex flex-row justify-evenly">
      {data.map((service) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className="flex flex-col items-center gap-2">
            <Icon
              size={60}
              className="bg-foreground text-background rounded-full border-8 border-secondary/80 p-2 mb-3"
            />
            <h3 className="uppercase text-lg font-semibold">{service.title}</h3>
            <p className="text-xs font-normal first-letter:uppercase">
              {service.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Service;

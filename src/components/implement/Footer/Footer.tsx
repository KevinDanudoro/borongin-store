import React from "react";
import type { FC } from "react";
import footerData from "./footer-data";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-foreground text-background px-4 sm:px-8 md:px-20 lg:px-48 py-12 flex flex-col md:flex-row md:justify-between gap-10">
      {footerData.map((data) => (
        <div
          key={data.title}
          className="w-72 mx-auto md:mx-0 md:w-fit md:max-w-xs"
        >
          <p className="text-base font-medium mb-4">{data.title}</p>
          <ul className="text-sm flex flex-col gap-2">
            {data.content.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;

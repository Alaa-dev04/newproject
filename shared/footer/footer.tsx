import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex justify-between m-4 ">
      <p>
        Lorem ipsum dolor sit amet consectetur @ adipisicing elit. Pariatur,
        voluptate.
      </p>
      <div className="flex gap-1">
        <Image
          src="/1.png"
          alt=" social media"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/2.png"
          alt=" social media"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/3.png"
          alt=" social media"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/4.png"
          alt=" social media"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;

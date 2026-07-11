import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl px-8">
        <div className="max-w-md flex flex-col gap-9">
          <h1 className="text-5xl font-extrabold text-green-200">
            Better design for your digital products.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            maiores incidunt quibusdam?
          </p>
          <Link href="/contact">
            <button className="w-fit rounded-sm bg-green-200/70 p-4 transition-all duration-300 hover:bg-green-200/90 hover:scale-110">
              Book yours now
            </button>
          </Link>
        </div>

        <Image
          src="/hero.png"
          alt="Home page"
          width={500}
          height={500}
          className="animate-float"
        />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-10">
      {/* Hero */}
      <div className="relative h-80 w-full overflow-hidden rounded-md">
        <Image
          src="/websites.jpg"
          alt="About"
          fill
          className="object-cover"
        />

        <div className="absolute bottom-6 left-6">
          <h1 className="bg-green-300 px-3 py-2 text-3xl font-bold text-white">
            Digital Storytellers
          </h1>

          <p className="bg-green-300 px-3 py-1 text-white">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-12 md:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Who We Are?</h2>

          <p className="text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
          </p>

          <p className="text-gray-400 leading-8">
            A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor.
          </p>

          <p className="text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">What We Do?</h2>

          <p className="text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
          </p>

          <div className="space-y-3">
            <div className="inline-block bg-zinc-700 px-3 py-1 text-sm">
              Creative Illustrations
            </div>

            <div className="inline-block bg-zinc-700 px-3 py-1 text-sm">
              Dynamic Websites
            </div>

            <div className="inline-block bg-zinc-700 px-3 py-1 text-sm">
              Fast and Handy Mobile Apps
            </div>
          </div>

          <button className="rounded bg-green-300 px-5 py-2 font-medium text-black transition hover:bg-green-400 hover:scale-110">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
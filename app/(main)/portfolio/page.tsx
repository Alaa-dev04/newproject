import Link from "next/link";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Illustrations",
    image: "/illustration.png",
    href: "/portfolio/illustrations",
  },
  {
    id: 2,
    title: "Websites",
    image: "/websites.jpg",
    href: "/portfolio/websites",
  },
  {
    id: 3,
    title: "Applications",
    image: "/apps.jpg",
    href: "/portfolio/applications",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-6xl font-bold mb-3">Our Works</h1>

      <h2 className="text-3xl font-semibold text-gray-300 mb-10">
        Choose a gallery
      </h2>

      <div className="flex flex-wrap gap-8">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative h-[420px] w-[250px] overflow-hidden border-2 border-gray-400"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/20" />

            <h3 className="absolute bottom-5 left-5 text-4xl font-bold transition-colors duration-300 group-hover:text-green-300">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}